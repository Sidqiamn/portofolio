import mobile from "../../public/projects/mobile.png";
import mobile7 from "../../public/projects/mobile7.png";
import mobile2 from "../../public/projects/mobile2.png";
import mobile3 from "../../public/projects/mobile3.png";
import mobile4 from "../../public/projects/mobile4.png";
import mobile5 from "../../public/projects/mobile5.png";

const Hiteman = () => {
  return (
    <div className="p-10 lg:mx-20 text-justify">
      <h1 className="text-3xl font-bold mb-4">Hiteman</h1>
      <p>
        HaiTeman is an audio-based chatbot and data visualization tool developed
        to help individuals manage their emotions in a healthier and more
        independent way through the Acceptance and Commitment Therapy (ACT)
        approach. This project was born out of concern for the high rates of
        mental health disorders and limited access to professional services,
        especially among young people and busy urban communities. We believe
        that smart and accessible solutions can be the first step towards
        greater awareness and self-care. This project utilizes AI technology,
        particularly in the form of Large Language Models (LLM) to understand
        and respond to users confessions empathetically, as well as
        Text-to-Speech (TTS) to deliver therapeutic messages in a humanistic and
        soothing manner. The execution plan includes the development of an
        emotion classification model, LLM and TTS integration, and chatbot
        interaction flow design. Up to this checkpoint, the team has completed
        the literature study phase, emotion classification model development,
        and chatbot interface creation.
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
            HaiTeman adalah chatbot yang mendeteksi emosi (happy, sadness, fear,
            stress) dari teks bahasa Indonesia, menghasilkan skrip terapi
            berbasis Acceptance and Commitment Therapy (ACT), dan mengubahnya
            menjadi audio. Solusi menggabungkan DistilBERT, TF-IDF + Logistic
            Regression (hybrid), LLM untuk skrip, TTS untuk audio, dan FastAPI
            untuk endpoint real-time. Fokus utama: akurasi tinggi, konteks
            budaya lokal, efisiensi untuk mobile.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Tujuan (Goals)</h2>
          <ul className="list-disc list-inside">
            <li>
              Membangun chatbot ACT yang deteksi emosi & memberi respons terapi
              audio.
            </li>
            <li>
              Mencapai akurasi klasifikasi &gt;95% (target tercapai: ~97%).
            </li>
            <li>
              Optimasi untuk deployment pada perangkat terbatas (TFLite,
              Docker).
            </li>
            <li>Antarmuka API dan UX yang ramah pengguna.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Pendekatan Solusi</h2>
          <ol className="list-disc list-inside">
            <li>
              <strong>Klasifikasi Emosi (Hybrid):</strong> fine-tuned DistilBERT
              + TF-IDF features → Logistic Regression. Hasil: akurasi ~97%,
              F1-score 0.97.
            </li>
            <li>
              <strong>LLM &amp; TTS:</strong> LLM menghasilkan skrip terapi
              berbasis ACT; TTS menghasilkan .wav dengan intonasi menenangkan
              (MOS 4.5/5).
            </li>
            <li>
              <strong>API &amp; Deployment:</strong> FastAPI menyediakan
              endpoint
              <code> /generate_therapy_audio</code> semua komponen dikemas dalam
              Docker dan model juga diekspor ke TFLite untuk mobile.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold">Data &amp; Persiapan</h2>
          <p>
            Dataset gabungan dari kaggle dan membuat sendiri . Langkah penting:
            pembersihan, augmentasi untuk kelas minoritas, undersampling kelas
            mayor, dan pembagian 80/10/10. Tokenisasi DistilBert dengan
            max_length=128.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Hiteman;
