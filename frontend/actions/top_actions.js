import * as UrlApiUtil from './../util/url_api_util';

export const RECEIVE_TOP = "RECEIVE_TOP";


const receiveTop = (top) => {
  return {
    type: RECEIVE_TOP,
    top
  };
};

export const fetchTop = () => dispatch => (
  UrlApiUtil.fetchTop().then((top) =>
  dispatch(receiveTop(top)))
);
