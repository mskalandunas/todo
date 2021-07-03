import React from 'react';

import { ICard } from './interfaces';

export const Card = props => {
  const { body, heading, media, subtasks } = props;

  return [
    <h2>{heading}</h2>,
    <p>{body}</p>,
    media && [
      <img src={media.imageURL} />,
      <a 
        href={media.externalURL}
        rel="noopener noreferrer"
        target="_blank">
        {media.externalURL}
      </a>
    ],
    subtasks.hasItems &&
      <ul>
        {subtasks.items.map(item => <li>{item}</li>)}
      </ul>
  ];
};

Card.defaultProps = {
  media: null
};

Card.propTypes = ICard;