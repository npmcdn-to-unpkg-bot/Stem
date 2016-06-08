var CreatorHeader = React.createClass({
  
  render: function() {
      var self = this;
  
    return (
      <div className="creator-wrapper">
        <div className="creator-banner"></div>
        <div className="creator-stats-wrapper">
          <div className="col-xs-3 col-xs-offset-3 col-sm-offset-1 col-lg-offset-1">
            <img className="creator-profile-img" src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
          </div>
            <div className="col-sm-offset-4 col-lg-offset-3">
              <h1 className="col-xs-12 creator-banner-content">Laura Sanchez</h1>
            </div> 
            <div>
              <p className="col-sm-7 col-sm-offset-4 col-lg-8 col-lg-offset-3">Laura Sanchez Lopex is a Spanish model and television actress. Internationally, she is perhaps most notable for her role in Los Hombres de Paco. In Los Hombres de Paco, Pepa is heartbroken by the death of her wife Silvia Castro.</p>
            </div> 
            <div className="col-sm-offset-4 col-lg-7 col-lg-offset-3">
              <button className="btn col-xs-12 col-sm-5 col-md-4 col-lg-4 follow-btn"><h3><span className="creator-header-btn-icon">-</span> Follow</h3></button>
              <button className="btn col-xs-12 col-sm-5 col-md-4 col-lg-4 collab-btn"><h3><span className="creator-header-btn-icon">%</span> Collaborate</h3></button>
            </div>
          </div>  
      </div>  
    );
  }
});