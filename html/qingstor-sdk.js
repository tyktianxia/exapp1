(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["qingstor_sdk"] = factory();
	else
		root["qingstor_sdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./src/version */ "./src/version.js"), __webpack_require__(/*! ./src/qingstor/qingstor */ "./src/qingstor/qingstor.js"), __webpack_require__(/*! ./src/config */ "./src/config/index.js"), __webpack_require__(/*! ./src/request */ "./src/request.js"), __webpack_require__(/*! ./src/sign */ "./src/sign.js"), __webpack_require__(/*! ./src/client/all */ "./src/client/all.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _version2, _qingstor, _config, _request, _sign, _all) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.Client = _exports.Signer = _exports.Request = _exports.Config = _exports.QingStor = _exports.version = void 0;
  _version2 = _interopRequireDefault(_version2);
  _qingstor = _interopRequireDefault(_qingstor);
  _config = _interopRequireDefault(_config);
  _request = _interopRequireDefault(_request);
  _sign = _interopRequireDefault(_sign);
  _all = _interopRequireDefault(_all);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  const version = _version2.default;
  _exports.version = version;
  const QingStor = _qingstor.default;
  _exports.QingStor = QingStor;
  const Config = _config.default;
  _exports.Config = Config;
  const Request = _request.default;
  _exports.Request = Request;
  const Signer = _sign.default;
  _exports.Signer = Signer;
  const Client = _all.default;
  _exports.Client = Client;
  var _default = {
    version: _version2.default,
    QingStor: _qingstor.default,
    Config: _config.default,
    Request: _request.default,
    Signer: _sign.default,
    Client: _all.default
  };
  _exports.default = _default;
});

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get'; // Hook up interceptors middleware

  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Support baseURL config

  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  } // Ensure headers exist


  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter; // Only Node.JS has a process variable that is of [[Class]] process

  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory();
  } else {}
})(this, function () {
  /**
   * CryptoJS core components.
   */
  var CryptoJS = CryptoJS || function (Math, undefined) {
    /*
     * Local polyfil of Object.create
     */
    var create = Object.create || function () {
      function F() {}

      ;
      return function (obj) {
        var subtype;
        F.prototype = obj;
        subtype = new F();
        F.prototype = null;
        return subtype;
      };
    }();
    /**
     * CryptoJS namespace.
     */


    var C = {};
    /**
     * Library namespace.
     */

    var C_lib = C.lib = {};
    /**
     * Base object for prototypal inheritance.
     */

    var Base = C_lib.Base = function () {
      return {
        /**
         * Creates a new object that inherits from this object.
         *
         * @param {Object} overrides Properties to copy into the new object.
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         field: 'value',
         *
         *         method: function () {
         *         }
         *     });
         */
        extend: function (overrides) {
          // Spawn
          var subtype = create(this); // Augment

          if (overrides) {
            subtype.mixIn(overrides);
          } // Create default initializer


          if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          } // Initializer's prototype is the subtype object


          subtype.init.prototype = subtype; // Reference supertype

          subtype.$super = this;
          return subtype;
        },

        /**
         * Extends this object and runs the init method.
         * Arguments to create() will be passed to init().
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var instance = MyType.create();
         */
        create: function () {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        },

        /**
         * Initializes a newly created object.
         * Override this method to add some logic when your objects are created.
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         init: function () {
         *             // ...
         *         }
         *     });
         */
        init: function () {},

        /**
         * Copies properties into this object.
         *
         * @param {Object} properties The properties to mix in.
         *
         * @example
         *
         *     MyType.mixIn({
         *         field: 'value'
         *     });
         */
        mixIn: function (properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          } // IE won't copy toString using the loop above


          if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
          }
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = instance.clone();
         */
        clone: function () {
          return this.init.prototype.extend(this);
        }
      };
    }();
    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */


    var WordArray = C_lib.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of 32-bit words.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.create();
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
       */
      init: function (words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },

      /**
       * Converts this word array to a string.
       *
       * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
       *
       * @return {string} The stringified word array.
       *
       * @example
       *
       *     var string = wordArray + '';
       *     var string = wordArray.toString();
       *     var string = wordArray.toString(CryptoJS.enc.Utf8);
       */
      toString: function (encoder) {
        return (encoder || Hex).stringify(this);
      },

      /**
       * Concatenates a word array to this word array.
       *
       * @param {WordArray} wordArray The word array to append.
       *
       * @return {WordArray} This word array.
       *
       * @example
       *
       *     wordArray1.concat(wordArray2);
       */
      concat: function (wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

        this.clamp(); // Concat

        if (thisSigBytes % 4) {
          // Copy one byte at a time
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          // Copy one word at a time
          for (var i = 0; i < thatSigBytes; i += 4) {
            thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
          }
        }

        this.sigBytes += thatSigBytes; // Chainable

        return this;
      },

      /**
       * Removes insignificant bits.
       *
       * @example
       *
       *     wordArray.clamp();
       */
      clamp: function () {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes; // Clamp

        words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      },

      /**
       * Creates a copy of this word array.
       *
       * @return {WordArray} The clone.
       *
       * @example
       *
       *     var clone = wordArray.clone();
       */
      clone: function () {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      },

      /**
       * Creates a word array filled with random bytes.
       *
       * @param {number} nBytes The number of random bytes to generate.
       *
       * @return {WordArray} The random word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.random(16);
       */
      random: function (nBytes) {
        var words = [];

        var r = function (m_w) {
          var m_w = m_w;
          var m_z = 0x3ade68b1;
          var mask = 0xffffffff;
          return function () {
            m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
            m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
            var result = (m_z << 0x10) + m_w & mask;
            result /= 0x100000000;
            result += 0.5;
            return result * (Math.random() > .5 ? 1 : -1);
          };
        };

        for (var i = 0, rcache; i < nBytes; i += 4) {
          var _r = r((rcache || Math.random()) * 0x100000000);

          rcache = _r() * 0x3ade67b7;
          words.push(_r() * 0x100000000 | 0);
        }

        return new WordArray.init(words, nBytes);
      }
    });
    /**
     * Encoder namespace.
     */

    var C_enc = C.enc = {};
    /**
     * Hex encoding strategy.
     */

    var Hex = C_enc.Hex = {
      /**
       * Converts a word array to a hex string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The hex string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var hexChars = [];

        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }

        return hexChars.join('');
      },

      /**
       * Converts a hex string to a word array.
       *
       * @param {string} hexStr The hex string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
       */
      parse: function (hexStr) {
        // Shortcut
        var hexStrLength = hexStr.length; // Convert

        var words = [];

        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }

        return new WordArray.init(words, hexStrLength / 2);
      }
    };
    /**
     * Latin1 encoding strategy.
     */

    var Latin1 = C_enc.Latin1 = {
      /**
       * Converts a word array to a Latin1 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Latin1 string.
       *
       * @static
       *
       * @example
       *
       *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var latin1Chars = [];

        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }

        return latin1Chars.join('');
      },

      /**
       * Converts a Latin1 string to a word array.
       *
       * @param {string} latin1Str The Latin1 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
       */
      parse: function (latin1Str) {
        // Shortcut
        var latin1StrLength = latin1Str.length; // Convert

        var words = [];

        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
        }

        return new WordArray.init(words, latin1StrLength);
      }
    };
    /**
     * UTF-8 encoding strategy.
     */

    var Utf8 = C_enc.Utf8 = {
      /**
       * Converts a word array to a UTF-8 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-8 string.
       *
       * @static
       *
       * @example
       *
       *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
       */
      stringify: function (wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error('Malformed UTF-8 data');
        }
      },

      /**
       * Converts a UTF-8 string to a word array.
       *
       * @param {string} utf8Str The UTF-8 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
       */
      parse: function (utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      }
    };
    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */

    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
      /**
       * Resets this block algorithm's data buffer to its initial state.
       *
       * @example
       *
       *     bufferedBlockAlgorithm.reset();
       */
      reset: function () {
        // Initial values
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },

      /**
       * Adds new data to this block algorithm's buffer.
       *
       * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
       *
       * @example
       *
       *     bufferedBlockAlgorithm._append('data');
       *     bufferedBlockAlgorithm._append(wordArray);
       */
      _append: function (data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data == 'string') {
          data = Utf8.parse(data);
        } // Append


        this._data.concat(data);

        this._nDataBytes += data.sigBytes;
      },

      /**
       * Processes available data blocks.
       *
       * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
       *
       * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
       *
       * @return {WordArray} The processed data.
       *
       * @example
       *
       *     var processedData = bufferedBlockAlgorithm._process();
       *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
       */
      _process: function (doFlush) {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4; // Count blocks ready

        var nBlocksReady = dataSigBytes / blockSizeBytes;

        if (doFlush) {
          // Round up to include partial blocks
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          // Round down to include only full blocks,
          // less the number of blocks that must remain in the buffer
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        } // Count words ready


        var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            // Perform concrete-algorithm logic
            this._doProcessBlock(dataWords, offset);
          } // Remove processed words


          var processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        } // Return processed words


        return new WordArray.init(processedWords, nBytesReady);
      },

      /**
       * Creates a copy of this object.
       *
       * @return {Object} The clone.
       *
       * @example
       *
       *     var clone = bufferedBlockAlgorithm.clone();
       */
      clone: function () {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      },
      _minBufferSize: 0
    });
    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */

    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       */
      cfg: Base.extend(),

      /**
       * Initializes a newly created hasher.
       *
       * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
       *
       * @example
       *
       *     var hasher = CryptoJS.algo.SHA256.create();
       */
      init: function (cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg); // Set initial values

        this.reset();
      },

      /**
       * Resets this hasher to its initial state.
       *
       * @example
       *
       *     hasher.reset();
       */
      reset: function () {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

        this._doReset();
      },

      /**
       * Updates this hasher with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {Hasher} This hasher.
       *
       * @example
       *
       *     hasher.update('message');
       *     hasher.update(wordArray);
       */
      update: function (messageUpdate) {
        // Append
        this._append(messageUpdate); // Update the hash


        this._process(); // Chainable


        return this;
      },

      /**
       * Finalizes the hash computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The hash.
       *
       * @example
       *
       *     var hash = hasher.finalize();
       *     var hash = hasher.finalize('message');
       *     var hash = hasher.finalize(wordArray);
       */
      finalize: function (messageUpdate) {
        // Final message update
        if (messageUpdate) {
          this._append(messageUpdate);
        } // Perform concrete-hasher logic


        var hash = this._doFinalize();

        return hash;
      },
      blockSize: 512 / 32,

      /**
       * Creates a shortcut function to a hasher's object interface.
       *
       * @param {Hasher} hasher The hasher to create a helper for.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
       */
      _createHelper: function (hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },

      /**
       * Creates a shortcut function to the HMAC's object interface.
       *
       * @param {Hasher} hasher The hasher to use in this HMAC helper.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
       */
      _createHmacHelper: function (hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      }
    });
    /**
     * Algorithm namespace.
     */

    var C_algo = C.algo = {};
    return C;
  }(Math);

  return CryptoJS;
});

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;
    /**
     * Base64 encoding strategy.
     */

    var Base64 = C_enc.Base64 = {
      /**
       * Converts a word array to a Base64 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Base64 string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map; // Clamp excess bits

        wordArray.clamp(); // Convert

        var base64Chars = [];

        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;

          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        } // Add padding


        var paddingChar = map.charAt(64);

        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }

        return base64Chars.join('');
      },

      /**
       * Converts a Base64 string to a word array.
       *
       * @param {string} base64Str The Base64 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
       */
      parse: function (base64Str) {
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;

        if (!reverseMap) {
          reverseMap = this._reverseMap = [];

          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        } // Ignore padding


        var paddingChar = map.charAt(64);

        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);

          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        } // Convert


        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };

    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;

      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }

      return WordArray.create(words, nBytes);
    }
  })();

  return CryptoJS.enc.Base64;
});

/***/ }),

/***/ "./node_modules/crypto-js/hmac-sha256.js":
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/hmac-sha256.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));
  } else {}
})(this, function (CryptoJS) {
  return CryptoJS.HmacSHA256;
});

/***/ }),

/***/ "./node_modules/crypto-js/hmac.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;
    /**
     * HMAC algorithm.
     */

    var HMAC = C_algo.HMAC = Base.extend({
      /**
       * Initializes a newly created HMAC.
       *
       * @param {Hasher} hasher The hash algorithm to use.
       * @param {WordArray|string} key The secret key.
       *
       * @example
       *
       *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
       */
      init: function (hasher, key) {
        // Init hasher
        hasher = this._hasher = new hasher.init(); // Convert string to WordArray, else assume WordArray already

        if (typeof key == 'string') {
          key = Utf8.parse(key);
        } // Shortcuts


        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        } // Clamp excess bits


        key.clamp(); // Clone key for inner and outer pads

        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone(); // Shortcuts

        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words; // XOR keys with pad constants

        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 0x5c5c5c5c;
          iKeyWords[i] ^= 0x36363636;
        }

        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

        this.reset();
      },

      /**
       * Resets this HMAC to its initial state.
       *
       * @example
       *
       *     hmacHasher.reset();
       */
      reset: function () {
        // Shortcut
        var hasher = this._hasher; // Reset

        hasher.reset();
        hasher.update(this._iKey);
      },

      /**
       * Updates this HMAC with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {HMAC} This HMAC instance.
       *
       * @example
       *
       *     hmacHasher.update('message');
       *     hmacHasher.update(wordArray);
       */
      update: function (messageUpdate) {
        this._hasher.update(messageUpdate); // Chainable


        return this;
      },

      /**
       * Finalizes the HMAC computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The HMAC.
       *
       * @example
       *
       *     var hmac = hmacHasher.finalize();
       *     var hmac = hmacHasher.finalize('message');
       *     var hmac = hmacHasher.finalize(wordArray);
       */
      finalize: function (messageUpdate) {
        // Shortcut
        var hasher = this._hasher; // Compute HMAC

        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
        return hmac;
      }
    });
  })();
});

