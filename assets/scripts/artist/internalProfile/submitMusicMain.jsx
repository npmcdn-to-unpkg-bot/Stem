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
                <ArtistInternalSideBar />
                <div className="content-with-sidebar bg-white">  
                    <div className="pad-box-md">
                        <h3>Submit Music</h3>
                        <p>Add music to your library</p>
                    </div>
                    { this.state.uploadSuccessful ? <ArtistUploadSuccess /> : <UploadForm /> }
                </div>     
            </div>
        )
    }
});