import { noop } from './functional';

const handleResponse = (fail, success) => response => {
  if (!response.ok || response.status >= 400) {
    return fail(response);
  }

  if (response.status === 204) {
    return success(response);
  }

  return response.json();
};

export const fetchData = ({
  fail = noop,
  options = {},
  success = noop,
  url
}) => {
  return fetch(url, options)
    .then(handleResponse(fail, success), fail)
    .then(success)
    .catch(fail);
};
