/**
 * QuickWeb 示例
 */
 
var web = require('QuickWeb');

web.debug();
web.create(81);
web.create(80);

var fs = require('fs');
var options = {
	key:	fs.readFileSync('privkey.pem'),
	cert:	fs.readFileSync('cacert.pem')
}
web.createHttps(options);