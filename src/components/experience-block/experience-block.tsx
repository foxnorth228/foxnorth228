import React from 'react';
import './experience-block.scss';
import InfoBlock from '../info-block/info-block';

const ExperienceBlock = () => {
  return (
    <InfoBlock title="Experience" titleSize="experienceBlock__title" className="experienceBlock">
      <p>
        {
          "In current time I haven't got work experience in this sphere, but I am working on some pet \
          projects to hone my skills"
        }
      </p>
      <a
        className="experienceBlock__link"
        href="https://master--moonlit-sprite-20c9ef.netlify.app/"
      >
        My portfolio
      </a>
    </InfoBlock>
  );
};

export default ExperienceBlock;