/***/ }),

/***/ "./node_modules/crypto-js/md5.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
  } else {}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Constants table

    var T = []; // Compute constants

    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
      }
    })();
    /**
     * MD5 hash algorithm.
     */


    var MD5 = C_algo.MD5 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
      },
      _doProcessBlock: function (M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        } // Shortcuts


        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15]; // Working varialbes

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3]; // Computation

        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]); // Intermediate hash value

        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

        this._process(); // Shortcuts


        var hash = this._hash;
        var H = hash.words; // Swap endian

        for (var i = 0; i < 4; i++) {
          // Shortcut
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        } // Return final computed hash


        return hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    function FF(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function GG(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */


    C.MD5 = Hasher._createHelper(MD5);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */

    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);

  return CryptoJS.MD5;
});

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;

(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
  } else {}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Initialization and round constants tables

    var H = [];
    var K = []; // Compute constants

    (function () {
      function isPrime(n) {
        var sqrtN = Math.sqrt(n);

        for (var factor = 2; factor <= sqrtN; factor++) {
          if (!(n % factor)) {
            return false;
          }
        }

        return true;
      }

      function getFractionalBits(n) {
        return (n - (n | 0)) * 0x100000000 | 0;
      }

      var n = 2;
      var nPrime = 0;

      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
          }

          K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
          nPrime++;
        }

        n++;
      }
    })(); // Reusable object


    var W = [];
    /**
     * SHA-256 hash algorithm.
     */

    var SHA256 = C_algo.SHA256 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init(H.slice(0));
      },
      _doProcessBlock: function (M, offset) {
        // Shortcut
        var H = this._hash.words; // Working variables

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7]; // Computation

        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }

          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;
          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        } // Intermediate hash value


        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4; // Hash final blocks

        this._process(); // Return final computed hash


        return this._hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */

    C.SHA256 = Hasher._createHelper(SHA256);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */

    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  })(Math);

  return CryptoJS.SHA256;
});

/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  "use strict"; // Slightly dubious tricks to cut down minimized file size

  var noop = function () {};

  var undefinedType = "undefined";
  var logMethods = ["trace", "debug", "info", "warn", "error"]; // Cross-browser bind equivalent that works at least back to IE6

  function bindMethod(obj, methodName) {
    var method = obj[methodName];

    if (typeof method.bind === 'function') {
      return method.bind(obj);
    } else {
      try {
        return Function.prototype.bind.call(method, obj);
      } catch (e) {
        // Missing bind shim or IE8 + Modernizr, fallback to wrapping
        return function () {
          return Function.prototype.apply.apply(method, [obj, arguments]);
        };
      }
    }
  } // Build the best logging method possible for this env
  // Wherever possible we want to bind, not wrap, to preserve stack traces


  function realMethod(methodName) {
    if (methodName === 'debug') {
      methodName = 'log';
    }

    if (typeof console === undefinedType) {
      return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
    } else if (console[methodName] !== undefined) {
      return bindMethod(console, methodName);
    } else if (console.log !== undefined) {
      return bindMethod(console, 'log');
    } else {
      return noop;
    }
  } // These private functions always need `this` to be set properly


  function replaceLoggingMethods(level, loggerName) {
    /*jshint validthis:true */
    for (var i = 0; i < logMethods.length; i++) {
      var methodName = logMethods[i];
      this[methodName] = i < level ? noop : this.methodFactory(methodName, level, loggerName);
    } // Define log.log as an alias for log.debug


    this.log = this.debug;
  } // In old IE versions, the console isn't present until you first open it.
  // We build realMethod() replacements here that regenerate logging methods


  function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
    return function () {
      if (typeof console !== undefinedType) {
        replaceLoggingMethods.call(this, level, loggerName);
        this[methodName].apply(this, arguments);
      }
    };
  } // By default, we use closely bound real methods wherever possible, and
  // otherwise we wait for a console to appear, and then try again.


  function defaultMethodFactory(methodName, level, loggerName) {
    /*jshint validthis:true */
    return realMethod(methodName) || enableLoggingWhenConsoleArrives.apply(this, arguments);
  }

  function Logger(name, defaultLevel, factory) {
    var self = this;
    var currentLevel;
    var storageKey = "loglevel";

    if (name) {
      storageKey += ":" + name;
    }

    function persistLevelIfPossible(levelNum) {
      var levelName = (logMethods[levelNum] || 'silent').toUpperCase();
      if (typeof window === undefinedType) return; // Use localStorage if available

      try {
        window.localStorage[storageKey] = levelName;
        return;
      } catch (ignore) {} // Use session cookie as fallback


      try {
        window.document.cookie = encodeURIComponent(storageKey) + "=" + levelName + ";";
      } catch (ignore) {}
    }

    function getPersistedLevel() {
      var storedLevel;
      if (typeof window === undefinedType) return;

      try {
        storedLevel = window.localStorage[storageKey];
      } catch (ignore) {} // Fallback to cookies if local storage gives us nothing


      if (typeof storedLevel === undefinedType) {
        try {
          var cookie = window.document.cookie;
          var location = cookie.indexOf(encodeURIComponent(storageKey) + "=");

          if (location !== -1) {
            storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
          }
        } catch (ignore) {}
      } // If the stored level is not valid, treat it as if nothing was stored.


      if (self.levels[storedLevel] === undefined) {
        storedLevel = undefined;
      }

      return storedLevel;
    }
    /*
     *
     * Public logger API - see https://github.com/pimterry/loglevel for details
     *
     */


    self.name = name;
    self.levels = {
      "TRACE": 0,
      "DEBUG": 1,
      "INFO": 2,
      "WARN": 3,
      "ERROR": 4,
      "SILENT": 5
    };
    self.methodFactory = factory || defaultMethodFactory;

    self.getLevel = function () {
      return currentLevel;
    };

    self.setLevel = function (level, persist) {
      if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
        level = self.levels[level.toUpperCase()];
      }

      if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
        currentLevel = level;

        if (persist !== false) {
          // defaults to true
          persistLevelIfPossible(level);
        }

        replaceLoggingMethods.call(self, level, name);

        if (typeof console === undefinedType && level < self.levels.SILENT) {
          return "No console available for logging";
        }
      } else {
        throw "log.setLevel() called with invalid level: " + level;
      }
    };

    self.setDefaultLevel = function (level) {
      if (!getPersistedLevel()) {
        self.setLevel(level, false);
      }
    };

    self.enableAll = function (persist) {
      self.setLevel(self.levels.TRACE, persist);
    };

    self.disableAll = function (persist) {
      self.setLevel(self.levels.SILENT, persist);
    }; // Initialize with the right level


    var initialLevel = getPersistedLevel();

    if (initialLevel == null) {
      initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
    }

    self.setLevel(initialLevel, false);
  }
  /*
   *
   * Top-level API
   *
   */


  var defaultLogger = new Logger();
  var _loggersByName = {};

  defaultLogger.getLogger = function getLogger(name) {
    if (typeof name !== "string" || name === "") {
      throw new TypeError("You must supply a name when creating a logger.");
    }

    var logger = _loggersByName[name];

    if (!logger) {
      logger = _loggersByName[name] = new Logger(name, defaultLogger.getLevel(), defaultLogger.methodFactory);
    }

    return logger;
  }; // Grab the current global log variable in case of overwrite


  var _log = typeof window !== undefinedType ? window.log : undefined;

  defaultLogger.noConflict = function () {
    if (typeof window !== undefinedType && window.log === defaultLogger) {
      window.log = _log;
    }

    return defaultLogger;
  };

  defaultLogger.getLoggers = function getLoggers() {
    return _loggersByName;
  };

  return defaultLogger;
});

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/process.js":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  setTimeout(function () {
    fn.apply(null, args);
  }, 0);
};

exports.platform = exports.arch = exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
  throw new Error('No such module. (Possibly not yet loaded)');
};

(function () {
  var cwd = '/';
  var path;

  exports.cwd = function () {
    return cwd;
  };

  exports.chdir = function (dir) {
    if (!path) path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
    cwd = path.resolve(dir, cwd);
  };
})();

exports.exit = exports.kill = exports.umask = exports.dlopen = exports.uptime = exports.memoryUsage = exports.uvCounters = function () {};

