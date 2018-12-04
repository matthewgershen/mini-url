import * as UrlApiUtil from './../util/url_api_util';

export const RECEIVE_URL = "RECEIVE_URL";
export const RECEIVE_URL_ERRORS = "RECEIVE_URL_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUrl= (url) => {
  return {
    type: RECEIVE_URL,
    url
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_URL_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const createUrl = (url) => dispatch => (
  UrlApiUtil.createUrl(url).then((url) =>
  dispatch(receiveUrl(url)), (err) => {
    return dispatch(receiveErrors(err.responseJSON));
  }
  )
);
