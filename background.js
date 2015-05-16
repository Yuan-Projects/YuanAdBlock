chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {
    urls:[
      // SOHU TV AD
      "http://atanx.alicdn.com/t/tanxssp.js",
      // JD AD
      "http://x.jd.com/exsites?*",
      // BAIDU 
      "http://eclick.baidu.com/fp.htm?*",
    ]
  },
  ["blocking"]
);
