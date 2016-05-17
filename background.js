chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {
    urls:[
      // SOHU TV AD
      "http://atanx.alicdn.com/t/tanxssp.js",
      // JD AD
      "http://x.jd.com/exsites?*",
      // BAIDU 
      "http://hm.baidu.com/hm.js?*",
      "http://hm.baidu.com/hm.gif?*",
      "http://eclick.baidu.com/fp.htm?*",
      "http://pos.baidu.com/*",
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
      "http://pl.hd.sohu.com/videolist?*",
      "http://hotvrs.js.tv.itc.cn/videoinfo/*",
      "http://v.aty.sohu.com/vp?*",
      "http://search.vrs.tv.sohu.com/p?*",

      // Google 
      "http://partner.googleadservices.com/gpt/*",

      "http://b.scorecardresearch.com/*",
      "http://beacon.krxd.net/*",
      "http://odb.outbrain.com/utils/get?*",
      "http://secure-us.imrworldwide.com/cgi-bin/m?*",
      "http://stats.bbc.co.uk/o.gif?*",
      "http://sa.bbc.com/b/ss/bbcwglobalprod/*",
      "http://ping.chartbeat.net/ping?*",
      "http://sa.bbc.co.uk/bbc/bbc/s?*",
      "http://static.chartbeat.com/js/chartbeat.js",
      "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",

      // CNZZ 
      "http://*.cnzz.com/z_stat.php*",
    ]
  },
  ["blocking"]
);
