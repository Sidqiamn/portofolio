import image1 from "../../public/projects/msml_workflow.png";
import image2 from "../../public/projects/screenshoot_artifak.png";
import image3 from "../../public/projects/screenshoot-dockerhub.png";
import image4 from "../../public/projects/monitoring_grafana.png";
import image5 from "../../public/projects/notifikasi_grafana.png";

const ProjectMLSystem = () => {
  return (
    <div className="p-10 lg:mx-20 text-justify flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Monitoring System</h1>
        <p className="text-gray-700">
          In this project, a reliable and production-ready machine learning
          system was built, covering the entire process from data collection,
          model training, metadata tracking, to deployment and active
          monitoring. The dataset can be accessed from Kaggle:
          https://www.kaggle.com/datasets/uciml/iris. The main activities
          carried out in this project include:
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">CI Workflow</h3>
        <img className="w-[45rem] h-auto text-center" src={image1} alt="" />
        <p>
          A workflow was created in GitHub Actions to automate the preprocessing
          process, so it runs automatically whenever a trigger is activated —
          for example, when a code change is pushed or a pull request is made on
          a specific branch. In addition, some stages were still performed
          manually, such as experimentation, data loading in a notebook, EDA
          (Exploratory Data Analysis), and preprocessing.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">MLflow</h3>
        <img className="w-[45rem] h-auto text-center" src={image2} alt="" />
        <p>
          <strong>MLflow</strong> is an open-source platform for tracking and
          managing machine learning experiments. With MLflow, users can record
          model parameters, evaluation metrics, and artifacts (such as trained
          models or reports), making it easier to reproduce, compare
          experiments, and collaborate across teams. MLflow provides a Tracking
          UI, a web-based interface, to view all experiments in an organized
          way. In this project, I trained both machine learning and deep
          learning models using the locally stored MLflow Tracking UI, applying
          hyperparameter tuning. Instead of using autolog, I performed manual
          logging with the same metrics as autolog. Moreover, the models were
          also trained using MLflow Tracking UI hosted online via{" "}
          <strong>DagsHub</strong>, with manual logging to record additional
          metrics not covered by autolog, including at least two extra metrics.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">CI Workflow</h3>
        <img className="w-[45rem] h-auto text-center" src={image3} alt="" />
        <p>
          Creating a CI (Continuous Integration) workflow aims to automate code
          integration whenever changes occur, such as by automatically running
          preprocessing, training, and model evaluation. The output from these
          processes, such as trained models, metric reports, or preprocessing
          files, is stored in a repository — either on the same GitHub or on an
          external storage service like Google Drive — so that they remain
          accessible and not lost. The pipeline also includes building Docker
          Images from the machine learning models using the{" "}
          <code>mlflow build-docker</code> command. This Docker Image contains
          the complete model along with all dependencies required for consistent
          execution across environments. Once the image is built, the next step
          is to upload it to Docker Hub so it can be easily pulled and deployed
          to other servers or platforms.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col">
        <h3 className="text-xl font-semibold self-start">
          Monitoring and Logging System
        </h3>
        <div className="flex gap-5">
          <img className="w-[30rem] h-auto text-center" src={image4} alt="" />
          <img className="w-[30rem] h-auto text-center" src={image5} alt="" />
        </div>
        <p>
          System monitoring was performed using Grafana by displaying 10
          different metrics relevant to both model and infrastructure
          performance. In addition, three alerts were created in Grafana to
          enable the system to automatically send notifications if any anomalies
          or performance drops occur. Furthermore, model serving was done
          through saved artifacts using <code>mlflow models serve</code>,{" "}
          <code>mlflow deployments</code>, or by pulling Docker Images.
          Monitoring was also conducted using Prometheus, with at least 10
          different metrics added, allowing the integration between Prometheus
          and Grafana to provide full visibility of model performance and system
          health in real time.
        </p>
      </div>
    </div>
  );
};

export default ProjectMLSystem;
