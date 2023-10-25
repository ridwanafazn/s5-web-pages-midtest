# Midterm Exam : Codecraft

1217050121 - Ridwan Ahmad Fauzan

Praktikum PAW - Kelas F

Link Website via [Github Pages](https://ridwannadev.github.io/s5-web-pages-midtest/).

# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

**Note: Gunakan branch master!**

## Tech Stack

- Reactjs
- Bootstrap
- Github Pages

## Menyiapkan Project

Project diinisiasikan dengan npm, dan menambahkan dependensi bootstrap melalui CLI. Dan setelah itu langsung di publish ke github repository. Untuk struktur folder dari CRA sebagai berikut:


```bash
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

Komponen NavbarDiv digunakan untuk membuat bilah navigasi dalam aplikasi web dengan menggunakan Bootstrap. Dalam komponen ini:

- `Navbar` digunakan untuk membuat bilah navigasi.
- `Navbar.Brand` berisi logo dan teks.
- `Nav.Link` adalah tautan menu yang mengarahkan pengguna ke berbagai bagian situs web.

Namun tidak semua link pada NavBar ini berfungsi sepenuhnya.

### `Header`

Komponen HeaderDiv membagi header menjadi dua bagian:

- Bagian kiri berisi judul, deskripsi, tombol pesan, dan tautan "See my project". Tombol pesan membuka klien email dengan alamat email yang ditentukan.
- Bagian kanan dapat digunakan untuk gambar latar belakang atau elemen visual lainnya.
- Bootstrap digunakan untuk mengatur tata letak dengan kolomdan baris, serta Container dengan ID "home" untuk mengatur konten.

### `MainContent`

Komponen ini digunakan untuk menampilkan elemen-elemen utama dalam halaman web. Komponen ini terdiri dari empat bagian:

1. Dua bagian atas (bagian kiri dan kanan) dengan gambar ikon, judul, dan deskripsi singkat.
2. Dua bagian bawah (bagian kiri dan kanan) yang menampilkan gambar dan teks.

Dalam komponen ini, terdapat ikon-ikon seperti "KeyboardFill" dan "SendFill". Dan menggunakan Bootstrap untuk mengatur tata letak dengan kolom (Col) dan baris (Row).


### `FormField`

Komponen FormDiv digunakan untuk membuat formulir input di halaman web. Komponen ini mencakup beberapa elemen formulir, termasuk input teks, alamat email, pilihan peran, teks area, dan pilihan tautan.

Elemen-elemen utama dalam komponen ini:

1. Input nama dengan label "Name"..
2. Input alamat email dengan label "Email address".
3. Pilihan peran dalam bentuk dropdown dengan label "Role".
4. Input pesan.
5. Combo box untuk memilih jenis informasi yang ingin pengunjung web terima.

Anda dapat menyesuaikan formulir ini sesuai dengan kebutuhan halaman web Anda, seperti menambahkan atau mengubah field formulir.


### `Footer`

Komponen FooterDiv digunakan untuk membuat footer halaman web. Footer ini berisi tautan sosial media, seperti Github, Linkedin, dan Instagram. Selain itu, footer juga berisi tautan navigasi untuk berbagai bagian atau informasi.

Elemen-elemen utama dalam komponen ini:

1. Tautan ikon sosial media, termasuk Github, Linkedin, dan Instagram. Pengguna dapat mengklik tautan ini untuk mengunjungi profil sosial media.

2. Tautan navigasi di bagian bawah footer, dibagi menjadi dua kolom.

Footer ini memberikan pengguna akses cepat ke informasi dan tautan yang relevan terkait profile ataupun contact dari pembuat website.
