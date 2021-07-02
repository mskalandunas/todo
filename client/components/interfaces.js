import PropTypes from 'prop-types';

export const ICard = {
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  media: IMedia,
  subtasks: ISubtasks
};

const IMedia = PropTypes.shape({
  imageURL: PropTypes.string,
  externalURL: PropTypes.string
});

const ISubtasks = PropTypes.shape({
  meta: PropTypes.shape({
    count: PropTypes.number.isRequired
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}).isRequired;