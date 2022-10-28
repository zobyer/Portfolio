import logoSize from "../../interfaces/techStackLogo";

type FastApiProps = {
  resolution: logoSize;
};

const FastApi = (props: FastApiProps) => {
  return (
    <div>
      <svg
        fill="none"
        width={`${props.resolution.width}px`}
        height={`${props.resolution.height}px`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 154 154"
      >
        <circle cx="77" cy="77" fill="#05998b" r="77" />
        <path
          d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default FastApi;
