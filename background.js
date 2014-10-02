
  // Block iQiyi AD
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls:[
      "*://p.tanx.com/*", 
      "*://b.scorecardresearch.com/*",
      "*://show.g.mediav.com/*",
      "*://hm.baidu.com/*",
      "*://iqiyi.irs01.com/*",
      "*://static.mediav.com/*",
      "*://cmts.iqiyi.com/*",
      "*://api.credit.iqiyi.com/*",
      "*://notice.iqiyi.com/*",
      "*://passport.iqiyi.com/*",
      "*://up.video.iqiyi.com/*",
      "*://openapi.baidu.com/*",
      "*://nlwl.iqiyi.com/*",
      "*://nl.notice.iqiyi.com/*",
      "*://mixer.video.iqiyi.com/*",
      //"*://cache.video.qiyi.com/*",
      //"*://static.iqiyi.com/*",
      
      "http://static.iqiyi.com/js/pingback/qa.js",
      "http://static.iqiyi.com/js/pingback/iwt.js",
      "http://cache.video.qiyi.com/jp/*",
      "http://static.iqiyi.com/js/qitan/*",
      "http://g.cn.miaozhen.com/*",
      "http://27.195.146.139/videos/other/*",
      // HAHAHAHAHA
      "http://data.video.qiyi.com/videos/other/*",
      ]},
    ["blocking"]);
    
    // Block ifeng Ad
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          return {cancel: details.url.indexOf("http://pubads.g.doubleclick.net/") != -1};
        },
        {urls: ["<all_urls>"]},
        ["blocking"]);
