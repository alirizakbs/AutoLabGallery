# Ali Rıza Akbaş - Backend Görevleri

## Ad Soyad
Ali Rıza Akbaş

## Backend Domain
BURAYA_BACKEND_DOMAIN_LINKI_GELECEK

## Video Linki
BURAYA_VIDEO_LINKI_GELECEK

## Sorumlu Olduğum Gereksinimler
1. Kullanıcı Girişi
2. Kayıt Ol
3. Şifremi Unuttum
4. Yönetici Girişi
5. Kredi Hesaplama
6. Piyasa Değeri Sorgulama
7. Personel Güncelleme
8. Personel Silme

## Tamamladığım Gereksinim Sayısı
8 / 8

## Endpointler

### 1. Kullanıcı Girişi
- Method: POST
- Endpoint: `/auth/login`

Örnek Response:
```json
{
  "message": "Kullanıcı girişi başarılı",
  "token": "ornek-jwt-token"
}
```

### 2. Kayıt Ol
- Method: POST
- Endpoint: `/auth/register`

Örnek Response:
```json
{
  "message": "Kullanıcı kaydı oluşturuldu"
}
```

### 3. Şifremi Unuttum
- Method: POST
- Endpoint: `/auth/forgot-password`

Örnek Response:
```json
{
  "message": "Şifre sıfırlama bağlantısı gönderildi"
}
```

### 4. Yönetici Girişi
- Method: POST
- Endpoint: `/auth/admin/login`

Örnek Response:
```json
{
  "message": "Yönetici girişi başarılı",
  "token": "ornek-admin-token"
}
```

### 5. Kredi Hesaplama
- Method: POST
- Endpoint: `/credit/calculate`

Örnek Request:
```json
{
  "amount": 500000,
  "interestRate": 2.5,
  "term": 36
}
```

Örnek Response:
```json
{
  "monthlyPayment": 20833.33,
  "totalPayment": 750000
}
```

### 6. Piyasa Değeri Sorgulama
- Method: GET
- Endpoint: `/market-value?brand=Toyota&model=Corolla&year=2020`

Örnek Response:
```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2020,
  "marketValue": 950000,
  "source": ["arabam.com", "sahibinden.com"]
}
```

### 7. Personel Güncelleme
- Method: PUT
- Endpoint: `/personnel/{personnelId}`

Örnek Request:
```json
{
  "name": "Mehmet Kaya",
  "role": "Ekspertiz Uzmanı"
}
```

Örnek Response:
```json
{
  "message": "Personel güncellendi",
  "personnel": {
    "id": "1",
    "name": "Mehmet Kaya",
    "role": "Ekspertiz Uzmanı"
  }
}
```

### 8. Personel Silme
- Method: DELETE
- Endpoint: `/personnel/{personnelId}`

Örnek Response:
```json
{
  "message": "Personel silindi",
  "deletedPersonnelId": "1"
}
```