import mobile from "../../public/projects/mobile.png";
import mobile7 from "../../public/projects/mobile7.png";
import mobile2 from "../../public/projects/mobile2.png";
import mobile3 from "../../public/projects/mobile3.png";
import mobile4 from "../../public/projects/mobile4.png";
import mobile5 from "../../public/projects/mobile5.png";

const Hiteman = () => {
  return (
    <div className="p-10 lg:mx-20 text-justify">
      <h1 className="text-3xl font-bold mb-4">HaiTeman</h1>
      <p>
        HaiTeman adalah chatbot berbasis audio dan alat visualisasi data yang
        dikembangkan untuk membantu individu mengelola emosinya dengan cara yang
        lebih sehat dan mandiri melalui pendekatan{" "}
        <strong>Acceptance and Commitment Therapy (ACT)</strong>. Proyek ini
        lahir dari kepedulian terhadap tingginya angka gangguan kesehatan mental
        dan terbatasnya akses ke layanan profesional, terutama di kalangan anak
        muda dan masyarakat perkotaan yang sibuk. Kami percaya bahwa solusi yang
        cerdas dan mudah diakses dapat menjadi langkah awal menuju kesadaran dan
        perawatan diri yang lebih baik. Proyek ini memanfaatkan teknologi AI,
        khususnya dalam bentuk
        <strong>Large Language Models (LLM)</strong> untuk memahami dan
        merespons curahan hati pengguna secara empatik, serta{" "}
        <strong>Text-to-Speech (TTS)</strong> untuk menyampaikan pesan terapi
        dengan cara yang humanis dan menenangkan. Rencana pelaksanaannya
        mencakup pengembangan model klasifikasi emosi, integrasi LLM dan TTS,
        serta perancangan alur interaksi chatbot. Hingga titik ini, tim telah
        menyelesaikan tahap studi literatur, pengembangan model klasifikasi
        emosi, dan pembuatan antarmuka chatbot.
      </p>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-6 gap-1">
        <img src={mobile7} className="h-[23rem]" alt="mobile7" />
        <img src={mobile2} className="h-[23rem]" alt="mobile2" />
        <img src={mobile} className="h-[23rem]" alt="mobile" />
        <img src={mobile3} className="h-[23rem]" alt="mobile3" />
        <img src={mobile4} className="h-[23rem]" alt="mobile4" />
        <img src={mobile5} className="h-[23rem]" alt="mobile5" />
      </div>

      <article className="prose mt-10">
        <section>
          <p>
            HaiTeman adalah chatbot yang mendeteksi emosi (senang, sedih, takut,
            stres) dari teks berbahasa Indonesia, menghasilkan skrip terapi
            berdasarkan
            <strong> Acceptance and Commitment Therapy (ACT) </strong>, dan
            mengubahnya menjadi audio. Solusi ini menggabungkan{" "}
            <strong>DistilBERT</strong>,{" "}
            <strong>TF-IDF + Logistic Regression (hybrid)</strong>,
            <strong> LLM </strong> untuk pembuatan skrip, <strong>TTS</strong>{" "}
            untuk audio, dan
            <strong> FastAPI </strong> untuk endpoint real-time. Fokus utama
            proyek ini adalah akurasi tinggi, konteks budaya lokal, dan
            efisiensi pada perangkat mobile.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Tujuan</h2>
          <ul className="list-disc list-inside">
            <li>
              Membangun chatbot berbasis ACT yang dapat mendeteksi emosi dan
              memberikan respons audio terapeutik.
            </li>
            <li>
              Mencapai akurasi klasifikasi &gt;95% (target tercapai: ~97%).
            </li>
            <li>
              Mengoptimalkan deployment untuk perangkat dengan sumber daya
              terbatas (TFLite, Docker).
            </li>
            <li>Menyediakan API dan desain UX yang ramah pengguna.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Pendekatan Solusi</h2>
          <ol className="list-disc list-inside">
            <li>
              <strong>Klasifikasi Emosi (Hybrid):</strong> Fine-tuned DistilBERT
              + fitur TF-IDF → Logistic Regression. Hasil: akurasi ~97%,
              F1-score 0.97.
            </li>
            <li>
              <strong>LLM &amp; TTS:</strong> LLM menghasilkan skrip terapi
              berbasis ACT; TTS menghasilkan audio (.wav) dengan intonasi yang
              menenangkan (MOS 4.5/5).
            </li>
            <li>
              <strong>API &amp; Deployment:</strong> FastAPI menyediakan
              endpoint
              <code>/generate_therapy_audio</code>. Semua komponen
              dikontainerisasi dengan Docker, dan model diekspor ke TFLite untuk
              versi mobile.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold">Data &amp; Persiapan</h2>
          <p>
            Dataset menggabungkan sumber dari Kaggle dan data yang dibangun
            secara mandiri. Langkah-langkah utama meliputi pembersihan data,
            augmentasi untuk kelas minoritas, undersampling untuk kelas
            mayoritas, serta pembagian 80/10/10 untuk train-validation-test.
            Tokenisasi DistilBERT menggunakan <code>max_length=128</code>.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Hiteman;
