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
    title: "Analisis Sentimen Aplikasi Mobile Legends",
    description:
      "Sistem klasifikasi sentimen untuk ulasan pengguna dari Google Play Store.",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["TF-IDF", "GRU", "Machine Learning"],
    longDescription: `
      Proyek ini berfokus pada analisis sentimen ulasan pengguna Mobile Legends
      dari Google Play Store dengan pendekatan machine learning dan deep learning.
      Sebanyak 11.000 ulasan dikumpulkan, berisi teks ulasan, tanggal, rating bintang,
      dan nama pengguna. Tahapan pra-pemrosesan meliputi penghapusan duplikat, angka,
      simbol, tanda baca, URL, dan karakter khusus; penghapusan stopword bahasa Indonesia
      dan Inggris; stemming dengan Sastrawi; normalisasi kata gaul menjadi kata baku;
      serta konversi emotikon menjadi teks bermakna untuk meningkatkan deteksi sentimen.
    `,
    gallery: [
      "/projects/output-gru.png",
      "/projects/output-RF.png",
      "/projects/distribusimobile legends.png",
    ],
    longDescriptionparagraf2: `
      Setelah pemrosesan teks, label sentimen ditetapkan menggunakan pendekatan berbasis leksikon.
      Ulasan dikategorikan menjadi tiga kelas: negatif (5.483), positif (3.742), dan netral (1.671).
      Fitur dibangun menggunakan TF-IDF hingga 3-gram, dan 5.000 fitur teratas dipilih menggunakan
      metode chi-square. Untuk menangani ketidakseimbangan data, dilakukan oversampling menggunakan SMOTE,
      menghasilkan distribusi kelas yang seimbang.
    `,
    longDescription2: `
      Tiga model dilatih. Pertama, MLP (Multi-Layer Perceptron) berbasis TF-IDF dengan
      lapisan dense bertumpuk mencapai akurasi 92,42%.
      Kedua, Random Forest dengan 1.500 pohon keputusan mencapai akurasi 91,31%.
      Model terbaik adalah hybrid GRU + TF-IDF, yang menggabungkan embedding sequence dengan fitur TF-IDF,
      kemudian diproses melalui lapisan GRU dan dense.
      Model ini mencapai akurasi tertinggi 93,44% dan lebih stabil dalam mengklasifikasikan
      ulasan positif, negatif, dan netral.
    `,
    longDescription2paragraf2: `
      Evaluasi dengan metrik akurasi, F1-score, precision, recall, dan confusion matrix
      menunjukkan bahwa model hybrid GRU mampu menangkap konteks lebih baik dibandingkan metode tradisional.
      Sebagai contoh penerapan, dibuat fungsi inferensi untuk memprediksi sentimen dari teks baru.
      Misalnya, “good” diprediksi sebagai positif, “sedang, biasa saja” sebagai netral,
      dan “sangat buruk, jangan main!” sebagai negatif.
      Sistem ini menunjukkan solusi analisis sentimen otomatis yang efektif,
      dengan model deep learning hybrid GRU memberikan performa terbaik.
    `,
  },
];
