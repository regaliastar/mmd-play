import React, { useEffect } from "react";
import naxida from "./naxida";
import styled from "styled-components";

export default function App() {
  useEffect(() => {
    new naxida().render();
  }, []);
  return <Page id="three" />;
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  user-select: none;
`;
