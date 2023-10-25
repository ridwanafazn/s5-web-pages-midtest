# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

# Landing Page - Web App Development Midterm Exam

1217050103 - Muhammad Syamil Hamami

Praktikum PAW - Kelas F

Web bisa dibuka [disini](https://college-courseworks.gitlab.io/semester-v/web-app-development/midterm-exam/).

# Table of Contents

- [Stack yang Digunakan](#stack-yang-digunakan)
- [Menyiapkan Project](#menyiapkan-project)
- [Penjelasan Komponen Utama](#penjelasan-komponen-utama)
  - [Header](#header)
  - [Content](#content)
  - [Footer](#footer)
- [Penjelasan Komponen Sub](#penjelasan-komponen-sub)

## Stack yang Digunakan

- [ReactJS - Frontend Javascript LIbrary](https://react.dev)
- [Vite - Frontend Build Tools](https://vitejs.dev)
- [SASS - CSS Preprocessor](https://sass-lang.com/)
- [CSS - Styling](https://www.w3schools.com/css/)
- [Gitlab Pages - Deployment](https://docs.gitlab.com/ee/user/project/pages/)

## Menyiapkan Project

Project **React** dibuat menggunakan **Vite** sebagai frontend tools-nya, lalu untuk styling menggunakan **SASS** (Superset dari **CSS**). Berikut ini struktur dari projeknya:

```shell
s5-web-pages-midtest /
  - public
  - src /
    - assets
    - components /
      - Footer.js
      - FormField.js
      - Header.js
      - MainContent.js
      - Navbar.js
    - App.js
    - App.css
    - index.js
    - index.css
    - logo.png
  - index.html
  - package-lock.json
  - package.json
```

## Penjelasan Komponen Utama

Ada 5 komponen yang dibuat untuk dimasukkan ke dalam App.js , yaitu komponen:
- Navbar
- Header
- MainContent
- FormField
- Footer

### `Navbar`



### `Header`

Komponen HeaderDiv membagi header menjadi dua bagian:

- Bagian kiri (header-1) berisi judul, deskripsi, tombol pesan, dan tautan "See my project". Tombol pesan membuka klien email dengan alamat email yang ditentukan.
- Bagian kanan (header-2) dapat digunakan untuk gambar latar belakang atau elemen visual lainnya.
- Bootstrap digunakan untuk mengatur tata letak dengan kolom (Col) dan baris (Row), serta Container dengan ID "home" untuk mengatur konten.

Ini adalah bagian dari tampilan header website yang dapat disesuaikan dengan desain dan konten yang Anda inginkan.

### `MainContent`


### `FormField`


### `Footer`