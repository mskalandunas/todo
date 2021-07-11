import PropTypes from 'prop-types';

const IMedia = PropTypes.shape({
  imageURL: PropTypes.string,
  externalURL: PropTypes.string
});

const ISubtasks = PropTypes.shape({
  hasItems: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}).isRequired;

export const IButton = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([])
};

export const IItem = {
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  media: IMedia,
  subtasks: ISubtasks
};

export const IColumn = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(IItem)).isRequired
};
