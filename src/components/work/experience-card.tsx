import Experience from "../../interfaces/experience";

type ExperienceCardProps = {
  Experience: Experience;
};

const ExperinceCard = (ExperienceCardProps: ExperienceCardProps) => {
  return (
    <div className="shadow ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-start mb-2">
            {ExperienceCardProps.Experience.position}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted text-start">
            {ExperienceCardProps.Experience.companyName}
          </h6>
          <p className="text-start text-muted">
            From {ExperienceCardProps.Experience.startingDate} to{" "}
            {ExperienceCardProps.Experience.endDate}
          </p>
          <ul className="ps-3">
            {ExperienceCardProps.Experience.tasks.map((experience) => {
              return <li className="text-start">{experience}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperinceCard;
