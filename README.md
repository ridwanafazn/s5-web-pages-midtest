# Midterm Exam : Codecraft

1217050121 - Ridwan Ahmad Fauzan

Praktikum PAW - Kelas F

Link Website via [Github Pages](https://ridwannadev.github.io/s5-web-pages-midtest/).

# Prerequisite

- Install `nodejs` dan `npm`

## Tech Stack

- Reactjs
- Bootstrap
- Github Pages

## Menyiapkan Project

1. Membuat project

- Masuk ke directory yang digunakan untuk menyimpan project
- Inisiasi dengan `npx create-react-app s5-web-pages-midtest`
- Output
```bash
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js

```

2. Mencoba run project
- Project react sudah berhasil dibuat, dan halaman akan berisi logo react
- Uji dengan menjalakan halaman secara lokal dan lokal server
`npm start`
`npm test`
`npm run build`
`npm run eject`

3. Tambahkan dependensi bootstrap melalui CLI menggunakan `npm install react-bootstrap bootstrap`. 

4. Untuk struktur folder dari CRA sebagai berikut:

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

5. Publish page ke Github Pages

- Install gh-pages sebagai dependensi
`$ npm install gh-pages --save-dev`
- Buat halaman homepage dengan menambahkannya di `package.json` 
Format sebagai berikut `"homepage": "https://gitname.github.io/react-gh-pages"` --> `"homepage" : "https://ridwannadev.github.io/s5-web-pages-midtest/"`

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
