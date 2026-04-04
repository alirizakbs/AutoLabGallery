
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { jwtDecode } from 'jwt-decode';
import { socket } from './socket';
import axios from 'axios';

import ProtectedRoute from './ProtectedRoute'; 
import AdminProtectedRoute from './AdminProtectedRoute'; 
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import VehiclesPage from './VehiclesPage';
import MarketValuePage from './MarketValuePage';
import MessagesPage from './MessagesPage';

// import UserMessagesPage from './UserMessagesPage'; // Bu dosya henüz olmadığı için yoruma alıyoruz

function AppContent() {
  const [notificationCount, setNotificationCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        if(socket.connected) socket.disconnect();
        setNotificationCount(0);
        return;
    }

    let decodedUser;
    try {
      decodedUser = jwtDecode(token);
    } catch (e) {
      if(socket.connected) socket.disconnect();
      return;
    }

    // *** KESİN ÇÖZÜM: Bağlantı sadece burada, bir kez kurulur. ***
    if (!socket.connected) {
        console.log(`✅ Token doğrulandı (${decodedUser.role}), App.js üzerinden socket bağlantısı kuruluyor...`);
        socket.connect();
    }
    
    const playNotificationSound = () => {
        const audio = new Audio('/notification.mp3');
        audio.play().catch(e => console.log("Ses çalınamadı:", e));
    };
    
    const handleAdminNewMessage = () => {
        playNotificationSound();
        setNotificationCount(prevCount => prevCount + 1);
    };
    const handleResetNotifications = () => setNotificationCount(0);
    const handleRefresh = () => {
        axios.get('http://localhost:5000/api/notifications/unread-count', { headers: { 'Authorization': `Bearer ${token}` }})
             .then(res => setNotificationCount(res.data.unreadCount));
    };

    if (decodedUser.role === 'admin') {
      handleRefresh();
      socket.on('admin_new_unread_message', handleAdminNewMessage);
      socket.on('notifications_were_reset', handleResetNotifications);
      socket.on('admin_refresh_conversations', handleRefresh);
    }

    return () => {
        socket.off('admin_new_unread_message', handleAdminNewMessage);
        socket.off('notifications_were_reset', handleResetNotifications);
        socket.off('admin_refresh_conversations', handleRefresh);
    };
    
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<ProtectedRoute><HomePage notificationCount={notificationCount} /></ProtectedRoute>} />
      {/* <Route path="/mesajlarim" element={<ProtectedRoute><UserMessagesPage setNotificationCount={setNotificationCount} /></ProtectedRoute>} /> */}
      <Route path="/dashboard" element={<AdminProtectedRoute><Dashboard notificationCount={notificationCount} /></AdminProtectedRoute>} />
      <Route path="/admin/vehicles" element={<AdminProtectedRoute><VehiclesPage /></AdminProtectedRoute>} />
      <Route path="/admin/personnel" element={<AdminProtectedRoute><PersonnelPage /></AdminProtectedRoute>} />
      <Route path="/admin/messages" element={<AdminProtectedRoute><MessagesPage /></AdminProtectedRoute>} />
     
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;