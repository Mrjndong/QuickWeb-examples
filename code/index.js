/**
 * 首页
 */
 
exports.path = '/';

exports.get = function (request, response, next) {
	response.redirect('/docs/file/index');
}