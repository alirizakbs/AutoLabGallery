1.⁠ ⁠Kullanıcı Girişi
API Metodu: POST /auth/login

Açıklama: Kullanıcıların email ve şifre ile sisteme giriş yapmasını sağlar. Doğrulama başarılı ise JWT token oluşturulur. Hatalı girişlerde uyarı mesajı verilir.

2.⁠ ⁠Kayıt Ol
API Metodu: POST /auth/register

Açıklama: Kullanıcıların ad, soyad, email, telefon ve şifre bilgileri ile sisteme kayıt olmasını sağlar. Email benzersizdir ve şifre güvenli şekilde hashlenerek saklanır.

3.⁠ ⁠Şifremi Unuttum
API Metodu: POST /auth/forgot-password

Açıklama: Kullanıcının email adresi üzerinden şifre sıfırlama talebi oluşturmasını sağlar. Sisteme kayıtlı email adresine doğrulama bağlantısı gönderilir ve kullanıcı yeni şifre belirleyebilir.

4.⁠ ⁠Yönetici Girişi
API Metodu: POST /auth/admin/login

Açıklama: Yöneticinin sisteme giriş yapmasını sağlar. Rol bazlı yetkilendirme uygulanır ve yönetici paneline erişim sağlanır.

5.⁠ ⁠Kredi Hesaplama
API Metodu: POST /credit/calculate

Açıklama: Kullanıcının kredi tutarı, faiz oranı ve vade bilgilerini girerek aylık taksit ve toplam geri ödeme tutarını hesaplamasını sağlar.

6.⁠ ⁠Piyasa Değeri Sorgulama
API Metodu: GET /market-value

Açıklama: Araç piyasa değerinin arabam.com ve sahibinden.com verilerine göre görüntülenmesini sağlar.
