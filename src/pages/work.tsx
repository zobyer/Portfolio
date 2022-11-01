import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ExperinceCard from "../components/work/experience-card";
import Experience from "../interfaces/experience";

const ExperienceInfo: Experience[] = [
  {
    companyName: "Appnap Technologies Ltd",
    position: "Junior Software Engineer",
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
    position: "Junior Full Stack Developer",
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

const Work = () => {
  return (
    <div className="bg-grey min-vh-100">
      <NavBar />

      <div className="d-flex justify-content-center mt-4">
        <div className="container">
          {ExperienceInfo.map((experience, index) => {
            return (
              <div className="row mt-5 pt-5">
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

      <Footer />
    </div>
  );
};

export default Work;
