var ArtistInternalAnalytics = React.createClass({
  render: function () {
    return (
      <div>
        <ArtistInternalAnalyticsDownloads />
        <ArtistInternalAnalyticsPlays />
        <ArtistInternalAnalyticsTopInterests />
      </div>
    );
  }
});