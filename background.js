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
      "http://pos.baidu.com/acom?*",
      "http://pos.baidu.com/wh/o.htm?*",
      "http://cpro.baidustatic.com/cpro/ui/c.js",
      "http://sohu.irs01.com/irt?*",
      "http://b.scorecardresearch.com/beacon.js",
      "http://s.go.sohu.com/adgtr/?*",
      "http://count.vrs.sohu.com/*",
      "http://changyan.sohu.com/api*",
      "http://a1.itc.cn/pv/js/spv.*",
      "http://p.tanx.com/ex?*",
      "http://pl.hd.sohu.com/recommend_frag?*",
      "http://push.my.tv.sohu.com/getwebpush_sohuHD.globalNewPushTrigger.json?*",
      "http://score.my.tv.sohu.com/digg/get.do?*",
      "http://my.tv.sohu.com/user/card/static.json",
      "http://so.tv.sohu.com/star/playStarV2?*",
      "http://p.aty.sohu.com/p?*",
    ]
  },
  ["blocking"]
);
