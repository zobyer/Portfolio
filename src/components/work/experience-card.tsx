import Experience from "../../interfaces/experience";
import "../../styles/experience-card.css";

type ExperienceCardProps = {
  Experience: Experience;
};

const ExperinceCard = (ExperienceCardProps: ExperienceCardProps) => {
  return (
    <div className="shadow experience-card-holder">
      <div className="glass-bg p-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img
              src={ExperienceCardProps.Experience.companyLogo}
              alt=""
              width={50}
            />
            <div className="ms-3">
              <h5 className="card-title text-start">
                {ExperienceCardProps.Experience.position}
              </h5>
              <p className="text-start mb-0">
                {ExperienceCardProps.Experience.companyName}
              </p>

              <p className="text-start mb-0">
                <span className="fw-bold">Technologies:</span>{" "}
                {ExperienceCardProps.Experience.TechStack}
              </p>
            </div>
          </div>
          {/* <p className="text-start text-muted">
            From {ExperienceCardProps.Experience.startingDate} to{" "}
            {ExperienceCardProps.Experience.endDate}
          </p> */}
          <ul className="ps-3">
            {ExperienceCardProps.Experience.tasks.map((experience, index) => {
              return (
                <li className="text-start" key={index}>
                  {experience}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperinceCard;
