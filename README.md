# TTG Overview Test

Dokumen ini berisi langkah-langkah menjalankan kode **Soal 1, 2, 3, dan 4**.  
Download semua file untuk menjalankan program
---

## Soal 1 — Form Pendaftaran (HTML/CSS/JS)

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

## Soal 2 — REST API Users (Express + MySQL)

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

2. **Buat file `.env` di folder `soal2/`**:
   ```env
   PORT=3000
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=root
   DB_PASS=
   DB_NAME=user
3.**Install & Jalankan API:**
- cd soal2
- npm install
- npm run dev   # development (nodemon)
*atau*
- npm start     # tanpa nodemon

4.**Uji Endpoint:**

- GET http://localhost:3000/ → { "ok": true, "message": "Soal 2 API is running" }
- POST /users – Tambah user { "name": "Nama", "email": "email@example.com" }
- GET /users – Ambil semua user
- GET /users/:id – Ambil user berdasarkan ID
- DELETE /users/:id – Hapus user berdasarkan ID

**troubleshooting**
- {"message":"Server error"} → Pastikan DB & tabel users sudah dibuat dan .env benar.
- {Email sudah terdaftar} → Validasi bahwa email sudah terdaftar


## Soal 3 — Cari Angka yang Hilang

Program CLI untuk menemukan **satu angka yang hilang** dari sebuah deret bilangan `0..n` yang tidak terurut dan tidak memiliki duplikasi.

### Deskripsi
Program ini menerima serangkaian angka sebagai input, yang seharusnya merupakan deret lengkap dari `0` hingga `n` tetapi dengan satu angka yang hilang. Program akan mengidentifikasi dan menampilkan angka yang hilang tersebut.

- **Contoh**: Jika inputnya `3,0,2,4`, maka deret lengkapnya seharusnya `0,1,2,3,4`. Angka yang hilang adalah `1`.
- **Implementasi**: Solusi ini menggunakan metode XOR untuk efisiensi, mencapai kompleksitas waktu **O(n)** dan kompleksitas memori **O(1)**.

### Cara Menjalankan
1.  Pastikan **Node.js** sudah terpasang di sistem Anda.
2.  Buka terminal dan navigasikan ke direktori `soal3/`.
3.  Jalankan perintah berikut:
    ```bash
    node index.js
    ```
4.  Ikuti prompt yang muncul di terminal untuk memasukkan deret angka.

    **Contoh Sesi:**
    ```
    Masukkan array (pisahkan dengan koma): 3,0,2,4
    Output: 1
    ```

### Asumsi Input
- Deret angka mewakili `0..n` dengan **tepat satu** angka yang hilang.
- Tidak ada angka duplikat dalam input.
- Semua angka adalah bilangan bulat non-negatif.

### Troubleshooting
- **Error "Input tidak valid"**: Pastikan input hanya berisi angka yang dipisahkan oleh koma. Spasi di antara angka dan koma diperbolehkan.
- **Hasil tidak sesuai**: Periksa kembali apakah input Anda memenuhi asumsi—yaitu, sebuah deret `0..n` dengan tepat satu angka yang hilang.

---

## Soal 4 — Kombinasi Ekspresi Angka

Program CLI untuk menemukan ekspresi aritmatika dari sekumpulan angka yang hasilnya sama dengan nilai target yang ditentukan.

### Deskripsi
Program ini mencoba semua kemungkinan untuk mencapai sebuah angka target dengan menggunakan:
- **Semua angka** dari input, masing-masing tepat satu kali.
- **Urutan angka yang fleksibel** (program akan mencoba semua permutasi).
- **Operator dasar**: `+`, `-`, dan `*`.
- **Semua kemungkinan penempatan kurung** yang valid secara matematis (dieksplorasi secara otomatis).

### Cara Menjalankan
1.  Pastikan **Node.js** sudah terpasang.
2.  Buka terminal dan navigasikan ke direktori `soal4/`.
3.  Jalankan perintah berikut:
    ```bash
    node index.js
    ```
4.  Ikuti prompt untuk memasukkan angka dan nilai target.

    **Contoh Sesi (Berhasil):**
    ```yaml
    Masukkan angka (pisahkan dengan koma): 1,4,5,3
    Masukkan target: 20

    Output:
    (1+(4+(5*3)))
    ```

    **Contoh Sesi (Gagal):**
    ```makefile
    Masukkan angka (pisahkan dengan koma): 1,2,3
    Masukkan target: 10

    Output:
    Tidak ada ekspresi yang memenuhi.
    ```

### Catatan Performa
Kompleksitas algoritma ini sangat tinggi karena harus menguji:
- Semua permutasi urutan angka.
- Semua kombinasi operator.
- Semua kemungkinan pengelompokan (penempatan kurung).

### Troubleshooting
- **Pesan "Tidak ada ekspresi yang memenuhi."**: Ini berarti, dengan aturan yang ada (angka yang diberikan dan operator `+`, `-`, `*`), memang tidak ada kombinasi yang bisa menghasilkan nilai target.
