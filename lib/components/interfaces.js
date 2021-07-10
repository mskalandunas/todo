import PropTypes from 'prop-types';

const IMedia = PropTypes.shape({
  imageURL: PropTypes.string,
  externalURL: PropTypes.string
});

const ISubtasks = PropTypes.shape({
  hasItems: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}).isRequired;

export const IItem = {
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  media: IMedia,
  subtasks: ISubtasks
};

export const IColumn = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(IItem).isRequired
};