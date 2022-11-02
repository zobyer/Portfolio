import Footer from "../components/footer";
import NavBar from "../components/navbar";
import EducationCard from "../components/work/education-card";
import ExperinceCard from "../components/work/experience-card";
import Education from "../interfaces/education";
import Experience from "../interfaces/experience";

const ExperienceInfo: Experience[] = [
  {
    companyName: "Appnap Technologies Ltd",
    companyLogo:
      "https://drive.google.com/uc?export=view&id=1Z86ZeDPT3yXuzfE8VHXPkXTNxGLQNEhX",
    position: "Junior Software Engineer",
    TechStack:
      "Javascript, Vue.js, Nuxt.js, Html, Css, Sass, Laravel, MySql, Git, Jira",
    startingDate: "Oct 2021",
    endDate: "Ongoing",
    tasks: [
      "Converted raw data from Api & database call to create effective & unique user experience in the browser.",
      "Built reusable components & custom library using vue.js.",
      "Developed Api's for frontend using Laravel.",
      "Integrated pusher to send & consume real time notification on both web & mobile apps from backend.",
      "Controlled code version & project management with agile team using git, jira.",
    ],
  },

  {
    companyName: "Evident BD",
    companyLogo:
      "https://drive.google.com/uc?export=view&id=1l5AoLEfdmkaL3O0kIEx1_wLHJL43X7WB",
    position: "Junior Full Stack Developer",
    TechStack:
      "Python, Django, FastAPI, Celery, PostgreSql, Docker, Html, Css, Bulma, Laravel",
    startingDate: "Jun 2021",
    endDate: "Sep 2021",
    tasks: [
      "Developed multiple backend services using microservice architecture.",
      "Integrated amazon, ebay, woocommerce developer api’s.",
      "Used stripe to develop payment gateway for users to subscribe to respective system.",
      "Implemented docker to containerize multiple application.",
      "Collaborated with team members using version control systems such as git to organize modifications and assign tasks.",
    ],
  },
];

const EducationInfo: Education[] = [
  {
    institute: "Military Institute of Science & Technology",
    instituteLogo:
      "https://drive.google.com/uc?export=view&id=10vxBMp1Dk1sKFePNjHLFuqDDx2hKNrnv",
    subject: "B Sc Computer Science & Engineering",
    startDate: "2017",
    endDate: "2021",
  },
];

const Work = () => {
  return (
    <div className="bg-grey min-vh-100">
      <NavBar />

      <div className="d-flex justify-content-center mt-4">
        <div className="container mt-5">
          <h2 className="experience-header text-start">Experience</h2>
          {ExperienceInfo.map((experience, index) => {
            return (
              <div className="row mt-5" key={index}>
                <div
                  className={`col-md-3 ${index % 2 === 0 ? `d-none` : ``}`}
                ></div>
                <div className="col-md-9">
                  <ExperinceCard Experience={experience} />
                </div>
                <div
                  className={`col-md-3 ${index % 2 === 0 ? `` : `d-none`}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="container">
          <h2 className="experience-header text-start">Education</h2>

          {EducationInfo.map((education, index) => {
            return (
              <div className="row mt-5" key={index}>
                <div
                  className={`col-md-3 ${index % 2 === 0 ? `d-none` : ``}`}
                ></div>
                <div className="col-md-9">
                  <EducationCard Education={education} />
                </div>
                <div
                  className={`col-md-3 ${index % 2 === 0 ? `` : `d-none`}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
