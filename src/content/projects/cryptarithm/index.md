---
title: "Cryptarithm Game"
description: "Sebuah game cryptarithm sederhana yang terinspirasi dari COC."
cover: "./cover.png"
tech_stack: ["React"]
create_date: "12 Juli 2024"
---

## Deskripsi
Sebuah game cryptarithm sederhana yang terinspirasi dari COC.

Cryptarithm Game adalah sebuah permainan teka-teki matematika di mana angka-angka digantikan oleh huruf atau simbol lainnya. Pemain harus memecahkan teka-teki dengan menemukan nilai numerik dari setiap huruf atau simbol yang digunakan.

## Live
[https://cryptarithmgame.vercel.app/](https://cryptarithmgame.vercel.app/)

## Fitur

- **Antarmuka Pengguna Interaktif**: Dibangun menggunakan React untuk pengalaman pengguna yang responsif.
- **Teka-teki Acak**: Setiap permainan menghasilkan teka-teki baru yang unik.
- **Petunjuk dan Bantuan**: Fitur bantuan untuk membantu pemain yang kesulitan.

## Package
```JSON
{
  "name": "cryptarithm",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-sweetalert2": "^0.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@vite-pwa/assets-generator": "^0.2.4",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.10",
    "vite-plugin-pwa": "^0.20.0",
    "workbox-core": "^7.1.0"
  },
  "overrides": {
    "sharp": "0.32.6",
    "sharp-ico": "0.1.5"
  }
}
```
## Github
[https://github.com/ricko-v/cryptarithm-game](https://github.com/ricko-v/cryptarithm-game)

## Tanggal Pembuatan

Proyek ini dibuat pada tanggal 12 Juli 2024