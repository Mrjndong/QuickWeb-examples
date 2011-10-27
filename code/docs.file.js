/**
 * 浏览文档
 */
 
exports.path = '/docs/:title';

var markdown = require('markdown');
var web = global.QuickWeb;

exports.get = function (request, response, next) {
	var filename = web.file.resolve('home path', 'docs/' + request.path.title + '.md');
	web.file.read(filename, function (err, data) {
		if (err)
			response.sendError(404, '没有该文章！');
		else {
			var html = markdown.parse(data.toString());
			response.renderFile('docs.html', {
				body:		html,
				title:		request.path.title
			});
		}
	});
}