exports.features = {};

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var stringifyPrimitive = function (v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./src/build.js":
/*!**********************!*\
  !*** ./src/build.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./version */ "./src/version.js"), __webpack_require__(/*! util */ "./node_modules/util/util.js"), __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js"), __webpack_require__(/*! crypto-js/md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! crypto-js/enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./utils */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _version, _util, _loglevel, _md, _encBase, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _version = _interopRequireDefault(_version);
  _util = _interopRequireDefault(_util);
  _loglevel = _interopRequireDefault(_loglevel);
  _md = _interopRequireDefault(_md);
  _encBase = _interopRequireDefault(_encBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  const METHODS_SHOULD_NOT_INCLUDE_BODY = ['GET', 'HEAD'];

  class Builder {
    constructor(config, operation) {
      this.config = config;
      this.operation = operation;
    }

    parse() {
      const parsedOperation = this.parseRequestURI(this.operation);
      parsedOperation.method = this.operation.method;
      parsedOperation.params = this.parseRequestParams(this.operation);
      parsedOperation.headers = this.parseRequestHeaders(this.operation);
      parsedOperation.body = this.parseRequestBody(this.operation);

      _loglevel.default.debug("QingStor request uri: ".concat(parsedOperation.uri));

      return parsedOperation;
    }

    parseRequestParams(operation) {
      const parsedParams = {};

      for (const i of Object.keys(operation.params)) {
        if (operation.params[i] !== undefined && operation.params[i].toString() !== '') {
          parsedParams[i] = operation.params[i].toString();
        }
      }

      return parsedParams;
    }

    parseRequestHeaders(operation) {
      const parsedHeaders = {};

      for (const i of Object.keys(operation.headers)) {
        if (operation.headers[i] !== undefined && operation.headers[i].toString() !== '') {
          parsedHeaders[i] = encodeURI(operation.headers[i]);
        }
      } // always use x-qs-date instead of date for compatibility


      parsedHeaders['x-qs-date'] = operation.headers['x-qs-date'] || new Date().toUTCString();

      if (!METHODS_SHOULD_NOT_INCLUDE_BODY.includes(operation.method)) {
        // Add Content-Type header
        if (operation.headers['content-type']) {
          parsedHeaders['content-type'] = operation.headers['content-type'];
        } else if (operation.body && operation.body.type) {
          // get content-type from body
          parsedHeaders['content-type'] = operation.body.type;
        } else if (Object.keys(operation.elements).length) {
          parsedHeaders['content-type'] = 'application/json';
        } else {
          parsedHeaders['content-type'] = 'application/octet-stream';
        }
      } // Add user-agent header


      parsedHeaders['user-agent'] = _util.default.format('qingstor-sdk-js/%s (Node.js %s; %s %s)', _version.default, process.version, process.platform, process.arch);

      if (this.config.additional_user_agent) {
        parsedHeaders['user-agent'] += _util.default.format(' %s', this.config.additional_user_agent);
      } // Add helper for DeleteMultipleObjects


      if (operation.api === 'DeleteMultipleObjects') {
        parsedHeaders['content-md5'] = _encBase.default.stringify((0, _md.default)(this.parseRequestBody(operation)));
      }

      return (0, _utils.filterUnsafeHeaders)(parsedHeaders);
    }

    parseRequestBody(operation) {
      let parsedBody = undefined;

      if (operation.body !== undefined) {
        parsedBody = operation.body;
      } else if (Object.keys(operation.elements).length !== 0) {
        parsedBody = JSON.stringify(operation.elements);
      }

      return parsedBody;
    }

    parseRequestProperties(operation) {
      const parsedProperties = {};

      for (const i of Object.keys(operation.properties)) {
        if (operation.properties[i] !== undefined && operation.properties[i].toString() !== '') {
          parsedProperties[i] = (0, _utils.fixedEncodeURIComponent)(operation.properties[i]);
        }
      }

      return parsedProperties;
    }

    parseRequestURI(operation) {
      let path = operation.uri;
      let endpoint = '';
      const parsedProperties = this.parseRequestProperties(operation);

      if (parsedProperties['zone']) {
        endpoint = "".concat(this.config.protocol, "://").concat(parsedProperties.zone, ".").concat(this.config.host, ":").concat(this.config.port);
      } else {
        endpoint = "".concat(this.config.protocol, "://").concat(this.config.host, ":").concat(this.config.port);
      }

      for (const key of Object.keys(parsedProperties)) {
        path = path.replace("<".concat(key, ">"), parsedProperties[key]);
      }

      const parsedParams = this.parseRequestParams(operation);
      const parsedUri = (0, _utils.buildUri)(endpoint, path, parsedParams);
      return {
        endpoint,
        path,
        uri: parsedUri
      };
    }

  }

  var _default = Builder;
  _exports.default = _default;
  module.exports = exports["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./src/client/all.js":
/*!***************************!*\
  !*** ./src/client/all.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./image */ "./src/client/image.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _image) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _image = _interopRequireDefault(_image);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  var _default = {
    Image: _image.default
  };
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/client/image.js":
/*!*****************************!*\
  !*** ./src/client/image.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  class Image {
    constructor(object_key, bucket) {
      this.object_key = object_key;
      this.bucket = bucket;
      this.input = null;
    }

    info() {
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "info")
      };
      return this;
    }

    crop(data) {
      const {
        width = 0,
        height = 0,
        gravity = 0
      } = data;
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "crop:w_").concat(width, ",h_").concat(height, ",g_").concat(gravity)
      };
      return this;
    }

    rotate(data) {
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "rotate:a_").concat(data.angle)
      };
      return this;
    }

    resize(data) {
      const {
        width = 0,
        height = 0,
        mode = 0
      } = data;
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "resize:w_").concat(width, ",h_").concat(height, ",m_").concat(mode)
      };
      return this;
    }

    waterMark(data) {
      const {
        dpi = 150,
        opacity = 0.25,
        color = ''
      } = data;
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "watermark:d_").concat(dpi, ",p_").concat(opacity, ",t_").concat(data.text, ",c_").concat(color)
      };
      return this;
    }

    waterMarkImage(data) {
      const {
        left = 0,
        top = 0,
        opacity = 0.25
      } = data;
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "watermark_image:l_").concat(left, ",t_").concat(top, ",p_").concat(opacity, ",u_").concat(data.url)
      };
      return this;
    }

    format(data) {
      const prefix = this.getPrefix();
      this.input = {
        action: "".concat(prefix, "format:t_").concat(data.type)
      };
      return this;
    }

    getPrefix() {
      if (this.input == null) {
        return '';
      }

      return "".concat(this.input.action, "|");
    }

    imageProcess(callback) {
      this.bucket.imageProcess(this.object_key, this.input, callback);
    }

  }

  var _default = Image;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/config/browser.js":
/*!*******************************!*\
  !*** ./src/config/browser.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js"), __webpack_require__(/*! ./common */ "./src/config/common.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _loglevel, _common) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _loglevel = _interopRequireDefault(_loglevel);
  _common = _interopRequireDefault(_common);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  const USE_AK_SK_WARN = ['It is highly recommended NOT to use access_key_id and secret_access_key ', 'on client scripts. Please deploy a signature server and get authorization from it, ', 'visit https://github.com/yunify/qingstor-sdk-js'].join('');
  const DEFAULT_CONFIG = {
    host: 'qingstor.com',
    port: 443,
    protocol: 'https',
    connection_retries: 3,
    // Valid levels are "debug", "info", "warn", "error", and "fatal"
    log_level: 'warn'
  };

  class Config {
    constructor(options) {
      Object.assign(this, (0, _common.default)(this));
      this.loadDefaultConfig();
      this.loadConfig(options);

      if (!this.signature_server) {
        _loglevel.default.warn(USE_AK_SK_WARN);
      }
    }

    loadDefaultConfig() {
      this.loadConfig(DEFAULT_CONFIG);
    }

  }

  var _default = Config;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/config/common.js":
/*!******************************!*\
  !*** ./src/config/common.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _loglevel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = common;
  _loglevel = _interopRequireDefault(_loglevel);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function common(self) {
    return {
      checkConfig: () => {
        if (self.additional_user_agent) {
          self.additional_user_agent.split('').forEach(char => {
            // Allow space(32) to ~(126) in ASCII Table, exclude "(34).
            if (char <= ' ' || char >= '~' || char === '"') {
              throw new RangeError("additional_user_agent has not allowed value ".concat(char, "."));
            }
          });
        }
      },
      loadConfig: data => {
        Object.assign(self, data);

        _loglevel.default.setLevel(self.log_level);

        self.checkConfig();
        return self;
      }
    };
  }

  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function getDefaultConfig() {
    let adapter;

    if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = __webpack_require__(/*! ./node */ "./src/config/browser.js");
    } else {
      // For browsers use XHR adapter
      adapter = __webpack_require__(/*! ./browser */ "./src/config/browser.js");
    }

    return adapter;
  }

  module.exports = getDefaultConfig();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  class ParameterRequiredError extends Error {
    constructor(parameter_name, parent_name) {
      const msg = "".concat(parameter_name, " is required in ").concat(parent_name, ".");
      super(msg);
    }

  }

  class ParameterValueNotAllowedError extends Error {
    constructor(parameter_name, parameter_value, allowed_values) {
      const msg = "".concat(parameter_name, " value ").concat(parameter_value, " is not allowed, should be one of ").concat(allowed_values.join(', '));
      super(msg);
    }

  }

  var _default = {
    ParameterRequired: ParameterRequiredError,
    ParameterValueNotAllowed: ParameterValueNotAllowedError
  };
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/http_client.js":
/*!****************************!*\
  !*** ./src/http_client.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  if (false) {}

  module.exports = axios;
});

/***/ }),

