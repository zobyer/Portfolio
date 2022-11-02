import Github from "./tech-stack/github";
import LinkedIn from "./tech-stack/linkedin";

const Footer = () => {
  return (
    <div className="bg-grey pt-5 pb-4 px-5">
      <div className="d-flex justify-content-between">
        <p className="mb-0">© {new Date().getFullYear()} A. H. M. Zobyer</p>

        <div className="d-flex ">
          <div>
            <a
              href="https://github.com/zobyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github resolution={{ width: 25, height: 25 }} />
            </a>
          </div>
          <div className="ms-3">
            <a
              href="https://www.linkedin.com/in/a-h-m-zobyer-192ab2204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn resolution={{ width: 25, height: 25 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
