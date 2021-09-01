let axios = require("axios");

const instance = axios.create({
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "X-Bce-Signature": "AppCode/440fb472a9d44ec29c8998f1237d0a67",
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log(`+++++ axios: ${config.method} ${config.url} start`)
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  () => {
    console.log(`+++++ axios: ${config.method} ${config.url} success`)
    return Promise.resolve(res.data);
  },
  (error) => {
    console.log(`+++++ axios: ${error.config.method} ${error.config.url} failed`)
    return Promise.reject(error.message);
  }
);



// 通用get请求
function $get(url, params = {}) {
  return instance.request({
    url,
    method: "GET",
    params,
  });
}
// post 请求。 application/json
function $post(url, data = {}) {
  return instance.request({
    url,
    method: "POST",
    data,
  });
}

function $test() {

}

module.exports = {
  $get,
  $post,
  $test
}