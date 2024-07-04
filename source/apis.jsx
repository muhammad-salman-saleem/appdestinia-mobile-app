import axios from 'axios';
import store from './redux/store';

let cancelTokenSource;
let debug = true;

export const API = {
  get,
  post,
  put,
  upload,
  delete: _delete,
  getAxios,
  uploadHandler,
};

async function upload(url, params, callback) {
  try {
    initToken();
    let axiosConfig = {};
    if (callback) {
      axiosConfig = {
        onUploadProgress: progressEvent => {
          let progress = (progressEvent.loaded / progressEvent.total) * 100;
          callback(progress);
        },
      };
    }
    let response = await axios.post(url, params, axiosConfig);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}


async function get(url, params = null) {
    try {
        initToken();
        let response = await axios.get(url, {
            params: params,
        });
        return response;
    } catch (error) {
        return handleError(error);
    }
}

async function post(url, params) {

  let net = store.getState().InternetReducer.net;
  if (net) {
    try {
      initToken(params);
      let response = await axios.post(url, params);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  } else {
    return {
      status: false,
      error: '',
    };
  }
}

async function put(url, params) {
  try {
    initToken();
    let response = await axios.put(url, params);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function _delete(url, params) {
  try {
    initToken();
    let response = await axios.delete(url, params);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function getAxios(url, params = null) {

  if (cancelTokenSource) {
    cancelTokenSource.cancel();
  }

  cancelTokenSource = axios.CancelToken ? axios.CancelToken.source() : null;
  try {
    let response = await axios.get(url, {
      cancelToken: cancelTokenSource.token,
      params: params,
    });

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function uploadHandler(url, params = null) {

  let net = store.getState().InternetReducer.net;
  if (net) {
    let user = store.getState().UserReducer.user;
    let token =
      user && user.access && user.access.token
        ? 'Bearer ' + user.access.token
        : null;
    try {
      initToken();
      const {uri, type} = params.image;
      let image = uri.split('/');
      let imgName = image[image.length - 1];
      const post = new FormData();
      // post.append('path', data.folder);
      post.append('file', {
        uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        type: type,
        name: imgName,
      });
      // const formHeaders = post.getHeaders();
      let response = await fetch(url, {
        method: 'post',
        body: post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  } else {
    return {
      status: false,
      error: '',
    };
  }
}

function initToken() {
  let user = store.getState().UserReducer ? store.getState().UserReducer.user : null;
  let token =
    user && user.access && user.access.token
      ? 'Bearer ' + user.access.token
      : null;
  if (debug) {
    console.log('Token:', token);
  }
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
}

function handleResponse(response) {
  if (debug) {
    console.log('Response:', response.data);
  }

  if (
    response &&
    response.status === 200 &&
    response.data &&
    response.data.status
  ) {
    return response.data;
  } else {
    return handleError({response: response});
  }
}

async function handleError(error) {
  if (debug) {
    console.log('Error:', error);
  }
}
