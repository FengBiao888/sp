var fxa = '<br>接下来更精彩，请分享到微信群<br>即可<b style="font-size: 22px;color: red">免流量</b>继续观看<br><br>';
var fxa1 = '<br>分享成功，请再分享到<b style="font-size: 25px;color: red">1</b>个任意不同<br>的群即可观看<br><br>';
var fxa2 = '<br><b style="font-size: 22px;color: red">分享失败</b><br>注意：分享到相同的群会失败<br>请继续分享到<b style="font-size: 22px;color: red">1</b>个不同的群<br><br>';
var fxa3 = '<br>分享完成，仅最后一步啦！<br>请将此视频分享到<b style="font-size: 22px;color: red">朋友圈</b>即可<br>马上观看<br><br>';

alertGo()

$('#fenxiang').click(function () {
    alertGo()
})

// 弹框
function alertGo(a = fxa) {
    var d = $('#lly_dialog');
    d.show();
    
    d.find("#lly_dialog_msg").html(a);
    d.find("#lly_dialog_btn").html('我知道了');
    d.find("#lly_dialog_btn").off('click').on('click', function () {
        d.hide();
    })
}

// 检查物理返回
// goRutern()
// function goRutern() {
//     pushHistory();
//     window.addEventListener("popstate", function (e) {
//         // 返回广告
//         self.location.href = "http://tk2sfdah.dayishengshi.com/adv.php"
//     }, false);
//     function pushHistory() {
//         var state = {
//             title: "title",
//             url: "#"
//         };
//         window.history.pushState(state, "title", "#");
//     }
// }


//显示功能
function fxpyq() {
    wx.showMenuItems({
        menuList: [
            'menuItem:share:timeline' // 分享到朋友圈
        ]
    });
}

function fxpy() {
    wx.showMenuItems({
        menuList: [
            'menuItem:share:appMessage' // 分享到朋友
        ]
    });
}

//隐藏功能
function ycpy() {
    wx.hideMenuItems({
        menuList: [
            'menuItem:share:appMessage', // 分享到朋友

        ]
    });
}
function ycpyq() {
    wx.hideMenuItems({
        menuList: [
            'menuItem:share:timeline', // 分享到朋友圈
        ]
    });
}



// 微信分享接口

$.ajax({
    url: "http://a.fengbiao888.cn/jssdk/wx_config/data.php",
    async: false,
    data: { myurl: location.href.split('#')[0] },
    dataType: "json",
    success: function (res) {
        // console.log(res);
        // var res = JSON.parse(result);
        wx.config({
            debug: false,
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems',
                'hideOptionMenu']
        });


    }
});
var fxTime = 0
wx.ready(function () {
    ycpyq()
    wx.onMenuShareAppMessage({
        title: '视频',
        desc: '快乐',
        link: 'http://a.fengbiao888.cn',
        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
        type: '',
        dataUrl: '',
        success: function () {
            if (fxTime == 0) {
                alertGo(fxa1)
                fxTime++
            } else if (fxTime == 1) {
                alertGo(fxa2)
                fxTime++
            } else if (fxTime == 2) {
                // fxTime++
                ycpy()
                fxpyq()
                pyq()
                alertGo(fxa3)
            }

        },
        cancel: function () {

        }
    });
});
//朋友圈
function pyq() {
    wx.onMenuShareTimeline({
        title: '视频',
        desc: '快乐',
        link: 'http://a.fengbiao888.cn',
        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
        type: '',
        dataUrl: '',
        success: function () {
            fxpyq()
            var vodeoPlay = 1 
            sessionStorage.setItem('vodeoPlay', '1')
            sessionStorage.setItem('dian', '2')
            window.location.href='./index.html';
        },
        cancel: function () {

        }
    });
}
