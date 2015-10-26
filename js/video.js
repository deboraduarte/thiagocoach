$(function(){
  $('#player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' })
  // If you want to keep full screen on window resize
  $(window).resize(function(){
    $('#player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px', })
  })
  $('ul.nav-group li a').each(function(){
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
    if($(this).attr('href') == pgurl){
        $(this).addClass('a-visited')
    }
  })

});

var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

function onYouTubeIframeAPIReady(){
    var player = new YT.Player('player',{
        videoId: 'TtVxbTuOLTU' ,
        playerVars: {
         'controls': 0 ,
         'autohide': 0
        },
        events: {
            'onReady' : onPlayerReady,
            'onStateChag': onPlayerStateChange
        }
    })
}

function onPlayerReady(event){
    $('#btn-play').on('click', function() {
        $('.video').css('display', 'block')
        $('#btn-play').css('display', 'none')
        $('#btn-pause').css('display','block')
        $('.content').css('visibility', 'hidden')
        event.target.playVideo()
    })
    $('#btn-pause').on('click', function() {
        $('.video').css('display', 'none')
        $('#btn-play').css('display', 'block')
        $('#btn-pause').css('display','none')
        $('.content').css('visibility', '')
        event.target.stopVideo()
    })

}


function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000)
        done = true
    }
}
autoplay = 0
function activeMenu(event){

}

