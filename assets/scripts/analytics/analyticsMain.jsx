var ArtistInternalAnalytics = React.createClass({
  render: function () {
    return (
      <span>
        <ArtistInternalAnalyticsDownloads />
        <ArtistInternalAnalyticsPlays />
        <ArtistInternalAnalyticsTopInterests />
      </span>
    );
  }
});