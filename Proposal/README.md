# Halo, Selamat Datang! 😊

## **Author**
* Nama Lengkap : Muhammad Aqsal Sirulah Sodik
* NIM          : 1207050068
* Kelas        : Informatika-D

## **Permasalahan**
* Banyaknya mahasiswa antri untuk pesan makanan atau minuman
* Keterbatasan warung untuk _manage_ pesanan
* Tidak adanya efektifitas dan transparan dalam administrasi
* Penjual kesulitan untuk mengetahui pesanan masuk (overload)
* Terkadang tempat duduk masih digunakan, padahal sudah selesai makan (masih banyak orang yang mau makan tapi tidak kebagian kursi)

## **Rancangan Solusi**
* Membuat aplikasi yang mendukung UMKM lokal (kantin UIN SGD)
* Membuat fitur list warung
* Membuat pemesanan untuk memudahkan penjual dan pembeli
* Membuat fitur list makanan/minuman
* Membuat fitur kritik saran untuk kantin
* Membuat fitur informasi halal atau komposisi makanan/minuman
* Membuat fitur informasi terkait waktu duduk (agar tidak overload)
* Membuat fitur pembayaran (QR Code payment gateway)

## **UseCase**
* Pembeli melakukan registrasi menggunakan QR Code yang disediakan di meja pengunjung
* Pembeli bisa menambahkan dan melihat makanan/minuman yang tersedia
* Pembeli bisa melakukan pemilihan untuk dipesan dari salahsatu warung
* Pembeli bisa menggunakan fitur kritik dan saran untuk mengembangkan e-warung ini
* Pembeli bisa dengan mudah mendapatkan informasi tentang makanan
* Pembeli bisa bayar dengan mudah

## **Struktur Data**
### Pembeli (User)
`{
     id: integer,
     nama: string,
     nim: string,
     password: string,
     isVerified: boolean,
     title: string
}`

(masih buat abstrak struktur data yang lainnya)
## **UX Wireframe**
![Screenshot (124)](https://user-images.githubusercontent.com/72060370/190255983-652df2aa-e543-4052-bcc9-f2dbb23313e6.png)
[Link Figma (non prototype)](https://www.figma.com/file/W5xRgYrH7rpCYzyaHWD6Uu/Wireframe-Warung-UIN?node-id=1%3A43)
