var StemApi = (function () {
    function StemApi(url) {
        this.baseUrl = url;
        this.authorization = null;
    }
    StemApi.prototype.setAuth = function (token_type, access_token) {
        var _this = this;
        _this.authorization = token_type + " " + access_token;
    };
    StemApi.prototype.register = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'authentication/register',
            contentType: "application/json; charset=utf-8",
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
            type: "POST",
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
    StemApi.prototype.createAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    }
    StemApi.prototype.updateAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'PUT',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(rse.request),
            dataType: 'json',
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    }
    StemApi.prototype.getAccount = function (rse) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: _this.baseUrl + 'account',
            headers: { 'Authorization': _this.authorization },
            contentType: "application/json; charset=utf-8",
            error: function (response) {
                rse.error(response);
            },
            success: function (response) {
                rse.success(response);
            }
        });
    }

    StemApi.prototype.upload = function (rse) {
        var _this = this;
        $.ajax({
            type: 'POST',
            url: _this.baseUrl + 'file/upload',
            headers: { 'Authorization': _this.authorization },
            contentType: "application/json; charset=utf-8",
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
                            url: _this.baseUrl + 'file/upload/' + uploadResponse.id,
                            headers: { 'Authorization': _this.authorization },
                            contentType: "application/json; charset=utf-8",
                            dataType: 'json',
                            success: function (confirmResponse) {
                                rse.success(confirmResponse);
                            },
                            error: function (confirmResponse) {
                                rse.error(confirmResponse)
                            }
                        })
                    }
                });
            }
        });
    };
    return StemApi;
}());