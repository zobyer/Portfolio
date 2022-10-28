import logoSize from "../../interfaces/techStackLogo";

type GithubProps = {
  resolution: logoSize;
};

const Github = (props: GithubProps) => {
  return (
    <div>
      <svg
        width={`${props.resolution.width}px`}
        height={`${props.resolution.height}px`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        role="img"
      >
        <path
          fill="currentColor"
          d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z"
        ></path>
      </svg>
    </div>
  );
};

export default Github;
