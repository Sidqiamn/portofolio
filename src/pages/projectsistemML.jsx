import image1 from "../../public/projects/msml_workflow.png";
import image2 from "../../public/projects/screenshoot_artifak.png";
import image3 from "../../public/projects/screenshoot-dockerhub.png";
import image4 from "../../public/projects/monitoring_grafana.png";
import image5 from "../../public/projects/notifikasi_grafana.png";

const ProjectMLSystem = () => {
  return (
    <div className="p-10 lg:mx-20 text-justify flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Sistem Monitoring</h1>
        <p className="text-gray-700">
          Dalam proyek ini, sistem machine learning yang andal dan siap produksi
          dibangun, mencakup seluruh proses mulai dari pengumpulan data,
          pelatihan model, pelacakan metadata, hingga deployment dan monitoring
          aktif. Dataset dapat diakses dari Kaggle:
          https://www.kaggle.com/datasets/uciml/iris. Aktivitas utama yang
          dilakukan dalam proyek ini meliputi:
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">
          Alur CI (Continuous Integration)
        </h3>
        <img className="w-[45rem] h-auto text-center" src={image1} alt="" />
        <p>
          Sebuah alur kerja (workflow) dibuat di GitHub Actions untuk
          mengotomatisasi proses preprocessing, sehingga berjalan otomatis
          setiap kali ada pemicu (trigger) — misalnya ketika ada perubahan kode
          yang dikirim (push) atau pull request pada branch tertentu. Selain
          itu, beberapa tahap masih dilakukan secara manual, seperti eksperimen,
          pemuatan data di notebook, EDA (Exploratory Data Analysis), dan
          preprocessing.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">MLflow</h3>
        <img className="w-[45rem] h-auto text-center" src={image2} alt="" />
        <p>
          <strong>MLflow</strong> adalah platform open-source untuk melacak dan
          mengelola eksperimen machine learning. Dengan MLflow, pengguna dapat
          mencatat parameter model, metrik evaluasi, serta artefak (seperti
          model terlatih atau laporan), sehingga memudahkan replikasi,
          perbandingan eksperimen, dan kolaborasi antar tim. MLflow menyediakan
          antarmuka berbasis web bernama Tracking UI untuk menampilkan seluruh
          eksperimen secara terorganisir. Dalam proyek ini, saya melatih model
          machine learning dan deep learning menggunakan MLflow Tracking UI
          lokal dengan menerapkan hyperparameter tuning. Alih-alih menggunakan
          autolog, saya melakukan logging manual dengan metrik yang sama seperti
          autolog. Selain itu, model juga dilatih menggunakan MLflow Tracking UI
          yang dihosting secara online melalui <strong>DagsHub</strong>, dengan
          pencatatan manual untuk menambahkan metrik tambahan yang tidak
          tercakup oleh autolog, termasuk setidaknya dua metrik ekstra.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">
          Alur CI (Continuous Integration)
        </h3>
        <img className="w-[45rem] h-auto text-center" src={image3} alt="" />
        <p>
          Pembuatan alur kerja CI (Continuous Integration) bertujuan untuk
          mengotomatisasi integrasi kode setiap kali ada perubahan, seperti
          menjalankan preprocessing, pelatihan, dan evaluasi model secara
          otomatis. Hasil dari proses ini, seperti model terlatih, laporan
          metrik, atau file preprocessing, disimpan di repositori — baik di
          GitHub yang sama maupun layanan penyimpanan eksternal seperti Google
          Drive — agar tetap dapat diakses dan tidak hilang. Pipeline ini juga
          mencakup pembuatan Docker Image dari model machine learning
          menggunakan perintah <code>mlflow build-docker</code>. Docker Image
          ini berisi model lengkap beserta semua dependensi yang dibutuhkan
          untuk eksekusi konsisten di berbagai lingkungan. Setelah image
          berhasil dibuat, langkah berikutnya adalah mengunggahnya ke Docker Hub
          agar dapat dengan mudah diunduh (pull) dan dideploy ke server atau
          platform lain.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">
          Sistem Monitoring dan Logging
        </h3>
        <div className="flex gap-5">
          <img className="w-[30rem] h-auto text-center" src={image4} alt="" />
          <img className="w-[30rem] h-auto text-center" src={image5} alt="" />
        </div>
        <p>
          Monitoring sistem dilakukan menggunakan Grafana dengan menampilkan 10
          metrik berbeda yang relevan terhadap performa model maupun
          infrastruktur. Selain itu, dibuat tiga alert di Grafana agar sistem
          dapat secara otomatis mengirim notifikasi jika terjadi anomali atau
          penurunan performa. Model serving dilakukan melalui artefak yang
          disimpan dengan perintah <code>mlflow models serve</code>,{" "}
          <code>mlflow deployments</code>, atau dengan menarik Docker Image.
          Monitoring juga dilakukan menggunakan Prometheus dengan menambahkan
          setidaknya 10 metrik berbeda, memungkinkan integrasi antara Prometheus
          dan Grafana untuk memberikan visibilitas penuh terhadap performa model
          dan kesehatan sistem secara real-time.
        </p>
      </div>
    </div>
  );
};

export default ProjectMLSystem;
