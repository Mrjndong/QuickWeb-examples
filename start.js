/**
 * QuickWeb 演示程序
 *
 * @author leizongmin<leizongmin@gmail.com>
 * @version 0.1.3
 */

// require QuickWeb module 
var web = require('../QuickWeb');

// settings
web.set('wwwroot', './www');				// file path (file_server plus)
web.set('code_path', './code');				// code path (restful router plus)
web.set('template_path', './tpl');			// template path (render plus)
web.set('template_extname', 'html');		// template extname (render plus)
web.set('tmp_path',	'./tmp');				// temp path

// load all plus
web.loadPlus();

// create server and listening on port 80
var s = web.create(80);


// 加入socket.io支持
var io = require('socket.io');
io = io.listen(s);
