# Bycoz - Mini Website Rental Sepeda Premium

Website landing page interaktif & mobile-first untuk Bycoz Rental Sepeda. Dilengkapi dengan katalog sepeda, rincian harga, formulir booking langsung ke WhatsApp, integrasi Google Maps, FAQ akordeon, testimoni, dan fitur berbagi (share).

---

## 🚀 Cara Menjalankan & Preview

Ada **2 cara mudah** untuk melihat preview website ini:

### 1. Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `rental sepeda` di Windows Explorer.
- Cukup **klik dua kali (double-click)** pada file `standalone.html`.
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan tampilan styling dan interaktivitas.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara 1:** Klik dua kali file **`preview.bat`**. Script akan otomatis mendeteksi Node.js dan menjalankan `npm run dev` lalu membuka browser di `http://localhost:3000`.
- **Cara 2:** Buka terminal di folder ini dan ketik:
  ```bash
  npm run dev
  ```
- Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
rental sepeda/
├── public/
│   └── Gemini_Generated_Image_y111djy111djy111.jpg   # Gambar banner hero Bycoz
├── src/
│   ├── App.jsx                                      # Komponen utama React
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Outfit
│   └── main.jsx                                     # Entry point aplikasi React
├── standalone.html                                  # File mandiri (bisa dibuka langsung di browser)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── index.html                                       # File HTML utama untuk Vite
├── package.json                                     # Konfigurasi dependensi npm
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
└── bycoz_bike_rental.tsx                            # Source code asli
```

---

## ✨ Fitur-Fitur Unggulan

- **Hero Banner & Profile Bycoz**: Tampilan visual mobile responsif bernuansa teal & slate.
- **Media Sosial & Lokasi**: Tombol cepat menuju Instagram, TikTok, dan Google Maps.
- **Tentang Kami & Timeline**: Sejarah perjalanan Bycoz dari 2021 hingga 2024.
- **Katalog & Harga Interaktif**: Slider horizontal menampilkan tipe sepeda (City Bike, MTB, Sepeda Lipat, Road Bike) beserta harga sewa per hari.
- **Tanya Jawab (FAQ)**: Akordeon interaktif untuk syarat sewa, deposit, dan ketentuan.
- **Formulir Booking WhatsApp**: Form terintegrasi yang otomatis mengirim pesan pemesanan terformat ke nomor WhatsApp admin (+6289529605601).
- **Tombol Melayang (Sticky CTA)**: Tombol pemesanan yang otomatis muncul saat pengguna menggulir ke bawah layar.
- **Modal Berbagi (Share Sheet)**: Fitur salin link, share ke X (Twitter), dan WhatsApp.
