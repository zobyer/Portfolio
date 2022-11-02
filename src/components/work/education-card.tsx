import Education from "../../interfaces/education";
import "../../styles/experience-card.css";

type EducationCardProps = {
  Education: Education;
};

const EducationCard = (EducationCardProps: EducationCardProps) => {
  return (
    <div className="shadow experience-card-holder">
      <div className="glass-bg p-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center mb-3">
              <img
                src={EducationCardProps.Education.instituteLogo}
                alt=""
                width={45}
              />
              <div className="ms-3">
                <h5 className="text-start mb-1">
                  {EducationCardProps.Education.institute}
                </h5>
                <p className="text-start mb-0">
                  {EducationCardProps.Education.subject}
                </p>
              </div>
            </div>
            <div className="d-flex">
              <p className="">{EducationCardProps.Education.startDate}</p> -
              <p className="text-end">{EducationCardProps.Education.endDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
