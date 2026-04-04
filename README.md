# AutoLabGallery

AutoLabGallery, araç arama ve yönetim işlemleri için geliştirilen bir yazılım mühendisliği proje uygulamasıdır. Bu proje kapsamında araç ekleme, araç fiyat bilgisi ekleme, araç fotoğraf işlemleri, kullanıcı ve yönetici giriş işlemleri, mesajlaşma, kredi hesaplama, piyasa değeri sorgulama ve personel işlemleri için REST API geliştirilmiştir.

## Proje Amacı
Kullanıcıların araçlar ile ilgili işlemleri yapabildiği, yönetici ve personel tarafında yönetim işlemlerinin sağlandığı bir araç platformu geliştirmektir.

## Kullanılan Teknolojiler
- Node.js
- Express.js
- REST API
- Postman
- Git / GitHub

## Backend Gereksinimleri
### Ali Rıza Akbaş
- POST /auth/login
- POST /auth/register
- POST /auth/forgot-password
- POST /auth/admin/login
- POST /credit/calculate
- GET /market-value
- PUT /personnel/{personnelId}
- DELETE /personnel/{personnelId}

### Muhammet Bayram
- POST /personnel
- POST /vehicles
- POST /vehicles/{vehicleId}/price
- POST /vehicles/{vehicleId}/images
- PUT /vehicles/{vehicleId}/images/{imageId}
- DELETE /vehicles/{vehicleId}/images/{imageId}
- POST /messages
- DELETE /messages/{messageId}

## Dosyalar
- API Tasarımı: `API-Tasarimi.md`
- OpenAPI Dosyası: `AutoLabGallery.yaml`
- Gereksinim Analizi: `Gereksinim-Analizi.md`

## Grup Üyeleri
- Ali Rıza Akbaş
- Muhammet Bayram

## Backend Domain
BURAYA_BACKEND_DOMAIN_LINKI_GELECEK

## Video Sunum Linkleri
- Ali Rıza Akbaş: BURAYA_VIDEO_LINKI_GELECEK
- Muhammet Bayram: BURAYA_VIDEO_LINKI_GELECEK

## Not
Bu repoda backend geliştirme, API tasarımı ve gereksinim analizleri yer almaktadır. Frontend aşaması tamamlandığında frontend domain ve ilgili md dosyaları da eklenecektir.