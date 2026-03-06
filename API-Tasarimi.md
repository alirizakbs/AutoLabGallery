openapi: 3.0.3
info:
  title: Araç Platformu API
  description: |
    Araç satış ve yönetim platformu için RESTful API.

    Özellikler:
    - Kullanıcı ve yönetici kimlik doğrulama
    - Personel yönetimi
    - Araç ve fotoğraf yönetimi
    - Mesajlaşma sistemi
    - Kredi hesaplama
    - Araç piyasa değeri sorgulama
  version: 1.0.0
  contact:
    name: API Destek
    email: support@vehicleapi.com

servers:
  - url: https://api.vehicleapp.com/v1
    description: Production Server
  - url: http://localhost:3000/v1
    description: Development Server

tags:
  - name: auth
    description: Kimlik doğrulama işlemleri
  - name: personnel
    description: Personel yönetimi
  - name: vehicles
    description: Araç yönetimi
  - name: messages
    description: Mesajlaşma sistemi
  - name: credit
    description: Kredi hesaplama işlemleri
  - name: market
    description: Araç piyasa değeri sorgulama

paths:

  /auth/login:
    post:
      tags:
        - auth
      summary: Kullanıcı girişi
      description: Email ve şifre ile kullanıcı girişi yapar ve JWT token döndürür.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          description: Giriş başarılı
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthToken'
        '401':
          description: Geçersiz giriş bilgileri

  /auth/register:
    post:
      tags:
        - auth
      summary: Kullanıcı kaydı
      description: Yeni kullanıcı oluşturur.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RegisterRequest'
      responses:
        '201':
          description: Kullanıcı oluşturuldu

  /auth/forgot-password:
    post:
      tags:
        - auth
      summary: Şifre sıfırlama
      description: Kullanıcının email adresine şifre sıfırlama linki gönderir.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - email
              properties:
                email:
                  type: string
                  format: email
      responses:
        '200':
          description: Email gönderildi

  /auth/admin/login:
    post:
      tags:
        - auth
      summary: Yönetici girişi
      description: Yönetici hesabı ile sisteme giriş yapılmasını sağlar.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          description: Yönetici girişi başarılı

  /credit/calculate:
    post:
      tags:
        - credit
      summary: Kredi hesaplama
      description: Kredi tutarı, faiz ve vadeye göre ödeme planını hesaplar.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreditRequest'
      responses:
        '200':
          description: Hesaplama sonucu
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CreditResponse'

  /market-value:
    get:
      tags:
        - market
      summary: Araç piyasa değeri
      description: Araç marka, model ve yılına göre piyasa değeri döndürür.
      parameters:
        - name: brand
          in: query
          schema:
            type: string
        - name: model
          in: query
          schema:
            type: string
        - name: year
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Piyasa değeri sonucu

  /personnel:
    post:
      tags:
        - personnel
      summary: Personel ekleme
      description: Sisteme yeni personel ekler.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Personnel'
      responses:
        '201':
          description: Personel eklendi

  /personnel/{personnelId}:
    put:
      tags:
        - personnel
      summary: Personel güncelleme
      parameters:
        - name: personnelId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Personel güncellendi

    delete:
      tags:
        - personnel
      summary: Personel silme
      parameters:
        - name: personnelId
          in: path
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Personel silindi

  /vehicles:
    post:
      tags:
        - vehicles
      summary: Araç ekleme
      description: Yeni araç kaydı oluşturur.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Vehicle'
      responses:
        '201':
          description: Araç oluşturuldu

  /vehicles/{vehicleId}/price:
    post:
      tags:
        - vehicles
      summary: Araç fiyat ekleme
      parameters:
        - name: vehicleId
          in: path
          required: true
          schema:
            type: string
      responses:
        '201':
          description: Fiyat eklendi

  /vehicles/{vehicleId}/images:
    post:
      tags:
        - vehicles
      summary: Araç fotoğraf ekleme
      parameters:
        - name: vehicleId
          in: path
          required: true
          schema:
            type: string
      responses:
        '201':
          description: Fotoğraf eklendi

  /vehicles/{vehicleId}/images/{imageId}:
    put:
      tags:
        - vehicles
      summary: Araç fotoğraf güncelleme
      parameters:
        - name: vehicleId
          in: path
          required: true
          schema:
            type: string
        - name: imageId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Fotoğraf güncellendi

    delete:
      tags:
        - vehicles
      summary: Araç fotoğraf silme
      parameters:
        - name: vehicleId
          in: path
          required: true
          schema:
            type: string
        - name: imageId
          in: path
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Fotoğraf silindi

  /messages:
    post:
      tags:
        - messages
      summary: Mesaj gönderme
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Message'
      responses:
        '201':
          description: Mesaj gönderildi

  /messages/{messageId}:
    delete:
      tags:
        - messages
      summary: Mesaj silme
      parameters:
        - name: messageId
          in: path
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Mesaj silindi

components:

  schemas:

    LoginRequest:
      type: object
      required:
        - email
        - password
      properties:
        email:
          type: string
          example: user@email.com
        password:
          type: string
          example: 12345678

    RegisterRequest:
      type: object
      required:
        - firstName
        - lastName
        - email
        - password
      properties:
        firstName:
          type: string
          example: Ahmet
        lastName:
          type: string
          example: Yılmaz
        email:
          type: string
          example: ahmet@email.com
        phone:
          type: string
          example: "+905551234567"
        password:
          type: string
          example: Guvenli123!

    AuthToken:
      type: object
      properties:
        token:
          type: string
        expiresIn:
          type: integer

    Personnel:
      type: object
      properties:
        name:
          type: string
        role:
          type: string

    Vehicle:
      type: object
      properties:
        brand:
          type: string
        model:
          type: string
        year:
          type: integer

    Message:
      type: object
      properties:
        receiverId:
          type: string
        message:
          type: string

    CreditRequest:
      type: object
      properties:
        amount:
          type: number
        interestRate:
          type: number
        term:
          type: integer

    CreditResponse:
      type: object
      properties:
        monthlyPayment:
          type: number
        totalPayment:
          type: number
