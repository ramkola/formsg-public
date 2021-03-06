'use strict';

module.exports = {
	baseUrl: process.env.BASE_URL || 'form.sg',
	db: {
		uri: process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || '0.0.0.0') + '/formsg',
	},
	port: process.env.PORT || 5000,
	socketUrl: process.env.SOCKET_URL || 'ws.form.sg',
	socketPort: process.env.SOCKET_PORT || 20523,
	log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'combined',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        fileLogger: {
            directoryPath: process.cwd(),
            fileName: 'app.log',
            maxsize: 10485760,
            maxFiles: 2,
            json: false
        }
    },
    sessionCookie: {
		secure: false,
		maxAge:  24 * 60 * 60 * 1000, // 24 hours
		domain: process.env.BASE_URL || '.form.sg'
	},
	assets: {
		bower_js: 'public/dist/vendor.min.js',
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	mailer: {
		from: 'FormSG <donotreply@form.sg>'
	}
};
