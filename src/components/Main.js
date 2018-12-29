import React from 'react';
import styled from '@emotion/styled';
const face = require('../pics/download.png');

export default function main(props) {
  return (
    <MainContainer>
      <Image
        // eslint-disable-next-line
        src={face}
        alt="Nando Theeßen"
      />
      <div>
        <h2>Nando Theeßen</h2>
        <h6>Software Engineer</h6>
        <p></p>
        <p>=> software engineer from Germany</p>
      </div>
    </MainContainer>
  );
}

const Image = styled('img')`
  border-radius: 100%;
  width: 200px;
  height: 200px;
  border: 1px solid grey;
`;

const MainContainer = styled('div')`
  margin: auto;
  color: white;
  display: flex;
  width: 80vw;
  justify-content: space-around;
  h2 {
    font-size: 24px;
  }
  h6 {
    font-size: 20px;
  }
  p {
    margin-top: 5px;
    font-size: 18px;
  }
`;
