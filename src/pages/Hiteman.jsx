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
            HaiTeman is a chatbot that detects emotions (happiness, sadness,
            fear, stress) from Indonesian text, generates therapy scripts based
            on Acceptance and Commitment Therapy (ACT), and converts them into
            audio. The solution combines DistilBERT, TF-IDF + Logistic
            Regression (hybrid), an LLM for script generation, TTS for audio,
            and FastAPI for real-time endpoints. The main focus: high accuracy,
            local cultural context, and mobile efficiency.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Goals</h2>
          <ul className="list-disc list-inside">
            <li>
              Build an ACT-based chatbot that detects emotions and provides
              therapeutic audio responses.
            </li>
            <li>
              Achieve classification accuracy &gt;95% (target reached: ~97%).
            </li>
            <li>
              Optimize deployment for resource-constrained devices (TFLite,
              Docker).
            </li>
            <li>Provide user-friendly API and UX design.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Solution Approach</h2>
          <ol className="list-disc list-inside">
            <li>
              <strong>Emotion Classification (Hybrid):</strong> fine-tuned
              DistilBERT + TF-IDF features → Logistic Regression. Results: ~97%
              accuracy, F1-score 0.97.
            </li>
            <li>
              <strong>LLM &amp; TTS:</strong> LLM generates ACT-based therapy
              scripts; TTS produces .wav audio with a calming intonation (MOS
              4.5/5).
            </li>
            <li>
              <strong>API &amp; Deployment:</strong> FastAPI provides the
              <code>/generate_therapy_audio</code> endpoint. All components are
              containerized with Docker, and models are exported to TFLite for
              mobile.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-bold">Data &amp; Preparation</h2>
          <p>
            The dataset combines Kaggle sources and custom-built data. Key
            steps: cleaning, augmentation for minority classes, undersampling of
            majority classes, and 80/10/10 train-validation-test split.
            DistilBERT tokenization with max_length=128.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Hiteman;