/***/ "./src/qingstor/bucket.js":
/*!********************************!*\
  !*** ./src/qingstor/bucket.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../request */ "./src/request.js"), __webpack_require__(/*! ../error */ "./src/error.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _request, _error) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _request = _interopRequireDefault(_request);
  _error = _interopRequireDefault(_error);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------

  /**
   * Bucket Module
   * @param {Object} config object
   * @param {Object} properties
   */
  class Bucket {
    constructor(config, properties) {
      // Zone should be forced to lower case
      if (properties && properties['zone']) {
        properties['zone'] = properties['zone'].toLowerCase();
      }

      this.config = config;
      this.properties = properties;
    }
    /**
     * Delete a bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/delete.html)
     *
     * @return {Promise} axios response
     */


    delete() {
      return this.deleteRequest().send();
    }
    /**
     * @ignore
     * Build Delete's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/delete.html)
     *
     * @return Signer
     */


    deleteRequest() {
      const operation = {
        api: 'DeleteBucket',
        method: 'DELETE',
        uri: '/<bucket-name>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteValidate(operation) {}
    /**
     * Delete bucket CNAME setting of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/delete_cname.html)
     * @param {Object} options - User input options;
     * @param options.domain - domain name
     *
     * @return {Promise} axios response
     */


    deleteCNAME(options) {
      options = options || {};
      return this.deleteCNAMERequest(options).send();
    }
    /**
     * @ignore
     * Build DeleteCNAME's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/delete_cname.html)
     * @param {Object} options - User input options;
     * @param options.domain - domain name
     *
     * @return Signer
     */


    deleteCNAMERequest(options = {}) {
      const operation = {
        api: 'DeleteBucketCNAME',
        method: 'DELETE',
        uri: '/<bucket-name>?cname',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          domain: options['domain'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.deleteCNAMEValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteCNAMEValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['domain'] === undefined || operation['elements']['domain'].toString() === '') {
        throw new _error.default.ParameterRequired('domain', 'DeleteBucketCNAMEInput');
      }
    }
    /**
     * Delete CORS information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/delete_cors.html)
     *
     * @return {Promise} axios response
     */


    deleteCORS() {
      return this.deleteCORSRequest().send();
    }
    /**
     * @ignore
     * Build DeleteCORS's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/delete_cors.html)
     *
     * @return Signer
     */


    deleteCORSRequest() {
      const operation = {
        api: 'DeleteBucketCORS',
        method: 'DELETE',
        uri: '/<bucket-name>?cors',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteCORSValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteCORSValidate(operation) {}
    /**
     * Delete external mirror of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/delete_external_mirror.html)
     *
     * @return {Promise} axios response
     */


    deleteExternalMirror() {
      return this.deleteExternalMirrorRequest().send();
    }
    /**
     * @ignore
     * Build DeleteExternalMirror's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/delete_external_mirror.html)
     *
     * @return Signer
     */


    deleteExternalMirrorRequest() {
      const operation = {
        api: 'DeleteBucketExternalMirror',
        method: 'DELETE',
        uri: '/<bucket-name>?mirror',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteExternalMirrorValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteExternalMirrorValidate(operation) {}
    /**
     * Delete Lifecycle information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/delete_lifecycle.html)
     *
     * @return {Promise} axios response
     */


    deleteLifecycle() {
      return this.deleteLifecycleRequest().send();
    }
    /**
     * @ignore
     * Build DeleteLifecycle's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/delete_lifecycle.html)
     *
     * @return Signer
     */


    deleteLifecycleRequest() {
      const operation = {
        api: 'DeleteBucketLifecycle',
        method: 'DELETE',
        uri: '/<bucket-name>?lifecycle',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteLifecycleValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteLifecycleValidate(operation) {}
    /**
     * Delete bucket logging setting of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/delete_logging.html)
     *
     * @return {Promise} axios response
     */


    deleteLogging() {
      return this.deleteLoggingRequest().send();
    }
    /**
     * @ignore
     * Build DeleteLogging's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/delete_logging.html)
     *
     * @return Signer
     */


    deleteLoggingRequest() {
      const operation = {
        api: 'DeleteBucketLogging',
        method: 'DELETE',
        uri: '/<bucket-name>?logging',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteLoggingValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteLoggingValidate(operation) {}
    /**
     * Delete Notification information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/delete_notification.html)
     *
     * @return {Promise} axios response
     */


    deleteNotification() {
      return this.deleteNotificationRequest().send();
    }
    /**
     * @ignore
     * Build DeleteNotification's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/delete_notification.html)
     *
     * @return Signer
     */


    deleteNotificationRequest() {
      const operation = {
        api: 'DeleteBucketNotification',
        method: 'DELETE',
        uri: '/<bucket-name>?notification',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteNotificationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteNotificationValidate(operation) {}
    /**
     * Delete policy information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/policy/delete_policy.html)
     *
     * @return {Promise} axios response
     */


    deletePolicy() {
      return this.deletePolicyRequest().send();
    }
    /**
     * @ignore
     * Build DeletePolicy's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/policy/delete_policy.html)
     *
     * @return Signer
     */


    deletePolicyRequest() {
      const operation = {
        api: 'DeleteBucketPolicy',
        method: 'DELETE',
        uri: '/<bucket-name>?policy',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deletePolicyValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deletePolicyValidate(operation) {}
    /**
     * Delete Replication information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/delete_replication.html)
     *
     * @return {Promise} axios response
     */


    deleteReplication() {
      return this.deleteReplicationRequest().send();
    }
    /**
     * @ignore
     * Build DeleteReplication's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/delete_replication.html)
     *
     * @return Signer
     */


    deleteReplicationRequest() {
      const operation = {
        api: 'DeleteBucketReplication',
        method: 'DELETE',
        uri: '/<bucket-name>?replication',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.deleteReplicationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteReplicationValidate(operation) {}
    /**
     * Delete multiple objects from the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/delete_multiple.html)
     * @param {Object} options - User input options;
     * @param options.Content-MD5 - Object MD5sum
     * @param options.objects - A list of keys to delete
     * @param options.quiet - Whether to return the list of deleted objects
     *
     * @return {Promise} axios response
     */


    deleteMultipleObjects(options) {
      options = options || {};
      return this.deleteMultipleObjectsRequest(options).send();
    }
    /**
     * @ignore
     * Build DeleteMultipleObjects's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/delete_multiple.html)
     * @param {Object} options - User input options;
     * @param options.Content-MD5 - Object MD5sum
     * @param options.objects - A list of keys to delete
     * @param options.quiet - Whether to return the list of deleted objects
     *
     * @return Signer
     */


    deleteMultipleObjectsRequest(options = {}) {
      const operation = {
        api: 'DeleteMultipleObjects',
        method: 'POST',
        uri: '/<bucket-name>?delete',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'content-md5': options['content-md5'] || options['Content-MD5'] || undefined
        },
        elements: {
          objects: options['objects'] || undefined,
          quiet: options['quiet'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.deleteMultipleObjectsValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteMultipleObjectsValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['objects'] === undefined || operation['elements']['objects'].toString() === '') {
        throw new _error.default.ParameterRequired('objects', 'DeleteMultipleObjectsInput');
      }

      operation['elements']['objects'].forEach(function (value) {});
    }
    /**
     * Get ACL information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get_acl.html)
     *
     * @return {Promise} axios response
     */


    getACL() {
      return this.getACLRequest().send();
    }
    /**
     * @ignore
     * Build GetACL's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get_acl.html)
     *
     * @return Signer
     */


    getACLRequest() {
      const operation = {
        api: 'GetBucketACL',
        method: 'GET',
        uri: '/<bucket-name>?acl',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getACLValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getACLValidate(operation) {}
    /**
     * Get bucket CNAME setting of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/get_cname.html)
     * @param {Object} options - User input options;
     * @param options.type - Limit the type used for query, normal will be recognized if empty.
     *
     * @return {Promise} axios response
     */


    getCNAME(options) {
      options = options || {};
      return this.getCNAMERequest(options).send();
    }
    /**
     * @ignore
     * Build GetCNAME's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/get_cname.html)
     * @param {Object} options - User input options;
     * @param options.type - Limit the type used for query, normal will be recognized if empty.
     *
     * @return Signer
     */


    getCNAMERequest(options = {}) {
      const operation = {
        api: 'GetBucketCNAME',
        method: 'GET',
        uri: '/<bucket-name>?cname',
        params: {
          type: options['type'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getCNAMEValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getCNAMEValidate(operation) {
      if (operation['params'] !== undefined && operation['params']['type'] !== undefined && operation['params']['type'].toString() !== '') {
        const type_valid_values = ['website', 'normal'];

        if (type_valid_values.indexOf(operation['params']['type']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('type', operation['params']['type'], type_valid_values);
        }
      }
    }
    /**
     * Get CORS information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/get_cors.html)
     *
     * @return {Promise} axios response
     */


    getCORS() {
      return this.getCORSRequest().send();
    }
    /**
     * @ignore
     * Build GetCORS's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/get_cors.html)
     *
     * @return Signer
     */


    getCORSRequest() {
      const operation = {
        api: 'GetBucketCORS',
        method: 'GET',
        uri: '/<bucket-name>?cors',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getCORSValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getCORSValidate(operation) {}
    /**
     * Get external mirror of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/get_external_mirror.html)
     *
     * @return {Promise} axios response
     */


    getExternalMirror() {
      return this.getExternalMirrorRequest().send();
    }
    /**
     * @ignore
     * Build GetExternalMirror's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/get_external_mirror.html)
     *
     * @return Signer
     */


    getExternalMirrorRequest() {
      const operation = {
        api: 'GetBucketExternalMirror',
        method: 'GET',
        uri: '/<bucket-name>?mirror',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getExternalMirrorValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getExternalMirrorValidate(operation) {}
    /**
     * Get Lifecycle information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/get_lifecycle.html)
     *
     * @return {Promise} axios response
     */


    getLifecycle() {
      return this.getLifecycleRequest().send();
    }
    /**
     * @ignore
     * Build GetLifecycle's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/get_lifecycle.html)
     *
     * @return Signer
     */


    getLifecycleRequest() {
      const operation = {
        api: 'GetBucketLifecycle',
        method: 'GET',
        uri: '/<bucket-name>?lifecycle',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getLifecycleValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getLifecycleValidate(operation) {}
    /**
     * Get bucket logging setting of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/get_logging.html)
     *
     * @return {Promise} axios response
     */


    getLogging() {
      return this.getLoggingRequest().send();
    }
    /**
     * @ignore
     * Build GetLogging's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/get_logging.html)
     *
     * @return Signer
     */


    getLoggingRequest() {
      const operation = {
        api: 'GetBucketLogging',
        method: 'GET',
        uri: '/<bucket-name>?logging',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getLoggingValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getLoggingValidate(operation) {}
    /**
     * Get Notification information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/get_notification.html)
     *
     * @return {Promise} axios response
     */


    getNotification() {
      return this.getNotificationRequest().send();
    }
    /**
     * @ignore
     * Build GetNotification's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/get_notification.html)
     *
     * @return Signer
     */


    getNotificationRequest() {
      const operation = {
        api: 'GetBucketNotification',
        method: 'GET',
        uri: '/<bucket-name>?notification',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getNotificationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getNotificationValidate(operation) {}
    /**
     * Get policy information of the bucket. [Documentation URL](https://https://docs.qingcloud.com/qingstor/api/bucket/policy/get_policy.html)
     *
     * @return {Promise} axios response
     */


    getPolicy() {
      return this.getPolicyRequest().send();
    }
    /**
     * @ignore
     * Build GetPolicy's request
     * [Documentation URL](https://https://docs.qingcloud.com/qingstor/api/bucket/policy/get_policy.html)
     *
     * @return Signer
     */


    getPolicyRequest() {
      const operation = {
        api: 'GetBucketPolicy',
        method: 'GET',
        uri: '/<bucket-name>?policy',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getPolicyValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getPolicyValidate(operation) {}
    /**
     * Get Replication information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/get_replication.html)
     *
     * @return {Promise} axios response
     */


    getReplication() {
      return this.getReplicationRequest().send();
    }
    /**
     * @ignore
     * Build GetReplication's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/get_replication.html)
     *
     * @return Signer
     */


    getReplicationRequest() {
      const operation = {
        api: 'GetBucketReplication',
        method: 'GET',
        uri: '/<bucket-name>?replication',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getReplicationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getReplicationValidate(operation) {}
    /**
     * Get statistics information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get_stats.html)
     *
     * @return {Promise} axios response
     */


    getStatistics() {
      return this.getStatisticsRequest().send();
    }
    /**
     * @ignore
     * Build GetStatistics's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get_stats.html)
     *
     * @return Signer
     */


    getStatisticsRequest() {
      const operation = {
        api: 'GetBucketStatistics',
        method: 'GET',
        uri: '/<bucket-name>?stats',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.getStatisticsValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getStatisticsValidate(operation) {}
    /**
     * Check whether the bucket exists and available. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/head.html)
     *
     * @return {Promise} axios response
     */


    head() {
      return this.headRequest().send();
    }
    /**
     * @ignore
     * Build Head's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/head.html)
     *
     * @return Signer
     */


    headRequest() {
      const operation = {
        api: 'HeadBucket',
        method: 'HEAD',
        uri: '/<bucket-name>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.headValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    headValidate(operation) {}
    /**
     * List multipart uploads in the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/list_multipart_uploads.html)
     * @param {Object} options - User input options;
     * @param options.delimiter - Put all keys that share a common prefix into a list
     * @param options.key_marker - Limit results returned from the first key after key_marker sorted by alphabetical order
     * @param options.limit - Results count limit
     * @param options.prefix - Limits results to keys that begin with the prefix
     * @param options.upload_id_marker - Limit results returned from the first uploading segment after upload_id_marker sorted by the time of upload_id
     *
     * @return {Promise} axios response
     */


    listMultipartUploads(options) {
      options = options || {};
      return this.listMultipartUploadsRequest(options).send();
    }
    /**
     * @ignore
     * Build ListMultipartUploads's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/list_multipart_uploads.html)
     * @param {Object} options - User input options;
     * @param options.delimiter - Put all keys that share a common prefix into a list
     * @param options.key_marker - Limit results returned from the first key after key_marker sorted by alphabetical order
     * @param options.limit - Results count limit
     * @param options.prefix - Limits results to keys that begin with the prefix
     * @param options.upload_id_marker - Limit results returned from the first uploading segment after upload_id_marker sorted by the time of upload_id
     *
     * @return Signer
     */


    listMultipartUploadsRequest(options = {}) {
      const operation = {
        api: 'ListMultipartUploads',
        method: 'GET',
        uri: '/<bucket-name>?uploads',
        params: {
          delimiter: options['delimiter'] || undefined,
          key_marker: options['key_marker'] || undefined,
          limit: options['limit'] || undefined,
          prefix: options['prefix'] || undefined,
          upload_id_marker: options['upload_id_marker'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.listMultipartUploadsValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    listMultipartUploadsValidate(operation) {}
    /**
     * Retrieve the object list in a bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get.html)
     * @param {Object} options - User input options;
     * @param options.delimiter - Put all keys that share a common prefix into a list
     * @param options.limit - Results count limit
     * @param options.marker - Limit results to keys that start at this marker
     * @param options.prefix - Limits results to keys that begin with the prefix
     *
     * @return {Promise} axios response
     */


    listObjects(options) {
      options = options || {};
      return this.listObjectsRequest(options).send();
    }
    /**
     * @ignore
     * Build ListObjects's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/get.html)
     * @param {Object} options - User input options;
     * @param options.delimiter - Put all keys that share a common prefix into a list
     * @param options.limit - Results count limit
     * @param options.marker - Limit results to keys that start at this marker
     * @param options.prefix - Limits results to keys that begin with the prefix
     *
     * @return Signer
     */


    listObjectsRequest(options = {}) {
      const operation = {
        api: 'ListObjects',
        method: 'GET',
        uri: '/<bucket-name>',
        params: {
          delimiter: options['delimiter'] || undefined,
          limit: options['limit'] || undefined,
          marker: options['marker'] || undefined,
          prefix: options['prefix'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.listObjectsValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    listObjectsValidate(operation) {}
    /**
     * Create a new bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/put.html)
     *
     * @return {Promise} axios response
     */


    put() {
      return this.putRequest().send();
    }
    /**
     * @ignore
     * Build Put's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/put.html)
     *
     * @return Signer
     */


    putRequest() {
      const operation = {
        api: 'PutBucket',
        method: 'PUT',
        uri: '/<bucket-name>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      this.putValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putValidate(operation) {}
    /**
     * Set ACL information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/put_acl.html)
     * @param {Object} options - User input options;
     * @param options.acl - Bucket ACL rules
     *
     * @return {Promise} axios response
     */


    putACL(options) {
      options = options || {};
      return this.putACLRequest(options).send();
    }
    /**
     * @ignore
     * Build PutACL's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/put_acl.html)
     * @param {Object} options - User input options;
     * @param options.acl - Bucket ACL rules
     *
     * @return Signer
     */


    putACLRequest(options = {}) {
      const operation = {
        api: 'PutBucketACL',
        method: 'PUT',
        uri: '/<bucket-name>?acl',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          acl: options['acl'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putACLValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putACLValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['acl'] === undefined || operation['elements']['acl'].toString() === '') {
        throw new _error.default.ParameterRequired('acl', 'PutBucketACLInput');
      }

      operation['elements']['acl'].forEach(function (value) {
        if ('grantee' in value) {
          if (value['grantee'] === undefined || value['grantee']['type'] === undefined || value['grantee']['type'].toString() === '') {
            throw new _error.default.ParameterRequired('type', 'grantee');
          }

          if (value['grantee'] !== undefined && value['grantee']['type'] !== undefined && value['grantee']['type'].toString() !== '') {
            const type_valid_values = ['user', 'group'];

            if (type_valid_values.indexOf(value['grantee']['type']) === -1) {
              throw new _error.default.ParameterValueNotAllowed('type', value['grantee']['type'], type_valid_values);
            }
          }
        }

        if (value === undefined || value.toString() === '') {
          throw new _error.default.ParameterRequired('grantee', 'acl');
        }

        if (value === undefined || value['permission'] === undefined || value['permission'].toString() === '') {
          throw new _error.default.ParameterRequired('permission', 'acl');
        }

        if (value !== undefined && value['permission'] !== undefined && value['permission'].toString() !== '') {
          const permission_valid_values = ['READ', 'WRITE', 'FULL_CONTROL'];

          if (permission_valid_values.indexOf(value['permission']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('permission', value['permission'], permission_valid_values);
          }
        }
      });
    }
    /**
     * Set bucket CNAME of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/put_cname.html)
     * @param {Object} options - User input options;
     * @param options.domain - The domain name to be bound to the bucket. The domain name must have been registered and not bound to another bucket.
     * @param options.type - The purpose of the domain name to be bound. Currently supports two types, normal and website.
     *
     * @return {Promise} axios response
     */


    putCNAME(options) {
      options = options || {};
      return this.putCNAMERequest(options).send();
    }
    /**
     * @ignore
     * Build PutCNAME's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cname/put_cname.html)
     * @param {Object} options - User input options;
     * @param options.domain - The domain name to be bound to the bucket. The domain name must have been registered and not bound to another bucket.
     * @param options.type - The purpose of the domain name to be bound. Currently supports two types, normal and website.
     *
     * @return Signer
     */


    putCNAMERequest(options = {}) {
      const operation = {
        api: 'PutBucketCNAME',
        method: 'PUT',
        uri: '/<bucket-name>?cname',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          domain: options['domain'] || undefined,
          type: options['type'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putCNAMEValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putCNAMEValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['domain'] === undefined || operation['elements']['domain'].toString() === '') {
        throw new _error.default.ParameterRequired('domain', 'PutBucketCNAMEInput');
      }

      if (operation['elements'] !== undefined && operation['elements']['type'] !== undefined && operation['elements']['type'].toString() !== '') {
        const type_valid_values = ['normal', 'website'];

        if (type_valid_values.indexOf(operation['elements']['type']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('type', operation['elements']['type'], type_valid_values);
        }
      }
    }
    /**
     * Set CORS information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/put_cors.html)
     * @param {Object} options - User input options;
     * @param options.cors_rules - Bucket CORS rules
     *
     * @return {Promise} axios response
     */


    putCORS(options) {
      options = options || {};
      return this.putCORSRequest(options).send();
    }
    /**
     * @ignore
     * Build PutCORS's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/cors/put_cors.html)
     * @param {Object} options - User input options;
     * @param options.cors_rules - Bucket CORS rules
     *
     * @return Signer
     */


    putCORSRequest(options = {}) {
      const operation = {
        api: 'PutBucketCORS',
        method: 'PUT',
        uri: '/<bucket-name>?cors',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          cors_rules: options['cors_rules'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putCORSValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putCORSValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['cors_rules'] === undefined || operation['elements']['cors_rules'].toString() === '') {
        throw new _error.default.ParameterRequired('cors_rules', 'PutBucketCORSInput');
      }

      operation['elements']['cors_rules'].forEach(function (value) {
        if (value === undefined || value['allowed_methods'] === undefined || value['allowed_methods'].toString() === '') {
          throw new _error.default.ParameterRequired('allowed_methods', 'cors_rule');
        }

        if (value === undefined || value['allowed_origin'] === undefined || value['allowed_origin'].toString() === '') {
          throw new _error.default.ParameterRequired('allowed_origin', 'cors_rule');
        }
      });
    }
    /**
     * Set external mirror of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/put_external_mirror.html)
     * @param {Object} options - User input options;
     * @param options.source_site - Source site url
     *
     * @return {Promise} axios response
     */


    putExternalMirror(options) {
      options = options || {};
      return this.putExternalMirrorRequest(options).send();
    }
    /**
     * @ignore
     * Build PutExternalMirror's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/external_mirror/put_external_mirror.html)
     * @param {Object} options - User input options;
     * @param options.source_site - Source site url
     *
     * @return Signer
     */


    putExternalMirrorRequest(options = {}) {
      const operation = {
        api: 'PutBucketExternalMirror',
        method: 'PUT',
        uri: '/<bucket-name>?mirror',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          source_site: options['source_site'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putExternalMirrorValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putExternalMirrorValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['source_site'] === undefined || operation['elements']['source_site'].toString() === '') {
        throw new _error.default.ParameterRequired('source_site', 'PutBucketExternalMirrorInput');
      }
    }
    /**
     * Set Lifecycle information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/put_lifecycle.html)
     * @param {Object} options - User input options;
     * @param options.rule - Bucket Lifecycle rule
     *
     * @return {Promise} axios response
     */


    putLifecycle(options) {
      options = options || {};
      return this.putLifecycleRequest(options).send();
    }
    /**
     * @ignore
     * Build PutLifecycle's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/lifecycle/put_lifecycle.html)
     * @param {Object} options - User input options;
     * @param options.rule - Bucket Lifecycle rule
     *
     * @return Signer
     */


    putLifecycleRequest(options = {}) {
      const operation = {
        api: 'PutBucketLifecycle',
        method: 'PUT',
        uri: '/<bucket-name>?lifecycle',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          rule: options['rule'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putLifecycleValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putLifecycleValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['rule'] === undefined || operation['elements']['rule'].toString() === '') {
        throw new _error.default.ParameterRequired('rule', 'PutBucketLifecycleInput');
      }

      operation['elements']['rule'].forEach(function (value) {
        if ('abort_incomplete_multipart_upload' in value) {
          if (value['abort_incomplete_multipart_upload'] === undefined || value['abort_incomplete_multipart_upload']['days_after_initiation'] === undefined || value['abort_incomplete_multipart_upload']['days_after_initiation'].toString() === '') {
            throw new _error.default.ParameterRequired('days_after_initiation', 'abort_incomplete_multipart_upload');
          }
        }

        if ('expiration' in value) {}

        if ('filter' in value) {
          if (value['filter'] === undefined || value['filter']['prefix'] === undefined || value['filter']['prefix'].toString() === '') {
            throw new _error.default.ParameterRequired('prefix', 'filter');
          }
        }

        if (value === undefined || value.toString() === '') {
          throw new _error.default.ParameterRequired('filter', 'rule');
        }

        if (value === undefined || value['id'] === undefined || value['id'].toString() === '') {
          throw new _error.default.ParameterRequired('id', 'rule');
        }

        if (value === undefined || value['status'] === undefined || value['status'].toString() === '') {
          throw new _error.default.ParameterRequired('status', 'rule');
        }

        if (value !== undefined && value['status'] !== undefined && value['status'].toString() !== '') {
          const status_valid_values = ['enabled', 'disabled'];

          if (status_valid_values.indexOf(value['status']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('status', value['status'], status_valid_values);
          }
        }

        if ('transition' in value) {
          if (value['transition'] === undefined || value['transition']['storage_class'] === undefined || value['transition']['storage_class'].toString() === '') {
            throw new _error.default.ParameterRequired('storage_class', 'transition');
          }
        }
      });
    }
    /**
     * Set bucket logging of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/put_logging.html)
     * @param {Object} options - User input options;
     * @param options.target_bucket - The name of the bucket used to store logs. The user must be the owner of the bucket.
     * @param options.target_prefix - generated log files' common prefix
     *
     * @return {Promise} axios response
     */


    putLogging(options) {
      options = options || {};
      return this.putLoggingRequest(options).send();
    }
    /**
     * @ignore
     * Build PutLogging's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/logging/put_logging.html)
     * @param {Object} options - User input options;
     * @param options.target_bucket - The name of the bucket used to store logs. The user must be the owner of the bucket.
     * @param options.target_prefix - generated log files' common prefix
     *
     * @return Signer
     */


    putLoggingRequest(options = {}) {
      const operation = {
        api: 'PutBucketLogging',
        method: 'PUT',
        uri: '/<bucket-name>?logging',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          target_bucket: options['target_bucket'] || undefined,
          target_prefix: options['target_prefix'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putLoggingValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putLoggingValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['target_bucket'] === undefined || operation['elements']['target_bucket'].toString() === '') {
        throw new _error.default.ParameterRequired('target_bucket', 'PutBucketLoggingInput');
      }

      if (operation['elements'] === undefined || operation['elements']['target_prefix'] === undefined || operation['elements']['target_prefix'].toString() === '') {
        throw new _error.default.ParameterRequired('target_prefix', 'PutBucketLoggingInput');
      }
    }
    /**
     * Set Notification information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/put_notification.html)
     * @param {Object} options - User input options;
     * @param options.notifications - Bucket Notification
     *
     * @return {Promise} axios response
     */


    putNotification(options) {
      options = options || {};
      return this.putNotificationRequest(options).send();
    }
    /**
     * @ignore
     * Build PutNotification's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/notification/put_notification.html)
     * @param {Object} options - User input options;
     * @param options.notifications - Bucket Notification
     *
     * @return Signer
     */


    putNotificationRequest(options = {}) {
      const operation = {
        api: 'PutBucketNotification',
        method: 'PUT',
        uri: '/<bucket-name>?notification',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          notifications: options['notifications'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putNotificationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putNotificationValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['notifications'] === undefined || operation['elements']['notifications'].toString() === '') {
        throw new _error.default.ParameterRequired('notifications', 'PutBucketNotificationInput');
      }

      operation['elements']['notifications'].forEach(function (value) {
        if (value === undefined || value['cloudfunc'] === undefined || value['cloudfunc'].toString() === '') {
          throw new _error.default.ParameterRequired('cloudfunc', 'notification');
        }

        if (value !== undefined && value['cloudfunc'] !== undefined && value['cloudfunc'].toString() !== '') {
          const cloudfunc_valid_values = ['tupu-porn', 'notifier', 'image'];

          if (cloudfunc_valid_values.indexOf(value['cloudfunc']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('cloudfunc', value['cloudfunc'], cloudfunc_valid_values);
          }
        }

        if ('cloudfunc_args' in value) {
          if (value['cloudfunc_args'] === undefined || value['cloudfunc_args']['action'] === undefined || value['cloudfunc_args']['action'].toString() === '') {
            throw new _error.default.ParameterRequired('action', 'cloudfunc_args');
          }
        }

        if (value === undefined || value['event_types'] === undefined || value['event_types'].toString() === '') {
          throw new _error.default.ParameterRequired('event_types', 'notification');
        }

        if (value === undefined || value['id'] === undefined || value['id'].toString() === '') {
          throw new _error.default.ParameterRequired('id', 'notification');
        }
      });
    }
    /**
     * Set policy information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/policy/put_policy.html)
     * @param {Object} options - User input options;
     * @param options.statement - Bucket policy statement
     *
     * @return {Promise} axios response
     */


    putPolicy(options) {
      options = options || {};
      return this.putPolicyRequest(options).send();
    }
    /**
     * @ignore
     * Build PutPolicy's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/policy/put_policy.html)
     * @param {Object} options - User input options;
     * @param options.statement - Bucket policy statement
     *
     * @return Signer
     */


    putPolicyRequest(options = {}) {
      const operation = {
        api: 'PutBucketPolicy',
        method: 'PUT',
        uri: '/<bucket-name>?policy',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          statement: options['statement'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putPolicyValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putPolicyValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['statement'] === undefined || operation['elements']['statement'].toString() === '') {
        throw new _error.default.ParameterRequired('statement', 'PutBucketPolicyInput');
      }

      operation['elements']['statement'].forEach(function (value) {
        if (value === undefined || value['action'] === undefined || value['action'].toString() === '') {
          throw new _error.default.ParameterRequired('action', 'statement');
        }

        if ('condition' in value) {
          if ('ip_address' in value['condition']) {}

          if ('is_null' in value['condition']) {}

          if ('not_ip_address' in value['condition']) {}

          if ('string_like' in value['condition']) {}

          if ('string_not_like' in value['condition']) {}
        }

        if (value === undefined || value['effect'] === undefined || value['effect'].toString() === '') {
          throw new _error.default.ParameterRequired('effect', 'statement');
        }

        if (value !== undefined && value['effect'] !== undefined && value['effect'].toString() !== '') {
          const effect_valid_values = ['allow', 'deny'];

          if (effect_valid_values.indexOf(value['effect']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('effect', value['effect'], effect_valid_values);
          }
        }

        if (value === undefined || value['id'] === undefined || value['id'].toString() === '') {
          throw new _error.default.ParameterRequired('id', 'statement');
        }

        if (value === undefined || value['user'] === undefined || value['user'].toString() === '') {
          throw new _error.default.ParameterRequired('user', 'statement');
        }
      });
    }
    /**
     * Set Replication information of the bucket. [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/put_replication.html)
     * @param {Object} options - User input options;
     * @param options.rules - Bucket Replication rules
     *
     * @return {Promise} axios response
     */


    putReplication(options) {
      options = options || {};
      return this.putReplicationRequest(options).send();
    }
    /**
     * @ignore
     * Build PutReplication's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/bucket/replication/put_replication.html)
     * @param {Object} options - User input options;
     * @param options.rules - Bucket Replication rules
     *
     * @return Signer
     */


    putReplicationRequest(options = {}) {
      const operation = {
        api: 'PutBucketReplication',
        method: 'PUT',
        uri: '/<bucket-name>?replication',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {
          rules: options['rules'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      this.putReplicationValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putReplicationValidate(operation) {
      if (operation['elements'] === undefined || operation['elements']['rules'] === undefined || operation['elements']['rules'].toString() === '') {
        throw new _error.default.ParameterRequired('rules', 'PutBucketReplicationInput');
      }

      operation['elements']['rules'].forEach(function (value) {
        if (value !== undefined && value['delete_marker'] !== undefined && value['delete_marker'].toString() !== '') {
          const delete_marker_valid_values = ['enabled', 'disabled'];

          if (delete_marker_valid_values.indexOf(value['delete_marker']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('delete_marker', value['delete_marker'], delete_marker_valid_values);
          }
        }

        if ('destination' in value) {
          if (value['destination'] === undefined || value['destination']['bucket'] === undefined || value['destination']['bucket'].toString() === '') {
            throw new _error.default.ParameterRequired('bucket', 'destination');
          }
        }

        if (value === undefined || value.toString() === '') {
          throw new _error.default.ParameterRequired('destination', 'rules');
        }

        if ('filters' in value) {}

        if (value === undefined || value.toString() === '') {
          throw new _error.default.ParameterRequired('filters', 'rules');
        }

        if (value === undefined || value['id'] === undefined || value['id'].toString() === '') {
          throw new _error.default.ParameterRequired('id', 'rules');
        }

        if (value !== undefined && value['status'] !== undefined && value['status'].toString() !== '') {
          const status_valid_values = ['enabled', 'disabled'];

          if (status_valid_values.indexOf(value['status']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('status', value['status'], status_valid_values);
          }
        }

        if (value !== undefined && value['sync_marker'] !== undefined && value['sync_marker'].toString() !== '') {
          const sync_marker_valid_values = ['enabled', 'disabled'];

          if (sync_marker_valid_values.indexOf(value['sync_marker']) === -1) {
            throw new _error.default.ParameterValueNotAllowed('sync_marker', value['sync_marker'], sync_marker_valid_values);
          }
        }
      });
    }
    /**
     * Abort multipart upload. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/abort_multipart_upload.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.upload_id - Object multipart upload ID
     *
     * @return {Promise} axios response
     */


    abortMultipartUpload(object_key, options) {
      options = options || {};
      return this.abortMultipartUploadRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build AbortMultipartUpload's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/abort_multipart_upload.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.upload_id - Object multipart upload ID
     *
     * @return Signer
     */


    abortMultipartUploadRequest(object_key, options = {}) {
      const operation = {
        api: 'AbortMultipartUpload',
        method: 'DELETE',
        uri: '/<bucket-name>/<object-key>',
        params: {
          upload_id: options['upload_id'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.abortMultipartUploadValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    abortMultipartUploadValidate(operation) {
      if (operation['params'] === undefined || operation['params']['upload_id'] === undefined || operation['params']['upload_id'].toString() === '') {
        throw new _error.default.ParameterRequired('upload_id', 'AbortMultipartUploadInput');
      }
    }
    /**
     * Append the Object. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/append.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Length - Object content size
     * @param options.Content-MD5 - Object MD5sum
     * @param options.Content-Type - Object content type
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     * @param options.position - Object append position
     *
     * @return {Promise} axios response
     */


    appendObject(object_key, options) {
      options = options || {};
      return this.appendObjectRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build AppendObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/append.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Length - Object content size
     * @param options.Content-MD5 - Object MD5sum
     * @param options.Content-Type - Object content type
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     * @param options.position - Object append position
     *
     * @return Signer
     */


    appendObjectRequest(object_key, options = {}) {
      const operation = {
        api: 'AppendObject',
        method: 'POST',
        uri: '/<bucket-name>/<object-key>?append',
        params: {
          position: options['position'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'content-length': options['content-length'] || options['Content-Length'] || undefined,
          'content-md5': options['content-md5'] || options['Content-MD5'] || undefined,
          'content-type': options['content-type'] || options['Content-Type'] || undefined,
          'x-qs-storage-class': options['x-qs-storage-class'] || options['X-QS-Storage-Class'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: options['body'] || undefined
      };
      operation.properties['object-key'] = object_key;
      this.appendObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    appendObjectValidate(operation) {
      if (operation['params'] === undefined || operation['params']['position'] === undefined || operation['params']['position'].toString() === '') {
        throw new _error.default.ParameterRequired('position', 'AppendObjectInput');
      }

      if (operation['headers'] !== undefined && operation['headers']['X-QS-Storage-Class'] !== undefined && operation['headers']['X-QS-Storage-Class'].toString() !== '') {
        const x_qs_storage_class_valid_values = ['STANDARD', 'STANDARD_IA'];

        if (x_qs_storage_class_valid_values.indexOf(operation['headers']['X-QS-Storage-Class']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('X-QS-Storage-Class', operation['headers']['X-QS-Storage-Class'], x_qs_storage_class_valid_values);
        }
      }
    }
    /**
     * Complete multipart upload. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/complete_multipart_upload.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.ETag - MD5sum of the object part
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.upload_id - Object multipart upload ID
     * @param options.object_parts - Object parts
     *
     * @return {Promise} axios response
     */


    completeMultipartUpload(object_key, options) {
      options = options || {};
      return this.completeMultipartUploadRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build CompleteMultipartUpload's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/complete_multipart_upload.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.ETag - MD5sum of the object part
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.upload_id - Object multipart upload ID
     * @param options.object_parts - Object parts
     *
     * @return Signer
     */


    completeMultipartUploadRequest(object_key, options = {}) {
      const operation = {
        api: 'CompleteMultipartUpload',
        method: 'POST',
        uri: '/<bucket-name>/<object-key>',
        params: {
          upload_id: options['upload_id'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          etag: options['etag'] || options['ETag'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined
        },
        elements: {
          object_parts: options['object_parts'] || undefined
        },
        properties: this.properties,
        body: options['body'] || undefined
      };
      operation.properties['object-key'] = object_key;
      this.completeMultipartUploadValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    completeMultipartUploadValidate(operation) {
      if (operation['params'] === undefined || operation['params']['upload_id'] === undefined || operation['params']['upload_id'].toString() === '') {
        throw new _error.default.ParameterRequired('upload_id', 'CompleteMultipartUploadInput');
      }

      if (operation['elements'] === undefined || operation['elements']['object_parts'] === undefined || operation['elements']['object_parts'].toString() === '') {
        throw new _error.default.ParameterRequired('object_parts', 'CompleteMultipartUploadInput');
      }

      operation['elements']['object_parts'].forEach(function (value) {
        if (value === undefined || value['part_number'] === undefined || value['part_number'].toString() === '') {
          throw new _error.default.ParameterRequired('part_number', 'object_part');
        }
      });
    }
    /**
     * Delete the object. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/delete.html)
     * @param {string} object_key The object key
     *
     * @return {Promise} axios response
     */


    deleteObject(object_key) {
      return this.deleteObjectRequest(object_key).send();
    }
    /**
     * @ignore
     * Build DeleteObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/delete.html)
     * @param object_key The object key
     *
     * @return Signer
     */


    deleteObjectRequest(object_key) {
      const operation = {
        api: 'DeleteObject',
        method: 'DELETE',
        uri: '/<bucket-name>/<object-key>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.deleteObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    deleteObjectValidate(operation) {}
    /**
     * Retrieve the object. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/get.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Match - Check whether the ETag matches
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.If-None-Match - Check whether the ETag does not match
     * @param options.If-Unmodified-Since - Check whether the object has not been modified
     * @param options.Range - Specified range of the object
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.response-cache-control - Specified the Cache-Control response header
     * @param options.response-content-disposition - Specified the Content-Disposition response header
     * @param options.response-content-encoding - Specified the Content-Encoding response header
     * @param options.response-content-language - Specified the Content-Language response header
     * @param options.response-content-type - Specified the Content-Type response header
     * @param options.response-expires - Specified the Expires response header
     *
     * @return {Promise} axios response
     */


    getObject(object_key, options) {
      options = options || {};
      return this.getObjectRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build GetObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/get.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Match - Check whether the ETag matches
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.If-None-Match - Check whether the ETag does not match
     * @param options.If-Unmodified-Since - Check whether the object has not been modified
     * @param options.Range - Specified range of the object
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.response-cache-control - Specified the Cache-Control response header
     * @param options.response-content-disposition - Specified the Content-Disposition response header
     * @param options.response-content-encoding - Specified the Content-Encoding response header
     * @param options.response-content-language - Specified the Content-Language response header
     * @param options.response-content-type - Specified the Content-Type response header
     * @param options.response-expires - Specified the Expires response header
     *
     * @return Signer
     */


    getObjectRequest(object_key, options = {}) {
      const operation = {
        api: 'GetObject',
        method: 'GET',
        uri: '/<bucket-name>/<object-key>',
        params: {
          'response-cache-control': options['response-cache-control'] || undefined,
          'response-content-disposition': options['response-content-disposition'] || undefined,
          'response-content-encoding': options['response-content-encoding'] || undefined,
          'response-content-language': options['response-content-language'] || undefined,
          'response-content-type': options['response-content-type'] || undefined,
          'response-expires': options['response-expires'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'if-match': options['if-match'] || options['If-Match'] || undefined,
          'if-modified-since': options['if-modified-since'] || options['If-Modified-Since'] || undefined,
          'if-none-match': options['if-none-match'] || options['If-None-Match'] || undefined,
          'if-unmodified-since': options['if-unmodified-since'] || options['If-Unmodified-Since'] || undefined,
          range: options['range'] || options['Range'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.getObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    getObjectValidate(operation) {}
    /**
     * Check whether the object exists and available. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/head.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Match - Check whether the ETag matches
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.If-None-Match - Check whether the ETag does not match
     * @param options.If-Unmodified-Since - Check whether the object has not been modified
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     *
     * @return {Promise} axios response
     */


    headObject(object_key, options) {
      options = options || {};
      return this.headObjectRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build HeadObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/head.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Match - Check whether the ETag matches
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.If-None-Match - Check whether the ETag does not match
     * @param options.If-Unmodified-Since - Check whether the object has not been modified
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     *
     * @return Signer
     */


    headObjectRequest(object_key, options = {}) {
      const operation = {
        api: 'HeadObject',
        method: 'HEAD',
        uri: '/<bucket-name>/<object-key>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'if-match': options['if-match'] || options['If-Match'] || undefined,
          'if-modified-since': options['if-modified-since'] || options['If-Modified-Since'] || undefined,
          'if-none-match': options['if-none-match'] || options['If-None-Match'] || undefined,
          'if-unmodified-since': options['if-unmodified-since'] || options['If-Unmodified-Since'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.headObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    headObjectValidate(operation) {}
    /**
     * Image process with the action on the object [Documentation URL](https://docs.qingcloud.com/qingstor/data_process/image_process/index.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.action - Image process action
     * @param options.response-cache-control - Specified the Cache-Control response header
     * @param options.response-content-disposition - Specified the Content-Disposition response header
     * @param options.response-content-encoding - Specified the Content-Encoding response header
     * @param options.response-content-language - Specified the Content-Language response header
     * @param options.response-content-type - Specified the Content-Type response header
     * @param options.response-expires - Specified the Expires response header
     *
     * @return {Promise} axios response
     */


    imageProcess(object_key, options) {
      options = options || {};
      return this.imageProcessRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build ImageProcess's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/data_process/image_process/index.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.If-Modified-Since - Check whether the object has been modified
     * @param options.action - Image process action
     * @param options.response-cache-control - Specified the Cache-Control response header
     * @param options.response-content-disposition - Specified the Content-Disposition response header
     * @param options.response-content-encoding - Specified the Content-Encoding response header
     * @param options.response-content-language - Specified the Content-Language response header
     * @param options.response-content-type - Specified the Content-Type response header
     * @param options.response-expires - Specified the Expires response header
     *
     * @return Signer
     */


    imageProcessRequest(object_key, options = {}) {
      const operation = {
        api: 'ImageProcess',
        method: 'GET',
        uri: '/<bucket-name>/<object-key>?image',
        params: {
          action: options['action'] || undefined,
          'response-cache-control': options['response-cache-control'] || undefined,
          'response-content-disposition': options['response-content-disposition'] || undefined,
          'response-content-encoding': options['response-content-encoding'] || undefined,
          'response-content-language': options['response-content-language'] || undefined,
          'response-content-type': options['response-content-type'] || undefined,
          'response-expires': options['response-expires'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'if-modified-since': options['if-modified-since'] || options['If-Modified-Since'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.imageProcessValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    imageProcessValidate(operation) {
      if (operation['params'] === undefined || operation['params']['action'] === undefined || operation['params']['action'].toString() === '') {
        throw new _error.default.ParameterRequired('action', 'ImageProcessInput');
      }
    }
    /**
     * Initial multipart upload on the object. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/initiate_multipart_upload.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Type - Object content type
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-MetaData - User-defined metadata
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     *
     * @return {Promise} axios response
     */


    initiateMultipartUpload(object_key, options) {
      options = options || {};
      return this.initiateMultipartUploadRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build InitiateMultipartUpload's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/initiate_multipart_upload.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Type - Object content type
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-MetaData - User-defined metadata
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     *
     * @return Signer
     */


    initiateMultipartUploadRequest(object_key, options = {}) {
      const operation = {
        api: 'InitiateMultipartUpload',
        method: 'POST',
        uri: '/<bucket-name>/<object-key>?uploads',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'content-type': options['content-type'] || options['Content-Type'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined,
          'x-qs-metadata': options['x-qs-metadata'] || options['X-QS-MetaData'] || undefined,
          'x-qs-storage-class': options['x-qs-storage-class'] || options['X-QS-Storage-Class'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.initiateMultipartUploadValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    initiateMultipartUploadValidate(operation) {
      if (operation['headers'] !== undefined && operation['headers']['X-QS-Storage-Class'] !== undefined && operation['headers']['X-QS-Storage-Class'].toString() !== '') {
        const x_qs_storage_class_valid_values = ['STANDARD', 'STANDARD_IA'];

        if (x_qs_storage_class_valid_values.indexOf(operation['headers']['X-QS-Storage-Class']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('X-QS-Storage-Class', operation['headers']['X-QS-Storage-Class'], x_qs_storage_class_valid_values);
        }
      }
    }
    /**
     * List object parts. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/list_multipart.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.limit - Limit results count
     * @param options.part_number_marker - Object multipart upload part number
     * @param options.upload_id - Object multipart upload ID
     *
     * @return {Promise} axios response
     */


    listMultipart(object_key, options) {
      options = options || {};
      return this.listMultipartRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build ListMultipart's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/list_multipart.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.limit - Limit results count
     * @param options.part_number_marker - Object multipart upload part number
     * @param options.upload_id - Object multipart upload ID
     *
     * @return Signer
     */


    listMultipartRequest(object_key, options = {}) {
      const operation = {
        api: 'ListMultipart',
        method: 'GET',
        uri: '/<bucket-name>/<object-key>',
        params: {
          limit: options['limit'] || undefined,
          part_number_marker: options['part_number_marker'] || undefined,
          upload_id: options['upload_id'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.listMultipartValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    listMultipartValidate(operation) {
      if (operation['params'] === undefined || operation['params']['upload_id'] === undefined || operation['params']['upload_id'].toString() === '') {
        throw new _error.default.ParameterRequired('upload_id', 'ListMultipartInput');
      }
    }
    /**
     * Check whether the object accepts a origin with method and header. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/options.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.Access-Control-Request-Headers - Request headers
     * @param options.Access-Control-Request-Method - Request method
     * @param options.Origin - Request origin
     *
     * @return {Promise} axios response
     */


    optionsObject(object_key, options) {
      options = options || {};
      return this.optionsObjectRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build OptionsObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/options.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.Access-Control-Request-Headers - Request headers
     * @param options.Access-Control-Request-Method - Request method
     * @param options.Origin - Request origin
     *
     * @return Signer
     */


    optionsObjectRequest(object_key, options = {}) {
      const operation = {
        api: 'OptionsObject',
        method: 'OPTIONS',
        uri: '/<bucket-name>/<object-key>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'access-control-request-headers': options['access-control-request-headers'] || options['Access-Control-Request-Headers'] || undefined,
          'access-control-request-method': options['access-control-request-method'] || options['Access-Control-Request-Method'] || undefined,
          origin: options['origin'] || options['Origin'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: undefined
      };
      operation.properties['object-key'] = object_key;
      this.optionsObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    optionsObjectValidate(operation) {
      if (operation['headers'] === undefined || operation['headers']['Access-Control-Request-Method'] === undefined || operation['headers']['Access-Control-Request-Method'].toString() === '') {
        throw new _error.default.ParameterRequired('Access-Control-Request-Method', 'OptionsObjectInput');
      }

      if (operation['headers'] === undefined || operation['headers']['Origin'] === undefined || operation['headers']['Origin'].toString() === '') {
        throw new _error.default.ParameterRequired('Origin', 'OptionsObjectInput');
      }
    }
    /**
     * Upload the object. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/put.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.Cache-Control - Object cache control
     * @param options.Content-Encoding - Object content encoding
     * @param options.Content-Length - Object content size
     * @param options.Content-MD5 - Object MD5sum
     * @param options.Content-Type - Object content type
     * @param options.Expect - Used to indicate that particular server behaviors are required by the client
     * @param options.X-QS-Copy-Source - Copy source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Copy-Source-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Copy-Source-If-Match - Check whether the copy source matches
     * @param options.X-QS-Copy-Source-If-Modified-Since - Check whether the copy source has been modified
     * @param options.X-QS-Copy-Source-If-None-Match - Check whether the copy source does not match
     * @param options.X-QS-Copy-Source-If-Unmodified-Since - Check whether the copy source has not been modified
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Fetch-If-Unmodified-Since - Check whether fetch target object has not been modified
     * @param options.X-QS-Fetch-Source - Fetch source, should be a valid url
     * @param options.X-QS-MetaData - User-defined metadata
     * @param options.X-QS-Metadata-Directive - Use for modified metadata, valid (COPY/REPLACE)
     * @param options.X-QS-Move-Source - Move source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     *
     * @return {Promise} axios response
     */


    putObject(object_key, options) {
      options = options || {};
      return this.putObjectRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build PutObject's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/put.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.Cache-Control - Object cache control
     * @param options.Content-Encoding - Object content encoding
     * @param options.Content-Length - Object content size
     * @param options.Content-MD5 - Object MD5sum
     * @param options.Content-Type - Object content type
     * @param options.Expect - Used to indicate that particular server behaviors are required by the client
     * @param options.X-QS-Copy-Source - Copy source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Copy-Source-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Copy-Source-If-Match - Check whether the copy source matches
     * @param options.X-QS-Copy-Source-If-Modified-Since - Check whether the copy source has been modified
     * @param options.X-QS-Copy-Source-If-None-Match - Check whether the copy source does not match
     * @param options.X-QS-Copy-Source-If-Unmodified-Since - Check whether the copy source has not been modified
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Fetch-If-Unmodified-Since - Check whether fetch target object has not been modified
     * @param options.X-QS-Fetch-Source - Fetch source, should be a valid url
     * @param options.X-QS-MetaData - User-defined metadata
     * @param options.X-QS-Metadata-Directive - Use for modified metadata, valid (COPY/REPLACE)
     * @param options.X-QS-Move-Source - Move source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Storage-Class - Specify the storage class for object
     *
     * @return Signer
     */


    putObjectRequest(object_key, options = {}) {
      const operation = {
        api: 'PutObject',
        method: 'PUT',
        uri: '/<bucket-name>/<object-key>',
        params: {},
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'cache-control': options['cache-control'] || options['Cache-Control'] || undefined,
          'content-encoding': options['content-encoding'] || options['Content-Encoding'] || undefined,
          'content-length': options['content-length'] || options['Content-Length'] || undefined,
          'content-md5': options['content-md5'] || options['Content-MD5'] || undefined,
          'content-type': options['content-type'] || options['Content-Type'] || undefined,
          expect: options['expect'] || options['Expect'] || undefined,
          'x-qs-copy-source': options['x-qs-copy-source'] || options['X-QS-Copy-Source'] || undefined,
          'x-qs-copy-source-encryption-customer-algorithm': options['x-qs-copy-source-encryption-customer-algorithm'] || options['X-QS-Copy-Source-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-copy-source-encryption-customer-key': options['x-qs-copy-source-encryption-customer-key'] || options['X-QS-Copy-Source-Encryption-Customer-Key'] || undefined,
          'x-qs-copy-source-encryption-customer-key-md5': options['x-qs-copy-source-encryption-customer-key-md5'] || options['X-QS-Copy-Source-Encryption-Customer-Key-MD5'] || undefined,
          'x-qs-copy-source-if-match': options['x-qs-copy-source-if-match'] || options['X-QS-Copy-Source-If-Match'] || undefined,
          'x-qs-copy-source-if-modified-since': options['x-qs-copy-source-if-modified-since'] || options['X-QS-Copy-Source-If-Modified-Since'] || undefined,
          'x-qs-copy-source-if-none-match': options['x-qs-copy-source-if-none-match'] || options['X-QS-Copy-Source-If-None-Match'] || undefined,
          'x-qs-copy-source-if-unmodified-since': options['x-qs-copy-source-if-unmodified-since'] || options['X-QS-Copy-Source-If-Unmodified-Since'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined,
          'x-qs-fetch-if-unmodified-since': options['x-qs-fetch-if-unmodified-since'] || options['X-QS-Fetch-If-Unmodified-Since'] || undefined,
          'x-qs-fetch-source': options['x-qs-fetch-source'] || options['X-QS-Fetch-Source'] || undefined,
          'x-qs-metadata': options['x-qs-metadata'] || options['X-QS-MetaData'] || undefined,
          'x-qs-metadata-directive': options['x-qs-metadata-directive'] || options['X-QS-Metadata-Directive'] || undefined,
          'x-qs-move-source': options['x-qs-move-source'] || options['X-QS-Move-Source'] || undefined,
          'x-qs-storage-class': options['x-qs-storage-class'] || options['X-QS-Storage-Class'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: options['body'] || undefined
      };
      operation.properties['object-key'] = object_key;
      this.putObjectValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    putObjectValidate(operation) {
      if (operation['headers'] !== undefined && operation['headers']['X-QS-Metadata-Directive'] !== undefined && operation['headers']['X-QS-Metadata-Directive'].toString() !== '') {
        const x_qs_metadata_directive_valid_values = ['COPY', 'REPLACE'];

        if (x_qs_metadata_directive_valid_values.indexOf(operation['headers']['X-QS-Metadata-Directive']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('X-QS-Metadata-Directive', operation['headers']['X-QS-Metadata-Directive'], x_qs_metadata_directive_valid_values);
        }
      }

      if (operation['headers'] !== undefined && operation['headers']['X-QS-Storage-Class'] !== undefined && operation['headers']['X-QS-Storage-Class'].toString() !== '') {
        const x_qs_storage_class_valid_values = ['STANDARD', 'STANDARD_IA'];

        if (x_qs_storage_class_valid_values.indexOf(operation['headers']['X-QS-Storage-Class']) === -1) {
          throw new _error.default.ParameterValueNotAllowed('X-QS-Storage-Class', operation['headers']['X-QS-Storage-Class'], x_qs_storage_class_valid_values);
        }
      }
    }
    /**
     * Upload object multipart. [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/multipart/upload_multipart.html)
     * @param {string} object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Length - Object multipart content length
     * @param options.Content-MD5 - Object multipart content MD5sum
     * @param options.X-QS-Copy-Range - Specify range of the source object
     * @param options.X-QS-Copy-Source - Copy source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Copy-Source-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Copy-Source-If-Match - Check whether the Etag of copy source matches the specified value
     * @param options.X-QS-Copy-Source-If-Modified-Since - Check whether the copy source has been modified since the specified date
     * @param options.X-QS-Copy-Source-If-None-Match - Check whether the Etag of copy source does not matches the specified value
     * @param options.X-QS-Copy-Source-If-Unmodified-Since - Check whether the copy source has not been unmodified since the specified date
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.part_number - Object multipart upload part number
     * @param options.upload_id - Object multipart upload ID
     *
     * @return {Promise} axios response
     */


    uploadMultipart(object_key, options) {
      options = options || {};
      return this.uploadMultipartRequest(object_key, options).send();
    }
    /**
     * @ignore
     * Build UploadMultipart's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/object/multipart/upload_multipart.html)
     * @param object_key The object key
     * @param {Object} options - User input options;
     * @param options.Content-Length - Object multipart content length
     * @param options.Content-MD5 - Object multipart content MD5sum
     * @param options.X-QS-Copy-Range - Specify range of the source object
     * @param options.X-QS-Copy-Source - Copy source, format (/<bucket-name>/<object-key>)
     * @param options.X-QS-Copy-Source-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Copy-Source-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.X-QS-Copy-Source-If-Match - Check whether the Etag of copy source matches the specified value
     * @param options.X-QS-Copy-Source-If-Modified-Since - Check whether the copy source has been modified since the specified date
     * @param options.X-QS-Copy-Source-If-None-Match - Check whether the Etag of copy source does not matches the specified value
     * @param options.X-QS-Copy-Source-If-Unmodified-Since - Check whether the copy source has not been unmodified since the specified date
     * @param options.X-QS-Encryption-Customer-Algorithm - Encryption algorithm of the object
     * @param options.X-QS-Encryption-Customer-Key - Encryption key of the object
     * @param options.X-QS-Encryption-Customer-Key-MD5 - MD5sum of encryption key
     * @param options.part_number - Object multipart upload part number
     * @param options.upload_id - Object multipart upload ID
     *
     * @return Signer
     */


    uploadMultipartRequest(object_key, options = {}) {
      const operation = {
        api: 'UploadMultipart',
        method: 'PUT',
        uri: '/<bucket-name>/<object-key>',
        params: {
          part_number: options['part_number'] || undefined,
          upload_id: options['upload_id'] || undefined
        },
        headers: {
          host: this.properties.zone + '.' + this.config.host,
          'content-length': options['content-length'] || options['Content-Length'] || undefined,
          'content-md5': options['content-md5'] || options['Content-MD5'] || undefined,
          'x-qs-copy-range': options['x-qs-copy-range'] || options['X-QS-Copy-Range'] || undefined,
          'x-qs-copy-source': options['x-qs-copy-source'] || options['X-QS-Copy-Source'] || undefined,
          'x-qs-copy-source-encryption-customer-algorithm': options['x-qs-copy-source-encryption-customer-algorithm'] || options['X-QS-Copy-Source-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-copy-source-encryption-customer-key': options['x-qs-copy-source-encryption-customer-key'] || options['X-QS-Copy-Source-Encryption-Customer-Key'] || undefined,
          'x-qs-copy-source-encryption-customer-key-md5': options['x-qs-copy-source-encryption-customer-key-md5'] || options['X-QS-Copy-Source-Encryption-Customer-Key-MD5'] || undefined,
          'x-qs-copy-source-if-match': options['x-qs-copy-source-if-match'] || options['X-QS-Copy-Source-If-Match'] || undefined,
          'x-qs-copy-source-if-modified-since': options['x-qs-copy-source-if-modified-since'] || options['X-QS-Copy-Source-If-Modified-Since'] || undefined,
          'x-qs-copy-source-if-none-match': options['x-qs-copy-source-if-none-match'] || options['X-QS-Copy-Source-If-None-Match'] || undefined,
          'x-qs-copy-source-if-unmodified-since': options['x-qs-copy-source-if-unmodified-since'] || options['X-QS-Copy-Source-If-Unmodified-Since'] || undefined,
          'x-qs-encryption-customer-algorithm': options['x-qs-encryption-customer-algorithm'] || options['X-QS-Encryption-Customer-Algorithm'] || undefined,
          'x-qs-encryption-customer-key': options['x-qs-encryption-customer-key'] || options['X-QS-Encryption-Customer-Key'] || undefined,
          'x-qs-encryption-customer-key-md5': options['x-qs-encryption-customer-key-md5'] || options['X-QS-Encryption-Customer-Key-MD5'] || undefined
        },
        elements: {},
        properties: this.properties,
        body: options['body'] || undefined
      };
      operation.properties['object-key'] = object_key;
      this.uploadMultipartValidate(operation);
      return new _request.default(this.config, operation).build();
    }
    /**
     * @ignore
     */
    // eslint-disable-next-line no-unused-vars


    uploadMultipartValidate(operation) {
      if (operation['params'] === undefined || operation['params']['part_number'] === undefined || operation['params']['part_number'].toString() === '') {
        throw new _error.default.ParameterRequired('part_number', 'UploadMultipartInput');
      }

      if (operation['params'] === undefined || operation['params']['upload_id'] === undefined || operation['params']['upload_id'].toString() === '') {
        throw new _error.default.ParameterRequired('upload_id', 'UploadMultipartInput');
      }
    }

  }

  var _default = Bucket;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/qingstor/qingstor.js":
/*!**********************************!*\
  !*** ./src/qingstor/qingstor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../request */ "./src/request.js"), __webpack_require__(/*! ./bucket */ "./src/qingstor/bucket.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _request, _bucket) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _request = _interopRequireDefault(_request);
  _bucket = _interopRequireDefault(_bucket);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------

  /**
   * QingStor Module
   * @param {Object} config object
   */
  class QingStor {
    constructor(config) {
      this.config = config;
    }
    /**
     * Retrieve the bucket list. [Documentation URL](https://docs.qingcloud.com/qingstor/api/service/get.html)
     * @param {Object} options - User input options;
     * @param options.Location - Limits results to buckets that in the location
     * @param options.limit - Results count limit
     * @param options.offset - Limit results to keys that start at this offset
     *
     * @return {Promise} axios response
     */


    listBuckets(options) {
      options = options || {};
      return this.listBucketsRequest(options).send();
    }
    /**
     * @ignore
     * Build ListBuckets's request
     * [Documentation URL](https://docs.qingcloud.com/qingstor/api/service/get.html)
     * @param {Object} options - User input options;
     * @param options.Location - Limits results to buckets that in the location
     * @param options.limit - Results count limit
     * @param options.offset - Limit results to keys that start at this offset
     *
     * @return Signer
     */


    listBucketsRequest(options = {}) {
      const operation = {
        api: 'ListBuckets',
        method: 'GET',
        uri: '/',
        params: {
          limit: options['limit'] || undefined,
          offset: options['offset'] || undefined
        },
        headers: {
          host: this.config.host,
          location: options['location'] || options['Location'] || undefined
        },
        elements: {},
        properties: {},
        body: undefined
      };
      this.listBucketsValidate(operation);
      return new _request.default(this.config, operation).build();
    } // eslint-disable-next-line no-unused-vars


    listBucketsValidate(operation) {}

    Bucket(bucket_name, zone) {
      const properties = {
        'bucket-name': bucket_name,
        zone: zone
      };
      return new _bucket.default(this.config, properties);
    }

  }

  var _default = QingStor;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./sign */ "./src/sign.js"), __webpack_require__(/*! ./build */ "./src/build.js"), __webpack_require__(/*! ./http_client */ "./src/http_client.js"), __webpack_require__(/*! ./utils */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _sign, _build, _http_client, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _sign = _interopRequireDefault(_sign);
  _build = _interopRequireDefault(_build);
  _http_client = _interopRequireDefault(_http_client);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Request {
    constructor(config, operation) {
      this.config = config;
      this.operation = operation;
    }

    build() {
      this.operation = new _build.default(this.config, this.operation).parse();
      return this;
    }

    sign() {
      if (this.config.signature_server) {
        return (0, _http_client.default)({
          url: this.config.signature_server,
          method: 'POST',
          data: this.operation
        }).then(res => {
          const {
            authorization
          } = res.data;
          this.operation.headers.authorization = authorization;
          return this;
        });
      }

      this.operation = new _sign.default(this.config.access_key_id, this.config.secret_access_key).sign(this.operation);
      return Promise.resolve(this);
    }

    signQuery(expiresTTL) {
      if (this.config.signature_server) {
        return (0, _http_client.default)({
          url: this.config.signature_server,
          method: 'POST',
          data: _objectSpread2({}, this.operation, {
            expiresTTL: expiresTTL
          })
        }).then(res => {
          const {
            access_key_id,
            signature,
            expires
          } = res.data;
          this.operation.uri = (0, _utils.buildUri)(this.operation.endpoint, this.operation.path, _objectSpread2({}, this.operation.params, {
            access_key_id,
            signature,
            expires
          }));
          return this;
        });
      }

      this.operation = new _sign.default(this.config.access_key_id, this.config.secret_access_key).signQuery(_objectSpread2({}, this.operation, {
        expires: parseInt(Date.now() / 1000 + expiresTTL)
      }));
      return Promise.resolve(this);
    }

    applySignature(signature) {
      this.operation.headers.Authorization = signature;
      return this;
    }

    applyQuerySignature(access_key_id, signature, expires) {
      this.operation.params = Object.assign(this.operation.params, {
        access_key_id,
        signature,
        expires
      });
      return this;
    }

    send() {
      return this.sign().then(() => {
        const axiosConfig = (0, _utils.isFunction)(this.config.getAxiosConfig) ? this.config.getAxiosConfig(this.operation) : {};
        return (0, _http_client.default)(_objectSpread2({}, axiosConfig, {
          url: this.operation.uri,
          method: this.operation.method,
          headers: this.operation.headers,
          data: this.operation.body || ''
        }));
      });
    }

  }

  var _default = Request;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/sign.js":
/*!*********************!*\
  !*** ./src/sign.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js"), __webpack_require__(/*! crypto-js/hmac-sha256 */ "./node_modules/crypto-js/hmac-sha256.js"), __webpack_require__(/*! crypto-js/enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./utils */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _loglevel, _hmacSha, _encBase, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _loglevel = _interopRequireDefault(_loglevel);
  _hmacSha = _interopRequireDefault(_hmacSha);
  _encBase = _interopRequireDefault(_encBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Signer {
    constructor(access_key_id, secret_access_key) {
      this.access_key_id = access_key_id;
      this.secret_access_key = secret_access_key;
    }

    getSignature(operation) {
      this._setOperation(operation);

      const originalHeaders = this.operation.headers;
      const parsedHeaders = Object.keys(originalHeaders).filter(key => {
        const _key = key.toLowerCase();

        return _key === 'x-qs-date' || _key === 'date';
      }).reduce((headers, key) => {
        headers[key.toLowerCase()] = originalHeaders[key];
        return headers;
      }, {});
      const signedDate = parsedHeaders['x-qs-date'] || parsedHeaders['date'] || new Date().toUTCString();
      return {
        authorization: "QS ".concat(this.access_key_id, ":").concat(this.getAuthorization()),
        signed_date: signedDate
      };
    }

    getQuerySignature(operation) {
      this._setOperation(operation);

      const now = Date.now(); // todo throw error if expiresTTL is invaild

      const expiresTTL = parseInt(operation.expiresTTL);
      const expires = parseInt(now / 1000 + expiresTTL);
      return {
        expires,
        signature: this.calculateSignature(this.getQueryStringToSign(expires)),
        access_key_id: this.access_key_id,
        signed_date: new Date(now).toUTCString()
      };
    }

    sign(operation) {
      this._setOperation(operation);

      this.operation.headers.authorization = "QS ".concat(this.access_key_id, ":").concat(this.getAuthorization());
      return this.operation;
    }

    signQuery(operation) {
      this._setOperation(operation);

      delete this.operation.headers['x-qs-date'];
      delete this.operation.headers['host'];
      delete this.operation.headers['content-length'];
      delete this.operation.headers['content-type'];
      delete this.operation.headers['user-agent'];
      const data = {
        signature: this.calculateSignature(this.getQueryStringToSign(operation.expires)),
        access_key_id: this.access_key_id,
        expires: operation.expires
      };
      this.operation.params = Object.assign(this.operation.params, data);
      this.operation.uri = (0, _utils.buildUri)(this.operation.endpoint, this.operation.path, this.operation.params);

      _loglevel.default.debug("QingStor query request url: ".concat(this.operation.uri));

      return this.operation;
    }

    getContentMD5() {
      let parsedContentMD5 = '';

      if (this.operation.headers['content-md5']) {
        parsedContentMD5 = this.operation.headers['content-md5'];
      }

      return parsedContentMD5;
    }

    getContentType() {
      let parsedContentType = '';

      if (this.operation.headers['content-type']) {
        parsedContentType = this.operation.headers['content-type'];
      }

      if (false) {}

      return parsedContentType;
    }

    getCanonicalizedHeaders() {
      return Object.keys(this.operation.headers).filter(key => {
        return key.toLowerCase().startsWith('x-qs-');
      }).sort().map(key => {
        return "".concat(key.toLowerCase().trim(), ":").concat(this.operation.headers[key].trim());
      }).join('\n');
    }

    getCanonicalizedResource() {
      let canonicalizedResource = this.operation.path;
      const parsedParams = this.operation.params || {};
      const query = [];

      if (Object.keys(parsedParams).length !== 0) {
        for (const i of Object.keys(parsedParams)) {
          if (this.isSubResource(i)) {
            if (parsedParams[i] !== '') {
              query.push("".concat(i, "=").concat(parsedParams[i]));
            } else {
              query.push(i);
            }
          }
        }
      }

      const joinedKeys = query.sort().join('&');

      if (joinedKeys) {
        const separator = canonicalizedResource.includes('?') ? '&' : '?';
        canonicalizedResource += separator + joinedKeys;
      }

      return canonicalizedResource;
    }

    getAuthorization() {
      return this.calculateSignature(this.getStringToSign());
    }

    getStringToSign() {
      const stringToSign = [this.operation.method, this.getContentMD5(), this.getContentType(), this.operation.headers.date || '', this.getCanonicalizedHeaders(), this.getCanonicalizedResource()].join('\n');

      _loglevel.default.debug("QingStor request string to sign: ".concat(stringToSign));

      return stringToSign;
    }

    getQueryStringToSign(expires) {
      const stringToSign = [this.operation.method, this.getContentMD5(), this.getContentType(), expires];
      const stringToHeaders = this.getCanonicalizedHeaders();

      if (stringToHeaders) {
        stringToSign.push(stringToHeaders);
      }

      stringToSign.push(this.getCanonicalizedResource());

      _loglevel.default.debug("QingStor query request string to sign: ".concat(stringToSign.join('\n')));

      return stringToSign.join('\n');
    }

    calculateSignature(stringToSign) {
      const signature = _encBase.default.stringify((0, _hmacSha.default)(stringToSign, this.secret_access_key));

      _loglevel.default.debug('QingStor query request authorization: ' + signature);

      return signature;
    }

    isSubResource(key) {
      return ['acl', 'cors', 'delete', 'mirror', 'part_number', 'policy', 'stats', 'upload_id', 'uploads', 'lifecycle', 'notification', 'response-expires', 'response-cache-control', 'response-content-type', 'response-content-language', 'response-content-encoding', 'response-content-disposition'].includes(key);
    }

    _setOperation(operation) {
      this.operation = _objectSpread2({
        headers: {}
      }, operation);
    }

  }

  var _default = Signer;
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _querystring) {
  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.fixedEncodeURIComponent = fixedEncodeURIComponent;
  _exports.buildUri = buildUri;
  _exports.isFunction = isFunction;
  _exports.filterUnsafeHeaders = filterUnsafeHeaders;

  // To be more stringent in adhering to RFC 3986 (which reserves !, ', (, ), and *),
  // even though these characters have no formalized URI delimiting uses
  function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  function buildUri(endpoint, path, params) {
    const separator = path.includes('?') ? '&' : '?';
    return "".concat(endpoint).concat(path).concat(separator).concat((0, _querystring.stringify)(params));
  }

  function isFunction(fn) {
    return (typeof fn !== 'undefined' ? Object.prototype.toString.call(fn) : 0) === '[object Function]';
  }

  const UNSAFA_HEADERS = ['host', 'content-length', 'user-agent'];

  function filterUnsafeHeaders(headers) {
    if (typeof window === 'undefined') {
      return headers;
    }

    return Object.keys(headers).reduce((safeHeaders, key) => {
      if (UNSAFA_HEADERS.indexOf(key) === -1) {
        safeHeaders[key] = headers[key];
      }

      return safeHeaders;
    }, {});
  }
});

/***/ }),

/***/ "./src/version.js":
/*!************************!*\
  !*** ./src/version.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // +-------------------------------------------------------------------------
  // | Copyright (C) 2016 Yunify, Inc.
  // +-------------------------------------------------------------------------
  // | Licensed under the Apache License, Version 2.0 (the "License");
  // | you may not use this work except in compliance with the License.
  // | You may obtain a copy of the License in the LICENSE file, or at:
  // |
  // | http://www.apache.org/licenses/LICENSE-2.0
  // |
  // | Unless required by applicable law or agreed to in writing, software
  // | distributed under the License is distributed on an "AS IS" BASIS,
  // | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // | See the License for the specific language governing permissions and
  // | limitations under the License.
  // +-------------------------------------------------------------------------
  var _default = '3.0.1';
  _exports.default = _default;
  module.exports = exports["default"];
});

/***/ })

/******/ });
});