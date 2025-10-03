# TTG Overview Test

Dokumen ini berisi langkah-langkah menjalankan kode **Soal 1, 2, 3, dan 4**.  
---

## 📝 Soal 1 — Form Pendaftaran (HTML/CSS/JS)

Aplikasi web sederhana berisi form pendaftaran dengan validasi dan tampilan dark theme.

**Cara Menjalankan:**
1. Buka folder `soal1/`.
2. Klik dua kali `index.html` (atau drag & drop ke browser).
3. Isi form → klik **Daftar Sekarang**.
4. Jika validasi lolos, muncul pesan sukses dan data yang dimasukkan tampil di bawah form.

**Catatan:**
- Tidak butuh server/database.
- Butuh koneksi internet untuk ikon (Font Awesome, Google Fonts).

---

## 📝 Soal 2 — REST API Users (Express + MySQL)

RESTful API untuk manajemen data User menggunakan **Node.js (Express)** dan **MySQL**.

**Prasyarat:**
- Windows + Laragon aktif (MySQL jalan).
- Node.js & npm terpasang.

**Langkah Menjalankan:**
1. **Siapkan Database**
   - Buka `http://localhost/phpmyadmin`.
   - Jalankan SQL:
     ```sql
     CREATE DATABASE IF NOT EXISTS user CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
     USE soal2;

     CREATE TABLE IF NOT EXISTS users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL UNIQUE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

2. **Buat file `.env` di folder `soal2-api/`**:
   ```env
   PORT=3000
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=root
   DB_PASS=
   DB_NAME=user
3.**nstall & Jalankan API:**
- cd soal2-api
- npm install
- npm run dev   # development (nodemon)
atau
- npm start     # tanpa nodemon

4.**Uji Endpoint:**

- GET http://localhost:3000/ → { "ok": true, "message": "Soal 2 API is running" }
- POST /users – Tambah user { "name": "Nama", "email": "email@example.com" }
- GET /users – Ambil semua user
- GET /users/:id – Ambil user berdasarkan ID
- DELETE /users/:id – Hapus user berdasarkan ID

**troubleshooting**
- {"message":"Server error"} → Pastikan DB & tabel users sudah dibuat dan .env benar.
- 409 {Email sudah terdaftar} → Validasi bahwa email sudah terdaftar
- ECONNREFUSED → MySQL Laragon belum jalan.

