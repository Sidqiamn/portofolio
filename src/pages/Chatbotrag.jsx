import chatbot from "../../public/projects/chatbotrag.png";

const Chatbotrag = () => {
  return (
    <div className="p-10 lg:mx-20 text-justify">
      <h1 className="text-3xl font-bold mb-4">
        Chatbot RAG (Ollama + TiDB + SentenceTransformer)
      </h1>

      <p>
        Saya membangun sebuah sistem chatbot berbasis{" "}
        <strong>RAG (Retrieval-Augmented Generation)</strong>
        yang mampu menjawab pertanyaan berdasarkan data pengetahuan yang
        tersimpan dalam database. Sistem ini menggabungkan model bahasa lokal
        (LLM) dari <strong>Ollama</strong>, model embedding menggunakan{" "}
        <strong>SentenceTransformer</strong>, dan database vektor{" "}
        <strong>TiDB Cloud</strong>
        untuk melakukan pencarian semantik. Tujuan utama proyek ini adalah
        menyediakan chatbot yang mampu memberikan jawaban akurat berbasis data
        internal, sekaligus tetap mampu menjawab berdasarkan pengetahuan umum
        bila informasi tidak ditemukan dalam basis data.
      </p>
      <img src={chatbot} alt="" className="h-[27rem] mx-auto mt-5" />

      <article className="prose mt-5">
        <section>
          <h2 className="font-bold">Gambaran Sistem</h2>
          <p>
            Sistem ini bekerja dengan cara mengubah data pengetahuan menjadi
            embedding vektor, menyimpannya ke dalam database, dan melakukan
            pencarian kemiripan vektor ketika user mengajukan pertanyaan.
            Konteks yang ditemukan kemudian digunakan sebagai landasan bagi LLM
            untuk menghasilkan jawaban yang tepat dan sesuai.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Tujuan</h2>
          <ul className="list-disc list-inside">
            <li>
              Membangun chatbot yang mampu menjawab pertanyaan berdasarkan
              pengetahuan internal perusahaan/toko.
            </li>
            <li>
              Memanfaatkan embedding vektor untuk pencarian semantik yang lebih
              relevan dibanding pencarian berbasis kata kunci.
            </li>
            <li>
              Mengintegrasikan model LLM lokal agar dapat berjalan tanpa layanan
              cloud eksternal.
            </li>
            <li>
              Menyediakan antarmuka interaktif menggunakan Streamlit untuk
              interaksi langsung dengan pengguna.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Teknologi yang Digunakan</h2>
          <ul className="list-disc list-inside">
            <li>Ollama — sebagai LLM lokal (model: gemma3:1b).</li>
            <li>
              SentenceTransformer — untuk menghasilkan embedding teks (model:
              all-MiniLM-L6-v2).
            </li>
            <li>
              TiDB Cloud — sebagai database vektor dengan perhitungan cosine
              similarity.
            </li>
            <li>Streamlit — sebagai antarmuka pengguna chatbot.</li>
            <li>
              Python — untuk pemrosesan data, embedding, query, dan generasi
              jawaban.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Alur Sistem</h2>
          <ol className="list-decimal list-inside">
            <li>Dataset barang dimuat dari file CSV.</li>
            <li>Masing-masing item diubah menjadi representasi embedding.</li>
            <li>
              Embedding dan teks disimpan ke tabel <code>documents</code> di
              TiDB Cloud.
            </li>
            <li>User memasukkan pertanyaan.</li>
            <li>
              Pertanyaan diubah menjadi embedding dan dicocokkan menggunakan
              cosine similarity.
            </li>
            <li>Konteks hasil pencarian dikirim ke model LLM.</li>
            <li>
              LLM menghasilkan jawaban akhir yang ditampilkan kepada pengguna.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold">Use Case</h2>
          <ul className="list-disc list-inside">
            <li>Chatbot katalog barang toko / e-commerce internal.</li>
            <li>Sistem helpdesk berbasis dokumentasi perusahaan.</li>
            <li>Mesin pencari dokumen berbasis semantik.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Chatbotrag;
