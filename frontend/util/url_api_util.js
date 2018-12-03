export const fetchTopUrls = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/urls`
  });
};

export const createUrl = (url) => {
  return $.ajax({
    method: 'POST',
    url: `/api/urls`,
    data: {url}
  });
};
