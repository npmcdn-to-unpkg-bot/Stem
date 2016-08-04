var Player = React.createClass({
    getInitialState: function() {
        return {
            displayPlayer: false
        };
    },

    componentDidMount: function() {
        var ap1 = new APlayer({
            element: document.getElementById('player'),                 // Optional, player element
            narrow: false,                                              // Optional, narrow style
            autoplay: false,                                            // Optional, autoplay song(s), not supported by mobile browsers
            showlrc: 0,                                                 // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
            mutex: true,                                                // Optional, pause other players when this player playing
            theme: '#fff',                                              // Optional, theme color, default: #b7daff
            loop: true,                                                 // Optional, loop play music, default: true
            preload: 'metadata',                                        // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'metadata' in Desktop, 'none' in mobile
            music: {                                                    // Required, music info, see: ###With playlist
                title: 'Preparation',                                   // Required, music title
                author: 'Hans Zimmer/Richard Harvey',                   // Required, music author
                url: 'http://devtest.qiniudn.com/Preparation.mp3',      // Required, music url
                pic: 'http://devtest.qiniudn.com/Preparation.jpg'       // Optional, music picture
            }
        });
        ap1.on('play', function () {
            console.log('play');
        });
        ap1.on('play', function () {
            console.log('play play');
        });
        ap1.on('pause', function () {
            console.log('pause');
        });
        ap1.on('canplay', function () {
            console.log('canplay');
        });
        ap1.on('playing', function () {
            console.log('playing');
        });
        ap1.on('ended', function () {
            console.log('ended');
        });
        ap1.on('error', function () {
            console.log('error');
        });
        ap1.init();
    },

    play: function() {
        var ap1 = document.getElementById('player');
        ap1.play();
    },

    render: function() {
        var self = this;

        return (
            <div className="player-container">
                <a onClick={this.play}>play</a>
                <div id="player" className="aplayer"></div>
            </div>
        );
    }

});
