import PropTypes from 'prop-types';

export const ICard = {
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  media: PropTypes.shape({
    imageURL: PropTypes.string,
    externalURL: PropTypes.string
  }),
  subtasks: PropTypes.shape({
    meta: PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired  
};