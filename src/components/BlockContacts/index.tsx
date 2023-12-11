import React, { useMemo } from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';
import config from './config';

const ContactsBlock = () => {
  const langType = useLanguage();
  const contactLinks = useMemo(
    () => [
      ...config.links,
      {
        pathIcon: './contacts/link.svg',
        label: lang[langType].portfolio,
        link: 'https://master--moonlit-sprite-20c9ef.netlify.app/',
      },
    ],
    [langType]
  );
  return (
    <ContainerInfo title={lang[langType].contacts}>
      <div className="blockContacts__elems">
        {contactLinks.map((el, i) => (
          <a key={i} href={el.link} className="blockContacts__link">
            <figure className="blockContacts__elemContent">
              <div
                className="blockContacts__icon"
                style={{
                  WebkitMaskImage: `url(${el.pathIcon})`,
                  maskImage: `url(${el.pathIcon})`,
                }}
              />
              <figcaption className="contactBlock__textLink">{el.label}</figcaption>
            </figure>
          </a>
        ))}
      </div>
    </ContainerInfo>
  );
};

export default ContactsBlock;
