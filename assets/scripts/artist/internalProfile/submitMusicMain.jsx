var SubmitMusicMain = React.createClass({
    render: function () {
        var self = this;

        return (
            <div className="artist-internal-wrapper-fluid pad-b-lg">
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