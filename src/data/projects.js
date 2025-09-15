// data/projects.js
export const projects = [
  {
    id: 1,
    title: "HiTeman",
    description: "An application to help reduce negative emotions",
    image: "/projects/project12.png",
    tags: ["Hugging Face", "DistilBERT", "NLP"],
    longDescription: `
      HiTeman is an AI-based app designed to detect and reduce negative emotions
      using NLP models from Hugging Face. It analyzes users’ emotional text input
      and provides supportive feedback or therapy scripts.
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
      "Interactive analytics dashboard with predictive modeling and data visualization.",
    image: "/projects/project2.png",
    image2: "/projects/dashboard.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    longDescription: `
      Jaya Jaya Institute is a higher education institution established in 2000
      that has produced many quality graduates. However, the high dropout rate
      has become a major challenge for the institution.

      To address this, the project aims to build a machine learning-based dropout
      prediction system using student performance datasets. The system helps
      detect students at risk of dropping out early, enabling tailored guidance.
      In addition, an interactive dashboard was developed to help the institution
      understand the data and monitor overall student performance.
    `,
    gallery: ["/projects/streamlit1.png", "/projects/streamlit2.png"],
    longDescription2: `
      The image shows a web-based application developed with Streamlit to predict
      the likelihood of student dropout. The application, named Dropout Prediction
      App – Jaya Jaya Institute, provides a form-based interface containing key
      academic, demographic, and financial variables such as marital status, age
      at enrollment, prior qualification scores, tuition fees paid, and courses
      taken and passed in a given semester. Once the data is submitted, the
      application processes it using a pre-trained machine learning model. The
      prediction results are displayed directly, showing whether the student is
      at high risk of dropping out. This tool helps the institution intervene
      early for at-risk students.
    `,
    longDescription3: `
      I also developed a dashboard using Metabase to support Jaya Jaya Institute
      in analyzing dropout issues. The dashboard provides visualizations such as
      total dropouts, academic performance by gender, dropout status per program,
      tuition payment punctuality, scholarship effects, unemployment levels, and
      age distribution. These insights allow the institution to identify patterns
      linked to dropout risks, for example, correlations between late payments
      and dropout status, differences between scholarship and non-scholarship
      students, and socio-economic influences. The main purpose is to serve as an
      early detection tool to support targeted interventions, whether academic
      mentoring, financial aid, or special counseling, to reduce dropout rates
      and improve graduation outcomes.
    `,
    longDescription4:
      "I also implemented a Machine Learning Prototype System using Cloud Run. The steps I took began with building a Docker container from the machine learning application I had developed, then uploading the Docker image to Google Container Registry (GCR) so it could be managed in the cloud environment. After that, I proceeded to run the container using Cloud Run, complete with configuration settings such as region, autoscaling, and adjusting the container port to 8501. As a result, my machine learning application could be accessed via the URL provided by Cloud Run, proving that I had successfully implemented the full workflow from container creation, uploading to the registry, and deployment with Cloud Run.",
    subjudul: `Streamlit`,
    subjudul2: `Metabase`,
    subjudul3: `Google Cloud`,
  },
  {
    id: 3,
    title: "Helmet Detection",
    description:
      "Computer vision system to detect whether a person is wearing a helmet.",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["YOLOv11", "Roboflow", "Computer Vision"],
    longDescription: `
      This project implements a helmet detection system using YOLOv11 to identify
      whether a person is wearing a helmet or not. The dataset was taken from
      Kaggle and processed with Roboflow into two main classes: helmet and
      no_helmet. Preprocessing included image quality checks to separate blurred
      from clear images, ensuring the model learned from informative data. Class
      distribution was visualized for balance, and labeled samples were
      inspected. The pre-trained YOLOv11 model was used as a checkpoint and
      fine-tuned with parameters such as 70 epochs, 640-pixel image size, batch
      size 16, and early stopping to prevent overfitting. Evaluation was
      conducted with mAP@50 and mAP@50:95 metrics. The trained model was stored
      in Google Drive for reuse in deployment, such as traffic monitoring or
      workplace safety applications.
    `,
    gallery: ["/projects/val_batch2_pred.jpg", "/projects/val_batch1_pred.jpg"],
    longDescription2: `
      Training results showed YOLO learning curves across 70 epochs. Each epoch
      reported GPU memory usage, losses (box_loss, cls_loss, dfl_loss), and
      validation metrics (precision, recall, mAP@50, mAP@50-95). Between epochs
      1–10, loss dropped significantly and mAP improved quickly, e.g., mAP@50
      rose from 0.295 to 0.954. After epoch 12, metrics stabilized with mAP@50
      above 0.94 up to epoch 46, reaching 0.987 accuracy at epoch 44. This shows
      the model achieved strong and consistent performance.
    `,
    subjudul: `Detection Results`,
    video: "/projects/inferenceHelmet.mp4",
    subjudul2: `Inference`,
  },
  {
    id: 4,
    title: "Sentiment Analysis of Mobile Legends App",
    description:
      "Sentiment classification system for user reviews from Google Play Store.",
    image: "/projects/val_batch2_pred.jpg",
    tags: ["TF-IDF", "GRU", "Machine Learning"],
    longDescription: `
      This project focuses on sentiment analysis of Mobile Legends user reviews
      from Google Play Store using both machine learning and deep learning
      approaches. A total of 11,000 reviews were scraped, containing review text,
      dates, star ratings, and usernames. Preprocessing steps included removing
      duplicates, numbers, symbols, punctuation, URLs, and special characters;
      eliminating stopwords in Indonesian and English; stemming with Sastrawi;
      normalizing slang into standard words; and converting emoticons into
      meaningful text to improve sentiment recognition.
    `,
    gallery: [
      "/projects/output-gru.png",
      "/projects/output-RF.png",
      "/projects/distribusimobile legends.png",
    ],
    longDescriptionparagraf2: `
      After text processing, sentiment labels were assigned using a lexicon-based
      approach. Reviews were categorized into three classes: negative (5,483),
      positive (3,742), and neutral (1,671). Features were built using TF-IDF
      with up to 3-grams, and the top 5,000 features were selected via
      chi-square. To handle imbalance, oversampling with SMOTE was applied,
      resulting in balanced class distributions.
    `,
    longDescription2: `
      Three models were trained. First, a TF-IDF-based MLP (Multi-Layer
      Perceptron) with stacked dense layers achieved 92.42% accuracy. Second, a
      Random Forest with 1,500 decision trees achieved 91.31%. The best model
      was a hybrid GRU + TF-IDF, combining embedding sequences with TF-IDF
      features, processed through GRU and dense layers. It achieved the highest
      accuracy at 93.44% and was more stable in classifying positive, negative,
      and neutral reviews.
    `,
    longDescription2paragraf2: `
      Evaluation with accuracy, F1-score, precision, recall, and confusion
      matrix showed the GRU hybrid model could better capture context compared
      to traditional methods. As a practical use case, an inference function was
      built to predict sentiment from new text. For example, “good” is predicted
      as positive, “sedang, biasa saja” as neutral, and “sangat buruk, jangan
      main!” as negative. This system demonstrates an effective automatic
      sentiment analysis solution, with the GRU hybrid deep learning model
      delivering the best performance.
    `,
  },
];
