var TopAlbums = React.createClass({
	getInitialState: function() {
		return {
			windowWidth: 1,
			topAlbumWidth: 0,
			albumItemWidth: 270
		};
	},

	componentDidMount: function() {
		this.slideShow();

		var l = $('.top-album-wrapper ul li').length,
			w = $('.top-album-wrapper ul li').width(),
			windowWidth = window.innerWidth,
			topAlbumWidth = l * w,
			albumItemWidth = this.state.albumItemWidth;

		if(windowWidth > topAlbumWidth) {
			albumItemWidth = windowWidth / l;
		};

		this.setState({
			windowWidth: windowWidth,
			topAlbumWidth: topAlbumWidth,
			style: {width: albumItemWidth}
		});
	},

	slideShow: function(){
		var self = this;
		setInterval(this.moveRight, 3000);
	},
	moveLeft: function() {
		var w = this.state.albumItemWidth;
		$('.top-album-wrapper ul').animate({
			left: w
		}, "slow", function () {
			$('.top-album-wrapper ul li:last-child').prependTo('.top-album-wrapper ul');
			$('.top-album-wrapper ul').css('left', '');
		});
	},

	moveRight: function() {
		var w = this.state.albumItemWidth;
		$('.top-album-wrapper ul').animate({
			left: -w
		}, "slow", function () {
			$('.top-album-wrapper ul li:first-child').appendTo('.top-album-wrapper ul');
			$('.top-album-wrapper ul').css('left', '');
		});
	},
  render: function() {
	   
		return(
		  <div className="top-album-wrapper">
		  	<h4>Other awesome artists</h4>
				<a onClick={this.moveRight} className="album-nav-next icon-right-open-big"></a>
	      <a onClick={this.moveLeft} className="album-nav-prev icon-left-open-big"></a>
				<ul className="top-album-list">
				  <li><img className="top-album-img" src="http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg" /></li>
				  <li><img className="top-album-img" src="http://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" /></li>
				  <li><img className="top-album-img" src="http://www.slate.com/content/dam/slate/blogs/browbeat/2011/09/29/hugo_chavez_caption_contest/Drake_Nothing_Was_the_Same_Album_Cover.jpg.CROP.article568-large.jpg" /></li>
				  <li><img className="top-album-img" src="http://img.wennermedia.com/620-width/blake-shelton-if-im-honest-album-cover-zoom-56d72c12-eea5-418c-a6fa-1e4434dd704d.jpg" /></li>
				  <li><img className="top-album-img" src="https://static.dezeen.com/uploads/2016/01/Jonathan-Barnbrook_David-Bowie_Heathen_album-cover-art_dezeen_936_3.jpg" /></li>
				  <li><img className="top-album-img" src="https://images.rapgenius.com/07b5246af5ee9cd4724c0deb8d0ba68e.618x618x1.jpg" /></li>
				  <li><img className="top-album-img" src="http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg" /></li>
				  <li><img className="top-album-img" src="http://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" /></li>
				  <li><img className="top-album-img" src="http://www.slate.com/content/dam/slate/blogs/browbeat/2011/09/29/hugo_chavez_caption_contest/Drake_Nothing_Was_the_Same_Album_Cover.jpg.CROP.article568-large.jpg" /></li>
				  <li><img className="top-album-img" src="http://img.wennermedia.com/620-width/blake-shelton-if-im-honest-album-cover-zoom-56d72c12-eea5-418c-a6fa-1e4434dd704d.jpg" /></li>
				  <li><img className="top-album-img" src="https://static.dezeen.com/uploads/2016/01/Jonathan-Barnbrook_David-Bowie_Heathen_album-cover-art_dezeen_936_3.jpg" /></li>
				  <li><img className="top-album-img" src="https://images.rapgenius.com/07b5246af5ee9cd4724c0deb8d0ba68e.618x618x1.jpg" /></li>
				</ul>
		  </div>
		)
  }
});