import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faMedium,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialContainer = props => {
  return (
    <Social>
      {data.map(e => {
        return (
          <a
            key={e.name}
            href={e.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={e.logo} />
            <Heading> {e.name}</Heading>
          </a>
        );
      })}
    </Social>
  );
};

export default SocialContainer;

const data = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/NandoTCodes',
    logo: faTwitter
  },
  {
    name: 'Email',
    url: 'mailto:Nando.Theessen@gmail.com',
    logo: faEnvelope
  },
  {
    name: 'medium',
    url: 'https://medium.com/@nando.theessen',
    logo: faMedium
  },
  {
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/nandotheessen/?locale=en_US',
    logo: faLinkedin
  }
];

const Social = styled('div')`
  a {
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
  display: flex;
  flex-direction: column;
`;

const Heading = styled('span')``;
