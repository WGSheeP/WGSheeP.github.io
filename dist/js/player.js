window.onload=function()
{
	var musicPlayer=document.getElementsByClassName("musicPlayer")[0];
	var playBox=document.getElementById("music-player");
	var closed=playBox.getElementsByClassName("closed")[0];
	var info=playBox.getElementsByClassName("info")[0];
	var playList=playBox.getElementsByClassName("jp-playlist")[0];
	var currentTime=playBox.getElementsByClassName("jp-current-time")[0];
	var previous=playBox.getElementsByClassName("jp-previous")[0];
	var play=playBox.getElementsByClassName("jp-play")[0];
	var pause=playBox.getElementsByClassName("jp-pause")[0];
	var next=playBox.getElementsByClassName("jp-next")[0];
	var volumeBar=playBox.getElementsByClassName("jp-volume-bar")[0];
	var barValue=playBox.getElementsByClassName("jp-volume-bar-value")[0];
	var volumeMax=playBox.getElementsByClassName("jp-volume-max")[0];
	var mute=playBox.getElementsByClassName("jp-mute")[0];
	musicPlayer.addEventListener("click",showIn,false);
	closed.addEventListener("click",showOut,false);
	function showIn()
	{
		playBox.style.top="50%";
		playBox.style.opacity="1";
		playBox.style.transform="scale(1)";
		closed.style.right="-27px";
		closed.style.top="-27px";
		closed.style.opacity="1";
		

	}
	function showOut()
	{
		playBox.style.top="-1000px";
		playBox.style.opacity="0";
		playBox.style.transform="scale(0)";
		
	}
	//根据输入关键字，调用在线接口搜索音乐
	       $('.search-input').on('input', function() {
//      	alert(1)
            if ( $(this).val() ) {
                $.ajax({
                    url: 'https://works.miaov.com/music/index.php',
                    data: {
                        action: 'search',
                        word: $(this).val()
                    },
                    success: function(rs) {
                        if (!rs.code) {
                            var html = '';
                            rs.items.forEach(function(value, index) {
                                html += `<li data-sid="${value.sid}" data-ssid="${value.ssid}" data-song-url="${value.url}">${value.title} - [${value.artist_name}]</li>`;
                            });
                            $('.search-list').html( html );
                        }
                    }
                })
            }
        });
        console.log(1)
        $('.search-list').delegate('li', 'click', function() {
        	alert(2)

            $(play).attr('src', $(this).data('songUrl'));

            $.ajax({
                url: 'https://works.miaov.com/music/index.php',
                data: {
                    action: 'getlyric',
                    sid: $(this).data('sid'),
                    ssid: $(this).data('ssid')
                },
                success: function(rs) {
                    if (!rs.code) {
                        console.log(rs);
                    }
                }
            })

        });


	

};