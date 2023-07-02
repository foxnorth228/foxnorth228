import React from 'react';
import './about-block.scss';
import InfoBlock from '../info-block/info-block';

const AboutBlock = () => {
  return (
    <InfoBlock title="About me" titleSize="aboutBlock__title" className="aboutBlock">
      <p>
        {
          "Hi! I am Alexander Khitry, 20 yo, a frontend developer (React.js).  \
          I am a fourth-year student in BSUIR, my specialization is connected with computer science. \
          When I was 18 yo I tried myself in creating sites for the first time and was very excited about it. \
          I worked a lot to dig in frontend development and finished some courses. \
          I didn't stop there and continue learning something new. \
          I enjoy creating websites according to all modern quality standards. \
          My typical stack is React, Typescript, Sass, Webpack. \
          In current time I haven't got work experience in this sphere, but I am working on some pet projects to hone my skills"
        }
      </p>
    </InfoBlock>
  );
};

export default AboutBlock;
