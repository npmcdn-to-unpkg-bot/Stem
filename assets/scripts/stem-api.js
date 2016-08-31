var StemApi = (function () {
    function StemApi(url) {
        this.baseUrl = url;
        this.authorization = null;
    }

    // Login
    StemApi.prototype.setAuth = function (token_type, access_token) {
        var _this = this;
        _this.authorization = token_type + ' ' + access_token;
    };

    StemApi.prototype.register = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'authentication/register',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            success: function (response) {
                rse.success(response);
            },
            error: function (response) {
                rse.error(response);
            }
        });
    };

    StemApi.prototype.login = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'authentication/login',
            data: rse.request.form.serialize(),
            success: function (response) {
                rse.success(response);
            },
            error: function (response) {
                rse.error(response);
            }
        });
    };

    // Account
    StemApi.prototype.createAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.updateAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'PUT',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.getAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.cancelUpload = function(req) {
    	return $.ajax({
	        type: 'PUT',
	        url: this.baseUrl + 'files/upload/' + req.id,
	        headers: { 'Authorization': this.authorization },
	        contentType: 'application/json; charset=utf-8',
	        data: JSON.stringify({ isCanceled: true }),
	        dataType: 'json'
	    });
    };

    // File
    StemApi.prototype.upload = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'files/upload',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ fileName: rse.request.file.name }),
            dataType: 'json',
            error: function (uploadResponse) {
                rse.error(uploadResponse);
            },
            success: function (uploadResponse) {
                $.ajax({
                    type: uploadResponse.verb,
                    url: uploadResponse.url,
                    contentType: uploadResponse.contentType,
                    headers: uploadResponse.headers,
                    // this flag is important, if not set, it will try to send data as a form
                    processData: false,
                    // the actual file is sent raw
                    data: rse.request.file,
                    error: function (s3Response) {
                        rse.error(s3Response);
                    },
                    success: function (s3Response) {                        
                        $.ajax({
                            type: 'PUT',
                            url: _this.baseUrl + 'files/upload/' + uploadResponse.id,
                            headers: { 'Authorization': _this.authorization },
                            contentType: 'application/json; charset=utf-8',
                            data: JSON.stringify({ isComplete: true }),
                            dataType: 'json',
                            success: function (confirmResponse) {
                                rse.success(confirmResponse);
                            },
                            error: function (confirmResponse) {
                                rse.error(confirmResponse)
                            }
                        });
                    }
                });
            }
        });
    };

    //Song
    StemApi.prototype.createSong = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'songs',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.createAlbum = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'albums',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.updateSong = function (rse) {
        var _this = this;
        $.ajax({
            type: 'PUT',
            url: _this.baseUrl + 'songs/' + rse.request.id,
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.getSong = function (rse) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: _this.baseUrl + 'songs/' + rse.request.id,
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.getSongsByArtist = function (rse) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: _this.baseUrl + 'artists/' + rse.request.artistId + '/songs',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    StemApi.prototype.getAlbumsByArtist = function (rse) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: _this.baseUrl + 'artists/' + rse.request.artistId + '/albums',
            headers: { 'Authorization': _this.authorization },
            contentType: 'application/json; charset=utf-8',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    };

    // Promisified this method
    StemApi.prototype.searchSongs = function (rse) {
        return $.ajax({
            type: 'POST',
            url: this.baseUrl + 'songs/search',
            headers: { 'Authorization': this.authorization },
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(rse.request),
            dataType: 'json'
        });
    };

    StemApi.prototype.getTagValues = function(req) {
    	return $.ajax({
    		type: 'GET',
    		url: this.baseUrl + 'tagtypes/' + req.tagTypeId + '/tags',
    		headers: { Authorization: this.authorization },
    		contentType: 'application/json; charset=utf-8'
    	});
    };

    StemApi.prototype.getCreatorDownloads = function (rse) {
    	return $.ajax({
    		type: 'POST',
    		url: this.baseUrl + 'creators/' + rse.creatorId + '/downloads',
    		headers: { 'Authorization': this.authorization },
    		contentType: 'application/json; charset=utf-8',
    	});
    }

    return StemApi;
}());