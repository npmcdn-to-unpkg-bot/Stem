var Player = React.createClass({
    componentDidMount: function() {
        var p = new Progressor({
            media : document.getElementsByTagName('audio')[0],
            bar : document.getElementById('progressbar'),
            text : "Echoplex by Nine Inch Nails",    
            time : document.getElementById('time')    
        });
        audio.play();
        $('.pause').css("display","inline");
        $('.play').css("display","none");
    },

    playPauseClick: function() {
        var audio = document.getElementsByTagName('audio')[0];

        if (audio.paused == true) {
            audio.play();
            $('.pause').css("display","inline");
            $('.play').css("display","none");
        } else {
            audio.pause();
            $('.pause').css("display","none");
            $('.play').css("display","inline");
        }
    },

    muteClick: function() {
        var audio = document.getElementsByTagName('audio')[0];

        if (audio.muted == false) {
            audio.muted = true;
            $('#muted').css("display","inline");
            $('#unmuted').css("display","none");
        } else {
            audio.muted = false;
            $('#muted').css("display","none");
            $('#unmuted').css("display","inline");
        }
    },

    volumeChange: function() {
        var audio = document.getElementsByTagName('audio')[0];
        audio.volume = volumeBar.value;
    },

    render: function() {
        var self = this;

        return (
            <div className="player">
                <div className="art">
                    <a onClick={this.playPauseClick}>
                        <i className="play icon-play-outline"></i>
                        <i className="pause icon-pause-1"></i>
                        <img classNamae="art" src="http://i.telegraph.co.uk/multimedia/archive/01816/king_1816055i.jpg" />
                    </a>
                </div>
                <div className="controls">
                    <span className="left">
                        <a onClick={this.playPauseClick}>
                            <i className="play icon-play-1 h2"></i>
                            <i className="pause icon-pause-1 h2"></i>
                        </a>
                    </span>
                    <span className="center">
                        <h3>
                            Song Title
                        </h3>
                        <h6>
                            Artist Name
                        </h6>
                    </span>
                    <span className="pull-right"> 
                        <a onClick={this.muteClick} id="mute">
                            <i id="unmuted" className="icon-volume-up h3"></i>
                            <i id="muted" className="icon-volume-off h3"></i>
                        </a>
                        <a><i className="icon-heart-empty h3"></i></a>
                        <a><i className="icon-up-circle h3"></i></a>
                    </span>
                </div>
                <div id="progressbar" className="controls"></div>
                <span className="pull-right">
                    <h6>Current song time: <span id="time"></span>.</h6>
                </span>
                <div className="controls">
                    <span className="tag">Tag One</span>
                    <span className="tag">Tag Two Long</span>
                </div>  

                <audio id="audio" preload="auto" controls>
                    <source src="http://ejb.github.io/progressor.js/demos/echoplex.ogg" type="audio/ogg" />
                    <source src="http://ejb.github.io/progressor.js/demos/echoplex.mp3" type="audio/mp3" />
                </audio>
            </div>
        );
    }

});
