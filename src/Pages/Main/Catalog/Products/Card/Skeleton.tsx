import React from "react";
import ContentLoader from "react-content-loader";

const border = {
  borderWidth: 1,
  borderRadius: 16,
  borderColor: "#6aae55",
  borderStyle: "solid",
};

const Skeleton = (props) => (
  <ContentLoader
    style={border}
    speed={1.9}
    width={263}
    height={421}
    viewBox="0 0 263 421"
    backgroundColor="#6aae55"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="320" rx="3" ry="3" width="80" height="18" />
    <rect x="0" y="0" rx="10" ry="10" width="263" height="240" />
    <rect x="20" y="260" rx="6" ry="6" width="220" height="45" />
    <rect x="127" y="318" rx="3" ry="3" width="112" height="22" />
    <rect x="20" y="365" rx="10" ry="10" width="220" height="37" />
  </ContentLoader>
);

export default Skeleton;
