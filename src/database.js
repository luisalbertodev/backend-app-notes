const mongoose = require('mongoose');

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DBNAME } = process.env;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.kxpqx.mongodb.net/${MONGO_DBNAME}`;

(function initializeDb() {
	try {
		const db = mongoose.connection;

		mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		db.once('open', (_) => console.log('Database is connected'));
		db.on('error', (error) => console.log(error));
	} catch (error) {
		console.log(error);
	}
})();
