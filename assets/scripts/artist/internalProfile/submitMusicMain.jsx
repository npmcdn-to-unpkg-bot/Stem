var SubmitMusicMain = React.createClass({
    getInitialState: function() {
        return {
            uploadSuccessful: false
        };
    },

    render: function () {
        var self = this;

        return (
            <div className="artist-internal-wrapper-fluid">
                <div className="bg-white">  
                    <div>
                        <div className="pad-box-lg">
                            <h3>Submit Music</h3>
                            <p>Add music to your library</p>
                        </div>    
                            <SubmitMusicAlbum />
                            <SubmitMusicTrack />
                    </div>    
                </div>     
            </div>
        )
    }
});