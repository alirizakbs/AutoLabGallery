openapi: 3.0.3
info:
  title: Araç Yönetim ve Finans API
  description: 16 farklı gereksinimi kapsayan tam uyumlu API dokümantasyonu.
  version: 1.1.0

servers:
  - url: https://api.yazmuh.com/v1

tags:
  - name: auth
  - name: vehicles
  - name: personnel
  - name: messaging
  - name: services

paths:
  # --- AUTH ---
  /auth/register:
    post:
      tags: [auth]
      summary: Kullanıcı kaydı
      responses:
        '201':
          description: Başarılı
  /auth/login:
    post:
      tags: [auth]
      summary: Kullanıcı girişi
      responses:
        '200':
          description: Başarılı
  /auth/forgot-password:
    post:
      tags: [auth]
      summary: Şifre sıfırlama
      responses:
        '200':
          description: Başarılı
  /auth/admin/login:
    post:
      tags: [auth]
      summary: Yönetici girişi
      responses:
        '200':
          description: Başarılı

  # --- VEHICLES (Model ve Fiyat Ayrı) ---
  /vehicles/{vehicleId}/model:
    parameters:
      - name: vehicleId
        in: path
        required: true
        schema:
          type: string
    post:
      tags: [vehicles]
      summary: Araç model bilgisi ekleme
      responses:
        '201':
          description: Başarılı
  /vehicles/{vehicleId}/price:
    parameters:
      - name: vehicleId
        in: path
        required: true
        schema:
          type: string
    post:
      tags: [vehicles]
      summary: Araç fiyat bilgisi ekleme
      responses:
        '201':
          description: Başarılı
  /vehicles/{vehicleId}/images:
    parameters:
      - name: vehicleId
        in: path
        required: true
        schema:
          type: string
    post:
      tags: [vehicles]
      summary: Fotoğraf ekle
      responses:
        '201':
          description: Başarılı
    put:
      tags: [vehicles]
      summary: Fotoğraf güncelle
      responses:
        '200':
          description: Başarılı
    delete:
      tags: [vehicles]
      summary: Fotoğraf sil
      responses:
        '204':
          description: Başarılı

  # --- PERSONNEL ---
  /personnel:
    post:
      tags: [personnel]
      summary: Personel ekle
      responses:
        '201':
          description: Başarılı
    put:
      tags: [personnel]
      summary: Personel güncelle
      responses:
        '200':
          description: Başarılı
    delete:
      tags: [personnel]
      summary: Personel sil
      responses:
        '204':
          description: Başarılı

  # --- MESSAGING ---
  /messages:
    post:
      tags: [messaging]
      summary: Mesaj gönder
      responses:
        '201':
          description: Başarılı
    delete:
      tags: [messaging]
      summary: Mesaj sil
      responses:
        '204':
          description: Başarılı

  # --- SERVICES ---
  /credit/calculate:
    post:
      tags: [services]
      summary: Kredi hesapla
      responses:
        '200':
          description: Başarılı
  /market-value:
    get:
      tags: [services]
      summary: Piyasa sorgula
      responses:
        '200':
          description: Başarılı
