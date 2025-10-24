// data/projects.js
export const projects = [
  {
    id: 1,
    title: "HiTeman",
    description: "Aplikasi untuk membantu mengurangi emosi negatif",
    image: "/projects/project12.png",
    tags: ["Hugging Face", "DistilBERT", "NLP"],
    longDescription: `
      HiTeman adalah aplikasi berbasis AI yang dirancang untuk mendeteksi dan
      mengurangi emosi negatif menggunakan model NLP dari Hugging Face.
      Aplikasi ini menganalisis teks emosional yang dimasukkan oleh pengguna
      dan memberikan umpan balik atau skrip terapi yang mendukung.
    `,
    gallery: [
      "/projects/hiteman1.png",
      "/projects/hiteman2.png",
      "/projects/hiteman3.png",
    ],
  },
  {
    id: 2,
    title: "Penyelesaian Masalah di Institusi Pendidikan",
    description:
      "Dashboard analitik interaktif dengan pemodelan prediktif dan visualisasi data.",
    image: "/projects/project2.png",
    image2: "/projects/dashboard.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    longDescription: `
      Jaya Jaya Institute adalah institusi pendidikan tinggi yang didirikan pada tahun 2000
      dan telah menghasilkan banyak lulusan berkualitas. Namun, tingkat putus kuliah yang tinggi
      menjadi tantangan utama bagi institusi tersebut.

      Untuk mengatasi hal ini, proyek ini bertujuan membangun sistem prediksi putus kuliah
      berbasis machine learning menggunakan dataset performa akademik mahasiswa. Sistem ini
      membantu mendeteksi mahasiswa yang berisiko putus kuliah sejak dini sehingga dapat diberikan
      bimbingan yang sesuai. Selain itu, dikembangkan pula dashboard interaktif untuk membantu
      pihak institusi memahami data dan memantau performa mahasiswa secara keseluruhan.
    `,
    gallery: ["/projects/streamlit1.png", "/projects/streamlit2.png"],
    longDescription2: `
      Gambar menunjukkan aplikasi berbasis web yang dikembangkan menggunakan Streamlit untuk
      memprediksi kemungkinan mahasiswa putus kuliah. Aplikasi ini, bernama *Dropout Prediction App – Jaya Jaya Institute*,
      menyediakan antarmuka berbasis formulir yang berisi variabel akademik, demografis,
      dan finansial seperti status pernikahan, usia saat mendaftar, nilai kualifikasi sebelumnya,
      biaya kuliah yang dibayarkan, serta mata kuliah yang diambil dan lulus dalam satu semester.
      Setelah data dikirim, aplikasi memprosesnya menggunakan model machine learning yang telah dilatih.
      Hasil prediksi ditampilkan langsung, menunjukkan apakah mahasiswa berisiko tinggi untuk putus kuliah.
      Alat ini membantu institusi melakukan intervensi dini bagi mahasiswa yang berisiko.
    `,
    longDescription3: `
      Saya juga mengembangkan dashboard menggunakan Metabase untuk membantu Jaya Jaya Institute
      dalam menganalisis masalah putus kuliah. Dashboard ini menampilkan visualisasi seperti
      total mahasiswa yang putus kuliah, performa akademik berdasarkan gender, status putus kuliah per program studi,
      ketepatan waktu pembayaran biaya kuliah, pengaruh beasiswa, tingkat pengangguran, dan distribusi usia.
      Insight ini memungkinkan institusi mengidentifikasi pola yang terkait dengan risiko putus kuliah,
      misalnya korelasi antara keterlambatan pembayaran dan status putus kuliah, perbedaan antara mahasiswa
      penerima beasiswa dan non-beasiswa, serta pengaruh faktor sosial-ekonomi.
      Tujuan utamanya adalah sebagai alat deteksi dini untuk mendukung intervensi yang tepat sasaran,
      seperti bimbingan akademik, bantuan keuangan, atau konseling khusus guna menurunkan angka putus kuliah
      dan meningkatkan tingkat kelulusan.
    `,
    longDescription4:
      "Saya juga mengimplementasikan Sistem Prototipe Machine Learning menggunakan Cloud Run. Langkah-langkah yang saya lakukan dimulai dengan membangun kontainer Docker dari aplikasi machine learning yang telah dikembangkan, kemudian mengunggah image Docker tersebut ke Google Container Registry (GCR) agar dapat dikelola di lingkungan cloud. Setelah itu, saya menjalankan kontainer menggunakan Cloud Run dengan konfigurasi seperti region, autoscaling, dan penyesuaian port kontainer ke 8501. Hasilnya, aplikasi machine learning saya dapat diakses melalui URL yang disediakan oleh Cloud Run, membuktikan bahwa saya berhasil menerapkan alur kerja penuh mulai dari pembuatan kontainer, pengunggahan ke registry, hingga deployment menggunakan Cloud Run.",
    subjudul: `Streamlit`,
    subjudul2: `Metabase`,
    subjudul3: `Google Cloud`,
  },
  {
    id: 3,
    title: "Deteksi Helm",
    description:
      "Sistem computer vision untuk mendeteksi apakah seseorang memakai helm atau tidak.",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["YOLOv11", "Roboflow", "Computer Vision"],
    longDescription: `
      Proyek ini mengimplementasikan sistem deteksi helm menggunakan YOLOv11
      untuk mengidentifikasi apakah seseorang mengenakan helm atau tidak.
      Dataset diambil dari Kaggle dan diproses menggunakan Roboflow menjadi dua kelas utama:
      helm dan tanpa_helm. Pra-pemrosesan mencakup pemeriksaan kualitas gambar
      untuk memisahkan gambar buram dari gambar jelas, memastikan model belajar dari data yang informatif.
      Distribusi kelas divisualisasikan untuk memastikan keseimbangan, dan sampel berlabel diperiksa.
      Model YOLOv11 pra-latih digunakan sebagai checkpoint dan disesuaikan dengan parameter seperti
      70 epoch, ukuran gambar 640 piksel, batch size 16, dan early stopping untuk mencegah overfitting.
      Evaluasi dilakukan dengan metrik mAP@50 dan mAP@50:95.
      Model yang telah dilatih disimpan di Google Drive untuk digunakan kembali pada tahap deployment,
      seperti pemantauan lalu lintas atau aplikasi keselamatan kerja.
    `,
    gallery: ["/projects/val_batch2_pred.jpg", "/projects/val_batch1_pred.jpg"],
    longDescription2: `
      Hasil pelatihan menunjukkan kurva pembelajaran YOLO selama 70 epoch.
      Setiap epoch mencatat penggunaan memori GPU, nilai loss (box_loss, cls_loss, dfl_loss),
      serta metrik validasi (precision, recall, mAP@50, mAP@50-95).
      Antara epoch 1–10, nilai loss turun secara signifikan dan mAP meningkat pesat,
      misalnya mAP@50 naik dari 0.295 menjadi 0.954.
      Setelah epoch ke-12, metrik stabil dengan mAP@50 di atas 0.94 hingga epoch ke-46,
      mencapai akurasi 0.987 pada epoch ke-44.
      Hal ini menunjukkan model mencapai performa yang kuat dan konsisten.
    `,
    subjudul: `Hasil Deteksi`,
    video: "/projects/inferenceHelmet.mp4",
    subjudul2: `Inferensi`,
  },
  {
    id: 4,
    title: "Analisis Sentimen Aplikasi Roblox",
    description:
      "Sistem klasifikasi sentimen untuk ulasan pengguna dari Google Play Store.",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["Transformer", "streamlit"],
    longDescription: `
      Proyek ini berfokus pada analisis sentimen ulasan pengguna Roblox
      dari Google Play Store dengan menggunakan model transformer.
      Sebanyak 11.000 ulasan dikumpulkan, berisi teks ulasan, tanggal, rating bintang,
      dan nama pengguna. Kode tersebut membentuk sebuah pipeline analisis sentimen berbasis Natural Language Processing (NLP) yang menggunakan model Transformer berbahasa Indonesia untuk memproses ulasan pengguna aplikasi Roblox dari Google Play Store. Proses dimulai dengan tahap pengumpulan data menggunakan library google-play-scraper, yang mengambil ribuan ulasan terbaru berbahasa Indonesia agar data yang diperoleh relevan dengan konteks pengguna lokal. Data yang terkumpul kemudian melalui tahap preprocessing untuk membersihkan dan menyiapkan teks agar siap dianalisis oleh model. Tahapan pembersihan ini meliputi penghapusan emoji, tag HTML, URL, angka, serta tanda baca, diikuti dengan konversi seluruh teks menjadi huruf kecil untuk menjaga konsistensi. Setelah itu, dilakukan normalisasi terhadap kata tidak baku atau slang words agar diubah ke bentuk standar, tokenisasi untuk memecah kalimat menjadi kata-kata, penghapusan stopwords seperti “dan” atau “yang” yang tidak berpengaruh terhadap makna sentimen, serta stemming menggunakan library Sastrawi untuk mengembalikan setiap kata ke bentuk dasarnya, misalnya “bermain” menjadi “main”. Semua proses tersebut digabungkan dalam satu fungsi pipeline agar dapat diterapkan secara efisien pada seluruh data ulasan.

Setelah tahap pra-pemrosesan selesai, teks yang telah bersih diklasifikasikan menggunakan model Transformer w11wo/indonesian-roberta-base-sentiment-classifier, yaitu model berbasis RoBERTa yang telah dilatih khusus untuk mengenali sentimen positif, netral, dan negatif dalam bahasa Indonesia. Proses klasifikasi dilakukan melalui fungsi safe_nlp, yang memastikan teks kosong atau terlalu panjang tidak menyebabkan kesalahan selama inferensi. Model menghasilkan dua keluaran utama, yaitu label sentimen dan tingkat kepercayaan (confidence score) untuk setiap ulasan. Selanjutnya, dilakukan penyesuaian hasil klasifikasi secara manual dengan mendeteksi kata kunci tertentu seperti “bagus”, “seru”, atau “keren” untuk menandai sentimen positif, serta “error”, “buruk”, atau “jelek” untuk menandai sentimen negatif, dengan tujuan memperbaiki potensi kesalahan prediksi yang dilakukan oleh model.
    `,
    gallery: [
      "/projects/roblox_1.png",
      "/projects/roblox_2.png",
      "/projects/roblox_3.png",
      "/projects/roblox_4.png",
    ],
    longDescriptionparagraf2: `
      Berdasarkan visualisasi hasil analisis sentimen terhadap ulasan pengguna Roblox di Indonesia, terlihat bahwa mayoritas ulasan bersentimen positif dengan jumlah 4.981 ulasan, diikuti oleh sentimen negatif sebanyak 2.777 ulasan, dan netral sebanyak 883 ulasan. Hal ini menunjukkan bahwa secara umum pengguna memiliki pengalaman yang baik terhadap permainan Roblox.
    `,
    longDescription2: `
Dari word cloud ulasan positif, kata-kata yang paling sering muncul seperti “main”, “game”, “bagus”, “seru”, dan “banget” menandakan bahwa pengguna merasa permainan ini menyenangkan, menarik, dan berkualitas baik. Selain itu, kemunculan kata seperti “suka” dan “kerennya” memperkuat kesan positif terhadap pengalaman bermain.

Sementara itu, pada ulasan negatif, kata-kata dominan seperti “roblox”, “error”, “akun”, “bug”, “update”, dan “tolong” menunjukkan bahwa sebagian besar keluhan berkaitan dengan masalah teknis seperti bug, error, atau kesulitan dalam login dan pembaruan sistem. Hal ini sejalan dengan daftar top kata per sentimen, di mana kata “roblox”, “error”, dan “bug” menjadi yang paling sering muncul pada ulasan negatif.
    `,
    longDescription2paragraf2: `
     Secara keseluruhan, meskipun terdapat sejumlah keluhan teknis dari pengguna, persepsi publik terhadap Roblox di Indonesia tetap cenderung positif dengan dominasi ulasan yang menyoroti keseruan dan kualitas permainan.
    `,
  },
];
