const app = require('./app');

(async function main() {
	const PORT = app.get('port');
	await app.listen(PORT);
	console.log('server on port ' + PORT);
})();
