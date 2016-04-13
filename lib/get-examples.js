var request = require('request');
var _ = require('underscore');

var GetExamples = function () {
    var oneNotePagesApiUrl = 'https://www.onenote.com/api/v1.0/pages';
    var oneNoteSectionsApiUrl = 'https://www.onenote.com/api/v1.0/sections';
    
    /* Get all pages */
    this.getAllPages = function (accessToken, callback) {
        var options = {
          url: oneNotePagesApiUrl,
          headers: { 'Authorization': 'Bearer ' + accessToken }
        };
        
        var r = request.get(options, callback);
    };  
};

module.exports = new GetExamples();
