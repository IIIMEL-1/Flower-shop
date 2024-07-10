import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1.7}
    width={1130}
    height={615}
    viewBox="0 0 1130 615"
    backgroundColor="#8eb67c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="450" height="420" />
    <rect x="0" y="440" rx="10" ry="10" width="75" height="75" />
    <rect x="93.75" y="440" rx="10" ry="10" width="75" height="75" />
    <rect x="187.5" y="440" rx="10" ry="10" width="75" height="75" />
    <rect x="281.25" y="440" rx="10" ry="10" width="75" height="75" />
    <rect x="375" y="440" rx="10" ry="10" width="75" height="75" />
    <rect x="500" y="0" rx="7" ry="7" width="430" height="32" />
    <rect x="500" y="45" rx="7" ry="7" width="90" height="27" />
    <rect x="500" y="88" rx="8" ry="8" width="195" height="60" />
    <rect x="717.5" y="88" rx="8" ry="8" width="195" height="60" />
    <rect x="935" y="88" rx="8" ry="8" width="195" height="60" />
    <rect x="500" y="168" rx="10" ry="10" width="630" height="255" />
    <rect x="500" y="440" rx="10" ry="10" width="190" height="70" />
    <rect x="715" y="440" rx="10" ry="10" width="415" height="70" />

    <rect x="390" y="565" rx="5" ry="5" width="350" height="50" />
  </ContentLoader>
);

export default MyLoader;
