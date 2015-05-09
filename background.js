chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {
    urls:[
      // SOHU TV AD
      "http://atanx.alicdn.com/t/tanxssp.js",
    ]
  },
  ["blocking"]
);