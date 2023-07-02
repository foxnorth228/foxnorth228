import React from 'react';
import './contacts-block.scss';
import InfoBlock from '../info-block/info-block';

const ContactsBlock = () => {
  const figures = [
    ['./contacts/github.svg', 'Github', 'https://github.com/foxnorth228/'],
    ['./contacts/linkedin.svg', 'Linkedin', 'https://www.linkedin.com/in/alex-khitry-016687265'],
    ['./contacts/telegram.svg', 'Telegram', 'https://t.me/foxnorth228'],
    ['./contacts/whatsapp.svg', 'WhatsApp', 'https://wa.me/375292677541'],
    ['./contacts/skype.svg', 'Skype', 'skype:cid.bd609d3ff0e2494c?userinfo'],
    ['./contacts/link.svg', 'My portfolio', 'https://master--moonlit-sprite-20c9ef.netlify.app/'],
  ];
  return (
    <InfoBlock title="Contacts" titleSize="contactsBlock__title" className="contactsBlock">
      <div className="contactsBlock__elems">
        {figures.map((el, i) => (
          <a key={i} href={el[2]} className="contactsBlock__link">
            <figure className="contactsBlock__elemContent">
              <div
                className="contactsBlock__icon"
                style={{
                  WebkitMaskImage: `url(${el[0]})`,
                  maskImage: `url(${el[0]})`,
                }}
              />
              <figcaption className="contactBlock__textLink">{el[1]}</figcaption>
            </figure>
          </a>
        ))}
      </div>
    </InfoBlock>
  );
};

export default ContactsBlock;
