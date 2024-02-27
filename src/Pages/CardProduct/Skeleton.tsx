import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1.7}
    width={1110}
    height={670}
    viewBox="0 0 1110 670"
    backgroundColor="#8eb67c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="90" rx="10" ry="10" width="450" height="420" />
    <rect x="0" y="35" rx="4" ry="4" width="188" height="19" />
    <rect x="485" y="90" rx="7" ry="7" width="430" height="32" />
    <rect x="485" y="135" rx="7" ry="7" width="90" height="27" />
    <rect x="485" y="178" rx="8" ry="8" width="195" height="60" />
    <rect x="700" y="178" rx="8" ry="8" width="195" height="60" />
    <rect x="915" y="178" rx="8" ry="8" width="195" height="60" />
    <rect x="485" y="258" rx="10" ry="10" width="630" height="255" />
    <rect x="485" y="530" rx="10" ry="10" width="190" height="70" />
    <rect x="695" y="530" rx="10" ry="10" width="415" height="70" />
  </ContentLoader>
);

export default MyLoader;
