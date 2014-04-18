require.config({

	//
	// MAIN ENTRY POINT OF THE APPLICATION -----------------------------------
	//

	deps: ['init'],

	//
	// PATH MAPPINGS FOR MODULES ---------------------------------------------
	// Npte: Require-text needs to be available locally
	// http://stackoverflow.com/questions/11266808/require-js-backbone-optimization
	//

	paths: {
		'jquery'     : 'libs/jquery-1.10.2.min',  	
		'underscore' : 'libs/underscore-1.5.2.min',
		'jquery_ui'  : 'libs/jquery-ui-1.10.4.custom.min',
		'backbone'   : 'libs/backbone-1.1.0.min',
		'handlebars' : 'libs/handlebars.min',
		'soundcloud' : 'http://connect.soundcloud.com/sdk',
		'text'       : 'libs/require-text-2.0.10.min',
		'templates'  : '../templates',
		'app'        : 'config-app'
	},

	//
	// CONFIGURE DEPENDENCIES & EXPORTS --------------------------------------
	//

	shim: {

		'backbone': {
			deps    : ['underscore', 'jquery'],
			exports : 'Backbone'
		},

		'handlebars': {
			exports : 'Handlebars'
		},

		'jquery_ui' : {
			deps    : ['jquery'],
			exports : 'Jquery_ui'
		}

	}

});