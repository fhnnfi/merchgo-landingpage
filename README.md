# MerchGo Landing Page

<p align="center">
  <img src="public/merchgo-logo.svg" width="248" height="98" alt="MerchGo Logo"/>
</p>

<p align="center">
Landing page resmi untuk <a href="https://github.com/Fhanafii/MerchGo-App"><b>MerchGo Android App</b></a> — aplikasi merchandiser offline first.
</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

</p>

---

# About

Single-page marketing site untuk memperkenalkan aplikasi MerchGo:

- Hero dengan value proposition + CTA download
- Showcase fitur (absen selfie, kunjungan toko, laporan produk & promo, offline first, auto-sync)
- Highlight arsitektur Offline First (Room + pending queue + WorkManager)
- Galeri screenshot UI aplikasi dalam frame HP
- Tech stack Android (Kotlin, MVVM, Hilt, Room, Retrofit, dll)
- CTA download APK langsung dari GitHub Releases

Tema warna dan font disinkronkan dengan aplikasi aslinya (`colors.xml`):

| Token | Hex |
|---|---|
| Primary | `#2FCD4C` |
| Primary Dark | `#1E8F37` |
| Bright (logo) | `#25FF4D` |
| Ink | `#1A1C1A` |
| Canvas | `#F7FCF8` |

Font: **Plus Jakarta Sans** (sama dengan font aplikasi).

---

# 📥 Auto-Update Download Link

Tombol download tidak hardcode URL APK. Route `/api/download` memanggil GitHub Releases API, mencari asset `.apk` terbaru, lalu redirect ke sana (di-cache 1 jam via ISR). Release baru di repo MerchGo-App otomatis ikut terlayani tanpa deploy ulang.

Fallback: jika API gagal → redirect ke halaman `/releases`.

```
GET /api/download
  → https://api.github.com/repos/Fhanafii/MerchGo-App/releases/latest
  → 302 redirect ke browser_download_url asset APK terbaru
```

---

# 🚀 Getting Started

## Prasyarat

- Node.js 20+

## Install & Run

```bash
git clone https://github.com/fhnnfi/merchgo-landingpage.git
cd merchgo-landingpage
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

> Catatan: script memakai `next build --webpack` karena Turbopack menolak `node_modules` yang berupa symlink/junction di luar project root. Untuk instalasi normal, boleh diganti ke default Turbopack.

---

# 📂 Project Structure

```
src
│
├── app
│   ├── api
│   │   └── download
│   │       └── route.ts   → redirect ke APK release terbaru
│   ├── globals.css        → tema warna MerchGo (Tailwind 4 @theme)
│   ├── icon.svg           → favicon (logo MerchGo)
│   ├── layout.tsx         → metadata + font Plus Jakarta Sans
│   └── page.tsx           → seluruh section landing page
│
public
├── merchgo-logo.svg       → logo untuk navbar & footer
└── screenshots/           → UI app dari docs/images repo MerchGo-App
```

---

# 🌐 Deploy

Siap deploy ke Vercel tanpa konfigurasi tambahan:

1. Import repo `fhnnfi/merchgo-landingpage`
2. Framework terdeteksi otomatis (Next.js)
3. Deploy

Setelah live, tambahkan `metadataBase` di `src/app/layout.tsx` dengan domain final agar Open Graph image tampil benar saat di-share.

---

# 🔗 Related

- Aplikasi: [Fhanafii/MerchGo-App](https://github.com/Fhanafii/MerchGo-App)
- Releases: [Download APK](https://github.com/Fhanafii/MerchGo-App/releases)
- API Docs: [dev-api.fhanafii.my.id/docs](https://dev-api.fhanafii.my.id/docs)

---

# 📄 License

This project is licensed under the MIT License.
