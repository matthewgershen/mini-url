import * as UrlApiUtil from './../util/url_api_util';

export const RECEIVE_TOP_URLS = "RECEIVE_TOP_URLS";


const receiveTopUrls = (top) => {
  return {
    type: RECEIVE_TOP_URLS,
    top
  };
};

export const fetchTopUrls = () => dispatch => (
  UrlApiUtil.fetchTopUrls().then((top) =>
  dispatch(receiveTopUrls(top)))
);
