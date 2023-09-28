import React from "react";
import ContentLoader from "react-content-loader";

const border = {
  borderWidth: 1,
  borderRadius: 16,
  borderColor: "#6aae55",
  borderStyle: "solid",
};

const MyLoader = (props) => (
  <ContentLoader
    style={border}
    speed={1.7}
    width={265}
    height={1070}
    viewBox="0 0 265 1070"
    backgroundColor="#8eb67c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="17" rx="10" ry="10" width="233" height="50" />
    <rect x="14" y="101" rx="5" ry="5" width="85" height="20" />
    <rect x="16" y="130" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="161" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="191" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="223" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="315" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="346" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="377" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="408" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="439" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="470" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="501" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="532" rx="6" ry="6" width="165" height="22" />
    <rect x="84" y="566" rx="6" ry="6" width="95" height="20" />
    <rect x="14" y="286" rx="5" ry="5" width="70" height="20" />
    <rect x="16" y="654" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="685" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="716" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="807" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="838" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="869" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="900" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="931" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="962" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="993" rx="6" ry="6" width="165" height="22" />
    <rect x="16" y="1024" rx="6" ry="6" width="165" height="22" />
    <rect x="14" y="778" rx="5" ry="5" width="120" height="20" />
    <rect x="14" y="625" rx="5" ry="5" width="130" height="20" />
    <rect x="0" y="83" rx="0" ry="0" width="265" height="2" />
    <rect x="0" y="268" rx="0" ry="0" width="265" height="2" />
    <rect x="0" y="607" rx="0" ry="0" width="265" height="2" />
    <rect x="0" y="761" rx="0" ry="0" width="265" height="2" />
  </ContentLoader>
);

export default MyLoader;
