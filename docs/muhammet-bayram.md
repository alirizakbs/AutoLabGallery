
# Muhammet Bayram - Backend Görevleri

## Ad Soyad
Muhammet Bayram

## Backend Domain
BURAYA_BACKEND_DOMAIN_LINKI_GELECEK

## Video Linki
BURAYA_VIDEO_LINKI_GELECEK

## Sorumlu Olduğum Gereksinimler
1. Personel Ekleme
2. Araç Model Bilgileri Ekleme
3. Araç Fiyat Bilgileri Ekleme
4. Araç Fotoğraf Ekleme
5. Araç Fotoğraf Güncelleme
6. Araç Fotoğraf Silme
7. Mesaj Gönderme
8. Mesaj Silme

## Tamamladığım Gereksinim Sayısı
8 / 8

## Endpointler

### 1. Personel Ekleme
- Method: POST
- Endpoint: `/personnel`

Örnek Request:
```json
{
  "name": "Ahmet Yılmaz",
  "role": "Satış Danışmanı"
}
```

Örnek Response:
```json
{
  "message": "Personel eklendi",
  "personnel": {
    "id": "1",
    "name": "Ahmet Yılmaz",
    "role": "Satış Danışmanı"
  }
}
```

### 2. Araç Model Bilgileri Ekleme
- Method: POST
- Endpoint: `/vehicles`

Örnek Request:
```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2022
}
```

Örnek Response:
```json
{
  "message": "Araç eklendi",
  "vehicle": {
    "id": "101",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022
  }
}
```

### 3. Araç Fiyat Bilgileri Ekleme
- Method: POST
- Endpoint: `/vehicles/{vehicleId}/price`

Örnek Request:
```json
{
  "price": 950000
}
```

Örnek Response:
```json
{
  "message": "Araç fiyatı eklendi",
  "vehicleId": "101",
  "price": 950000
}
```

### 4. Araç Fotoğraf Ekleme
- Method: POST
- Endpoint: `/vehicles/{vehicleId}/images`

Örnek Request:
```json
{
  "imageUrl": "https://example.com/car1.jpg"
}
```

Örnek Response:
```json
{
  "message": "Araç fotoğrafı eklendi",
  "vehicleId": "101",
  "image": {
    "id": "img1",
    "imageUrl": "https://example.com/car1.jpg"
  }
}
```

### 5. Araç Fotoğraf Güncelleme
- Method: PUT
- Endpoint: `/vehicles/{vehicleId}/images/{imageId}`

Örnek Request:
```json
{
  "imageUrl": "https://example.com/car1-new.jpg"
}
```

Örnek Response:
```json
{
  "message": "Araç fotoğrafı güncellendi",
  "vehicleId": "101",
  "image": {
    "id": "img1",
    "imageUrl": "https://example.com/car1-new.jpg"
  }
}
```

### 6. Araç Fotoğraf Silme
- Method: DELETE
- Endpoint: `/vehicles/{vehicleId}/images/{imageId}`

Örnek Response:
```json
{
  "message": "Araç fotoğrafı silindi",
  "vehicleId": "101",
  "deletedImageId": "img1"
}
```

### 7. Mesaj Gönderme
- Method: POST
- Endpoint: `/messages`

Örnek Request:
```json
{
  "receiverId": "123",
  "message": "Bu araç hala satışta mı?"
}
```

Örnek Response:
```json
{
  "message": "Mesaj gönderildi",
  "data": {
    "id": "msg1",
    "receiverId": "123",
    "message": "Bu araç hala satışta mı?"
  }
}
```

### 8. Mesaj Silme
- Method: DELETE
- Endpoint: `/messages/{messageId}`

Örnek Response:
```json
{
  "message": "Mesaj silindi",
  "deletedMessageId": "msg1"
}
```