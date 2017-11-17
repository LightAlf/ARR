console.log("test socket");

var net = require('net');

var srv = net.createServer((c)=> {

	console.log("client connected");

	c.on('end', () => {
		console.log("client disconnected");
	});

	c.on('data', (mes) => {
		//console.log(mes);
		console.log(mes.toString('ascii'));
	});
});

srv.listen(8080, () => {
	console.log('server start');
});
