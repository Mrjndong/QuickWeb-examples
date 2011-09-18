/**
 * 聊天室首页
 *
 */
 
exports.paths = '/chat';

exports.get = function (server, request, response) {
	response.renderFile('chat', {}, 'text/html');
}