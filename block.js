$(function(){
    // Remove BAIDU AD
    $('iframe[src^="http://cpro.baidu.com/"]').remove();
    $('div[id^="baidu_clb_slot"]').remove();
    $('img[src^="http://drmcmm.baidu.com/"]').remove();

    // Remove 163 AD
    $('iframe[src^="http://img1.126.net/"], iframe[src^="http://g.163.com/"]').remove();
    $('img[src^="http://img1.126.net/"]').remove();

    // Remove WASU AD
    $('img[src^="http://edvertiser.wasu.cn/"]').remove();
});
