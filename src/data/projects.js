// data/projects.js
export const projects = [
  {
    id: 1,
    title: "HiTeman",
    description: "An application to eliminate negative emotions",
    image: "/projects/project12.png",
    tags: ["Hugging Face", "Distilbert", "NLP"],
    longDescription: `
      HiTeman is an AI-based app designed to detect and reduce negative emotions
      using NLP models from Hugging Face. It helps users by analyzing their
      emotional text input and providing feedback or support.
    `,
    gallery: [
      "/projects/hiteman1.png",
      "/projects/hiteman2.png",
      "/projects/hiteman3.png",
    ],
  },
  {
    id: 2,
    title: "Resolving Issues in Educational Institutions",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    image2: "/projects/dashboard.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    longDescription: `
      Jaya Jaya Institut adalah institusi pendidikan tinggi yang berdiri sejak tahun 2000 dan telah mencetak banyak lulusan berkualitas. Namun, tingginya jumlah mahasiswa yang tidak menyelesaikan studinya (dropout) menjadi tantangan besar bagi institusi.

Untuk mengatasi hal ini, proyek ini bertujuan membangun sistem prediksi dropout berbasis machine learning dengan menggunakan dataset performa mahasiswa. Sistem ini akan membantu mendeteksi lebih awal mahasiswa yang berisiko dropout sehingga dapat diberikan bimbingan khusus. Selain itu, dashboard interaktif juga dibuat untuk memudahkan pihak institusi dalam memahami data serta memonitor performa mahasiswa secara menyeluruh.
    `,
    gallery: ["/projects/streamlit1.png", "/projects/streamlit2.png"],
    longDescription2: `Gambar tersebut memperlihatkan sebuah aplikasi berbasis web yang dikembangkan menggunakan Streamlit dengan tujuan untuk memprediksi kemungkinan seorang mahasiswa mengalami dropout atau putus studi. Aplikasi ini diberi nama Dropout Prediction App – Jaya Jaya Institut dan menampilkan antarmuka berupa formulir input yang berisi berbagai variabel penting yang berkaitan dengan data akademik, demografi, serta kondisi ekonomi mahasiswa, seperti status perkawinan, usia saat mendaftar, nilai kualifikasi sebelumnya, biaya kuliah yang sudah dibayar, hingga jumlah mata kuliah yang diambil dan lulus pada semester tertentu. Setelah pengguna memasukkan data lengkap seorang mahasiswa dan menekan tombol prediksi, aplikasi akan memproses informasi tersebut dengan model machine learning yang telah dilatih sebelumnya. Hasil prediksi kemudian ditampilkan secara langsung pada halaman yang sama, seperti pada contoh dalam gambar yang menunjukkan bahwa mahasiswa dengan profil data yang dimasukkan berisiko tinggi untuk dropout. Dengan cara ini, aplikasi dapat menjadi alat bantu bagi institusi pendidikan dalam mengidentifikasi mahasiswa yang rentan putus studi sehingga dapat dilakukan intervensi lebih awal.`,
    longDescription3: `Saya telah membuat sebuah dashboard menggunakan Metabase untuk membantu Institut Jaya Jaya dalam memahami permasalahan tingginya angka mahasiswa dropout. Dashboard ini menampilkan berbagai visualisasi data seperti jumlah total dropout, performa akademik berdasarkan gender, distribusi status per program studi, ketepatan pembayaran biaya kuliah, pengaruh kepemilikan beasiswa, tingkat pengangguran, serta distribusi usia mahasiswa. Dengan adanya dashboard ini, pihak institusi dapat dengan mudah melihat pola-pola yang berhubungan dengan mahasiswa yang berisiko dropout. Misalnya, terlihat hubungan antara keterlambatan pembayaran biaya kuliah dan status dropout, perbedaan performa akademik mahasiswa dengan dan tanpa beasiswa, hingga pengaruh faktor usia serta kondisi sosial-ekonomi terhadap kelulusan mahasiswa. Tujuan utama dashboard ini adalah sebagai alat deteksi dini untuk mengidentifikasi mahasiswa yang berpotensi dropout sehingga pihak kampus dapat memberikan intervensi tepat sasaran, baik berupa bimbingan akademik, dukungan finansial, maupun pendampingan khusus, demi menekan angka dropout dan meningkatkan jumlah mahasiswa yang berhasil menyelesaikan studinya.
`,
    subjudul: `Streamlit`,
    subjudul2: `Metabase`,
  },
  {
    id: 3,
    title: "Helmet Detection",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/val_batch2_pred.jpg",

    tags: ["TypeScript", "D3.js", "Next.js"],
    longDescription: ` Proyek ini merupakan implementasi sistem deteksi helm menggunakan YOLO11 yang ditujukan untuk mengidentifikasi apakah seseorang mengenakan helm atau tidak. Dataset diambil dari kaggel lalu dimasukkan ke Roboflow dengan dua kelas utama, yaitu helmet dan no_helmet, kemudian dilakukan preprocessing berupa pemeriksaan kualitas gambar untuk memisahkan citra buram dan citra bersih agar model tidak belajar dari data yang kurang informatif. Selanjutnya, distribusi kelas divisualisasikan untuk memastikan keseimbangan data, dan beberapa contoh gambar ditampilkan beserta labelnya. Model YOLO11 yang telah dipra-latih diunduh dan digunakan sebagai checkpoint, lalu dilakukan proses pelatihan dengan parameter tertentu seperti 70 epoch, ukuran gambar 640 piksel, batch size 16, serta mekanisme early stopping untuk mencegah overfitting. Setelah pelatihan, model dievaluasi menggunakan metrik mAP@50 dan mAP@50:95 untuk mengukur performa deteksi. Hasil akhir berupa model terlatih kemudian disimpan di Google Drive agar dapat digunakan kembali dalam tahap implementasi atau deployment, misalnya pada sistem pemantauan lalu lintas atau aplikasi keselamatan kerja berbasis CCTV.`,
    gallery: ["/projects/val_batch2_pred.jpg", "/projects/val_batch1_pred.jpg"],
    longDescription2: `Hasil training menunjukkan proses pelatihan model YOLO selama 70 epoch, di mana pada setiap epoch ditampilkan penggunaan memori GPU, nilai kerugian (loss) untuk bounding box (box_loss), klasifikasi (cls_loss), dan distribusi jarak (dfl_loss), serta hasil evaluasi pada dataset validasi berupa metrik presisi (P), recall (R), mAP@50, dan mAP@50-95. Dari epoch 1 ke 10 terlihat penurunan signifikan pada nilai loss dan peningkatan tajam pada mAP, misalnya mAP@50 naik dari 0.295 di epoch 1 menjadi 0.954 di epoch 10, yang menunjukkan model belajar dengan cepat. Setelah itu, nilai loss terus menurun secara bertahap, sementara metrik evaluasi semakin stabil dengan mAP@50 berada di atas 0.94 mulai epoch 12 hingga 46, bahkan mencapai akurasi 0.987 pada epoch 44. Hal ini menandakan model sudah cukup matang belajar pola dari data, dan performanya semakin konsisten meskipun peningkatan tidak lagi sebesar di awal.
`,
    subjudul: `Hasil deteksi`,
    video: "/projects/inferenceHelmet.mp4",
    subjudul2: `Inference`,
  },
  {
    id: 4,
    title: "Sentiment Analysis of Mobile Legends App",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/val_batch2_pred.jpg",
    longDescriptionparagraf2: `Setelah teks diproses, dilakukan pelabelan sentimen menggunakan pendekatan lexicon, di mana setiap kata diberi skor berdasarkan kamus kata positif dan negatif. Dari hasilnya, ulasan terbagi ke dalam tiga kelas, yaitu negatif sebanyak 5483 data, positif 3742 data, dan netral 1671 data. Untuk membangun fitur, digunakan representasi TF-IDF dengan n-gram hingga 3, yang kemudian dipilih 5000 fitur terbaik dengan chi-square. Agar data tidak timpang, dilakukan oversampling dengan SMOTE, sehingga setiap kelas memiliki jumlah data yang seimbang.`,
    tags: ["TypeScript", "D3.js", "Next.js"],
    longDescription: `Proyek yang dikerjakan adalah analisis sentimen terhadap ulasan pengguna aplikasi Mobile Legends di Google Play Store dengan menggunakan pendekatan machine learning dan deep learning. Proses dimulai dari pengambilan data sebanyak 11.000 ulasan melalui scraping, yang berisi informasi berupa teks ulasan, tanggal, rating bintang, dan nama pengguna. Data tersebut kemudian melalui tahap preprocessing, yaitu pembersihan teks dari duplikasi, angka, simbol, tanda baca, URL, dan karakter khusus, disertai dengan penghapusan stopwords dalam bahasa Indonesia maupun Inggris. Selain itu, dilakukan stemming menggunakan Sastrawi, normalisasi kata slang menjadi kata baku, serta penerjemahan emotikon ke dalam kata bermakna agar sentimen lebih mudah dikenali oleh model.`,
    gallery: [
      "/projects/output-gru.png",
      "/projects/output-RF.png",
      "/projects/distribusimobile legends.png",
    ],
    longDescription2: `Pada tahap pemodelan, kamu melatih tiga model berbeda. Pertama, MLP (Multi-Layer Perceptron) berbasis TF-IDF dengan arsitektur dense layer bertingkat, yang menghasilkan akurasi 92,42%. Kedua, Random Forest dengan 1500 pohon keputusan yang memberikan akurasi 91,31%. Ketiga, model terbaik yaitu hybrid GRU + TF-IDF, yang menggabungkan input embedding sequence dengan representasi TF-IDF, lalu diproses oleh layer GRU dan dense. Model ini mencapai akurasi tertinggi yaitu 93,44% dan lebih stabil dalam membedakan ulasan positif, negatif, maupun netral.`,
    longDescription2paragraf2: `Hasil evaluasi menggunakan accuracy, F1-score, precision, recall, dan confusion matrix menunjukkan bahwa model GRU hybrid mampu memahami konteks kalimat lebih baik dibandingkan metode klasik. Sebagai penerapan, dibuat fungsi inference untuk memprediksi sentimen dari teks baru, misalnya kalimat “good” diprediksi sebagai positif, “sedang, biasa saja” sebagai netral, dan “sangat buruk, jangan main!” sebagai negatif. Dengan demikian, proyek ini berhasil menghasilkan sistem analisis sentimen otomatis yang efektif untuk memetakan opini pengguna terhadap Mobile Legends, dengan performa terbaik ditunjukkan oleh model deep learning GRU hybrid.`,
  },
];
