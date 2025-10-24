const RobloxPage = () => {
  const project = {
    id: 4,
    title: "Analisis Sentimen Aplikasi Roblox",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["Transformer", "streamlit"],
    longDescription: `
      Proyek ini berfokus pada analisis sentimen ulasan pengguna Roblox dari Google Play Store dengan menggunakan model transformer. Sebanyak 11.000 ulasan dikumpulkan, berisi teks ulasan, tanggal, rating bintang, dan nama pengguna. Kode tersebut membentuk sebuah pipeline analisis sentimen berbasis Natural Language Processing (NLP) yang menggunakan model Transformer berbahasa Indonesia untuk memproses ulasan pengguna aplikasi Roblox dari Google Play Store. Proses dimulai dengan tahap pengumpulan data menggunakan library google-play-scraper, yang mengambil ribuan ulasan terbaru berbahasa Indonesia agar data yang diperoleh relevan dengan konteks pengguna lokal. Data yang terkumpul kemudian melalui tahap preprocessing untuk membersihkan dan menyiapkan teks agar siap dianalisis oleh model. Tahapan pembersihan ini meliputi penghapusan emoji, tag HTML, URL, angka, serta tanda baca, diikuti dengan konversi seluruh teks menjadi huruf kecil untuk menjaga konsistensi. Setelah itu, dilakukan normalisasi terhadap kata tidak baku atau slang words agar diubah ke bentuk standar, tokenisasi untuk memecah kalimat menjadi kata-kata, penghapusan stopwords seperti “dan” atau “yang” yang tidak berpengaruh terhadap makna sentimen, serta stemming menggunakan library Sastrawi untuk mengembalikan setiap kata ke bentuk dasarnya, misalnya “bermain” menjadi “main”. Semua proses tersebut digabungkan dalam satu fungsi pipeline agar dapat diterapkan secara efisien pada seluruh data ulasan.

      Setelah tahap pra-pemrosesan selesai, teks yang telah bersih diklasifikasikan menggunakan model Transformer w11wo/indonesian-roberta-base-sentiment-classifier, yaitu model berbasis RoBERTa yang telah dilatih khusus untuk mengenali sentimen positif, netral, dan negatif dalam bahasa Indonesia. Proses klasifikasi dilakukan melalui fungsi safe_nlp, yang memastikan teks kosong atau terlalu panjang tidak menyebabkan kesalahan selama inferensi. Model menghasilkan dua keluaran utama, yaitu label sentimen dan tingkat kepercayaan (confidence score) untuk setiap ulasan. Selanjutnya, dilakukan penyesuaian hasil klasifikasi secara manual dengan mendeteksi kata kunci tertentu seperti “bagus”, “seru”, atau “keren” untuk menandai sentimen positif, serta “error”, “buruk”, atau “jelek” untuk menandai sentimen negatif, dengan tujuan memperbaiki potensi kesalahan prediksi yang dilakukan oleh model.`,
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
  };

  return (
    <div className="p-10 lg:mx-20 text-justify">
      {/* Judul */}
      <h1 className="text-3xl font-bold ">{project.title}</h1>

      {/* Deskripsi panjang */}
      <p className=" text-gray-700 whitespace-pre-line">
        {project.longDescription}
      </p>

      {/* Paragraf 2 */}
      <p className=" text-gray-700 whitespace-pre-line">
        {project.longDescriptionparagraf2}
      </p>

      {/* Galeri */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {project.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} screenshot ${index + 1}`}
            className="rounded-lg shadow"
          />
        ))}
      </div>

      {/* Deskripsi tambahan */}
      <p className=" text-gray-700 whitespace-pre-line">
        {project.longDescription2}
      </p>
      <p className="text-gray-700 whitespace-pre-line">
        {project.longDescription2paragraf2}
      </p>
      <p>Selain itu, dibuat juga antarmuka streamlit seperti berikut :</p>
      <img src="/projects/roblox_5.png" alt="" />
    </div>
  );
};

export default RobloxPage;
