/**
 * 浏览文档
 */
 
exports.path = '/docs/file/:title';

var web = global.QuickWeb;

exports.get = function (request, response, next) {
	var filename = web.file.resolve('home path', 'docs/' + request.path.title + '.md');
	web.file.read(filename, function (err, data) {
		if (err)
			if (request.path.title == 'index')
				response.sendError(404, '没有该文章！');
			else
				response.redirect('/docs/file/index');
		else {
			response.renderFile('docs.html', {
				body:		data.toString(),
				title:		request.path.title
			});
		}
	});
}