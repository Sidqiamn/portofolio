import gambar from "../../public/projects/msml_workflow.png";
import gambar2 from "../../public/projects/screenshoot_artifak.png";
import gambar3 from "../../public/projects/screenshoot-dockerhub.png";
import gambar4 from "../../public/projects/monitoring_grafana.png";
import gambar5 from "../../public/projects/notifikasi_grafana.png";

const ProjectsistemML = () => {
  return (
    <div className="p-10  lg:mx-20 text-justify flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Sistem Monitoring</h1>
        <p className=" text-gray-700">
          Pada projek ini akan dibuat sistem machine learning yang andal dan
          siap masuk tahap produksi, mencakup seluruh tahapan mulai dari
          pengumpulan data, pelatihan model, penelusuran metadata, hingga
          deployment dan monitoring yang aktif. Dataset dapat diakses dari
          kaggle: https://www.kaggle.com/datasets/uciml/iris. . Hal yang
          dilakukan pada projek ini antara lain :
        </p>
      </div>

      <div className="flex justify-center items-center gap-5  flex-col  ">
        <h3 className="text-xl font-semibold self-start">Workflow CI</h3>
        <img className="w-[45rem] h-auto text-center" src={gambar} alt="" />
        <p>
          Membuat sebuah workflow pada GitHub Actions bertujuan untuk
          mengotomatisasi proses preprocessing sehingga dapat berjalan secara
          otomatis setiap kali terdapat trigger yang terpantik, misalnya saat
          ada perubahan kode yang di-push atau pull request pada branch
          tertentu. Selain itu, masih dilakukan beberapa tahapan secara manual,
          seperti experimentation, data loading pada notebook, EDA (Exploratory
          Data Analysis) pada notebook, serta preprocessing pada notebook.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5  flex-col  ">
        <h3 className="text-xl font-semibold self-start">ML Flow</h3>
        <img className="w-[45rem] h-auto text-center" src={gambar2} alt="" />
        <p>
          <strong>MLflow</strong> adalah platform open-source untuk melacak dan
          mengelola eksperimen machine learning. Dengan MLflow, pengguna dapat
          mencatat parameter model, metrik evaluasi, dan artifact seperti model
          terlatih atau laporan, sehingga memudahkan reproduksibilitas,
          perbandingan eksperimen, dan kolaborasi tim. MLflow menyediakan
          Tracking UI, antarmuka berbasis web, untuk melihat semua eksperimen
          secara terorganisir. Dalam proyek ini, saya telah melatih model
          machine learning dan deep learning menggunakan MLflow Tracking UI yang
          disimpan secara lokal, dengan penerapan hyperparameter tuning.
          Alih-alih menggunakan autolog, saya melakukan manual logging dengan
          metrik yang sama seperti yang dicatat autolog. Selain itu, model juga
          dilatih menggunakan MLflow Tracking UI yang disimpan secara online
          melalui <strong>DagsHub</strong>, dengan manual logging untuk mencatat
          metrik yang tidak hanya tercakup oleh autolog, termasuk minimal dua
          metrik tambahan.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5  flex-col  ">
        <h3 className="text-xl font-semibold self-start">Workflow CI</h3>
        <img className="w-[45rem] h-auto text-center" src={gambar3} alt="" />
        <p>
          Membuat workflow CI (Continuous Integration) bertujuan untuk
          mengotomatisasi proses integrasi kode setiap kali ada perubahan,
          misalnya dengan menjalankan preprocessing, training, dan evaluasi
          model secara otomatis. Hasil dari proses tersebut berupa artefak
          (seperti model terlatih, laporan metrik, atau file hasil
          preprocessing) kemudian disimpan ke suatu repositori, baik di GitHub
          yang sama ataupun layanan penyimpanan eksternal seperti Google Drive,
          agar dapat diakses kembali dan tidak hilang. Selain itu, pipeline juga
          mencakup pembuatan Docker Images dari model machine learning
          menggunakan perintah mlflow build-docker. Docker Image ini berisi
          paket lengkap model beserta dependensi yang diperlukan sehingga dapat
          dijalankan secara konsisten di berbagai lingkungan. Setelah image
          dibuat, langkah berikutnya adalah mengunggahnya ke Docker Hub agar
          bisa dengan mudah ditarik (pull) dan digunakan untuk deployment di
          server atau platform lain.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5  flex-col  ">
        <h3 className="text-xl font-semibold self-start">
          Sistem Monitoring dan Logging
        </h3>
        <div className="flex gap-5">
          <img className="w-[30rem] h-auto text-center" src={gambar4} alt="" />
          <img className="w-[30rem] h-auto text-center" src={gambar5} alt="" />
        </div>
        <p>
          Melakukan monitoring sistem menggunakan Grafana dengan menampilkan 10
          metrik berbeda yang relevan untuk performa model maupun infrastruktur.
          Selain itu, membuat tiga alerting di Grafana agar sistem dapat
          memberikan notifikasi otomatis jika terjadi anomali atau penurunan
          performa. Selanjutnya, melakukan model serving baik melalui artefak
          yang telah disimpan, menggunakan mlflow models serve, mlflow
          deployments, atau dengan melakukan pull Docker Images. Tidak hanya
          itu, monitoring juga dilakukan menggunakan Prometheus dengan
          menambahkan minimal 10 metrik berbeda, sehingga integrasi antara
          Prometheus dan Grafana dapat memberikan visibilitas penuh terhadap
          performa model serta kondisi sistem secara real-time.
        </p>
      </div>
    </div>
  );
};

export default ProjectsistemML;
