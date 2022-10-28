import logoSize from "../../interfaces/techStackLogo";

type PythonProps = {
  resolution: logoSize;
};

const Python = (props: PythonProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={`${props.resolution.width}px`}
        height={`${props.resolution.height}px`}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 256 255"
        className="iconify"
        data-icon="logos:python"
        data-inline="false"
        data-width={`${props.resolution.width}px`}
        data-height={`${props.resolution.height}px`}
        style={{ transform: "rotate(360deg)" }}
      >
        <defs>
          <linearGradient
            id="IconifyId-184149a9458-c4913c-24"
            x1="12.959%"
            x2="79.639%"
            y1="12.039%"
            y2="78.201%"
          >
            <stop offset="0%" stopColor="#387EB8"></stop>
            <stop offset="100%" stopColor="#366994"></stop>
          </linearGradient>
          <linearGradient
            id="IconifyId-184149a9458-c4913c-25"
            x1="19.128%"
            x2="90.742%"
            y1="20.579%"
            y2="88.429%"
          >
            <stop offset="0%" stopColor="#FFE052"></stop>
            <stop offset="100%" stopColor="#FFC331"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#IconifyId-184149a9458-c4913c-24)"
          d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z"
        ></path>
        <path
          fill="url(#IconifyId-184149a9458-c4913c-25)"
          d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z"
        ></path>
      </svg>
    </div>
  );
};

export default Python;
