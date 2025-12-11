# **Verification API – Lost & Found System**

API ini digunakan untuk mengelola proses **verifikasi laporan** dalam sistem Lost & Found, seperti memvalidasi laporan barang hilang atau ditemukan, memberikan approval oleh admin, dan mengirim notifikasi ke layanan lain.

---

## 🚀 **Fitur Utama**

* Ajukan verifikasi laporan
* Cek status verifikasi berdasarkan laporan
* Admin dapat melakukan approve/reject
* Redis caching untuk status verifikasi
* Redis Pub/Sub untuk notifikasi
* Validasi input (Joi)
* Autentikasi JWT
* Logging (Winston)
* Terintegrasi dengan API Report dan Notification

---

# 📦 **1. Cara Clone Project**

```bash
git clone https://github.com/USERNAME/verification-api.git
cd verification-api
```

---

# 📥 **2. Install Dependencies**

```bash
npm install
```

---

# ⚙️ **3. Konfigurasi Environment (.env)**

cp .env.example .env

---

# 🗂️ **4. Struktur Folder**

```
verification-api/
 ├── src/
 │   ├── config/
 │   │   ├── database.js
 │   │   ├── logger.js
 │   │   └── redis.js
 │   ├── controllers/
 │   │   └── verificationController.js
 │   ├── middleware/
 │   │   ├── auth.js
 │   │   ├── cache.js
 │   │   └── validation.js
 │   ├── models/
 │   │   └── Verification.js
 │   ├── routes/
 │   │   └── verificationRoutes.js
 │   ├── services/
 │   │   └── verificationService.js
 │   ├── utils/
 │   │   └── publisher.js
 │   └── server.js
 ├── logs/
 ├── .env
 ├── package.json
 └── README.md
```

---

# 🗄️ **5. Setup Database**

Masukkan database lost_and_found_db di phpmyadmin atau haidisql dll 

---

# ▶️ **6. Jalankan Server**

### Mode developer (nodemon)

```bash
npm run dev
```

### Mode production

```bash
npm start
```

---

# 🔧 **7. API Endpoints**

## **POST** `/api/verifications`

Ajukan verifikasi laporan.

### Body:

```json
{
  "report_id": 1,
  "claimant_id": 5,
  "proof": "https://example.com/bukti.jpg"
}
```

### Response:

```json
{
  "message": "Verification submitted",
  "data": { ... }
}
```

---

## **GET** `/api/verifications/:reportId`

Cek status verifikasi berdasarkan report.

---

## **PUT** `/api/verifications/:id`

🔒 **Admin-only**

### Body:

```json
{
  "status": "approved",
  "admin_id": 1
}
```

---

# 🧪 **8. Cara Tes dengan Thunder Client / Postman**

### **POST verifikasi**

* Method: `POST`
* URL: `http://localhost:9000/api/verifications`
* Body → JSON → isi:

```json
{
  "report_id": 1,
  "claimant_id": 5,
  "proof": "https://google.com/document.png"
}
```

### **GET status**

```
GET http://localhost:9000/api/verifications/1
```

### **PUT approve/reject**

```
PUT http://localhost:9000/api/verifications/9
```

Body:

```json
{
  "status": "approved",
  "admin_id": 1
}
```

---

# 🧰 **9. Logging**

Output di:

```
/logs/error.log
/logs/combined.log
```

---

# 📡 **10. Redis Pub/Sub Notifikasi**

Saat verifikasi disetujui:

```
channel: report_verified
payload: { report_id, user_id, status }
```

---

# 🛠️ **11. Development Notes**

* Gunakan Node.js minimal v18+
* API sudah memakai ES Modules
* Model Sequelize memakai `underscored: true`

---

Jika kamu mau, aku bisa buatkan:

✅ Badge CI/CD
✅ Dokumentasi API dalam format Swagger
✅ Contoh request Thunder Client JSON export
✅ Migrasi Sequelize otomatis

Tinggal bilang: **“Tambahkan dokumentasi Swagger”** atau apa yang mau ditambah.
