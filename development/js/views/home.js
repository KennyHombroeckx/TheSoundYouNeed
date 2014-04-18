
//
// BACBONE VIEW ---------------------------------------------------------
// A Backbone view is used for all DOM interactions with the user
//


define([

	'backbone',
	'handlebars',

	'text!templates/home.html',

	'views/search'

], function(Backbone, Handlebars, Template, SearchView) {

	'use strict';


	var View = Backbone.View.extend({

		el: $('#page'),
		//
		// INITIALIZE --------------------------------------------------
		// Pre-compile template
		//

		initialize: function() {
			
			this.template = Handlebars.compile(Template);

			this.subviews = {};

			this.subviews['search'] = new SearchView();



		},


		//
		// RENDER TEMPLATE ---------------------------------------------
		// Render base template
		//

		render: function() {

			this.$el.hide().html(this.template).fadeIn(150);

			this.cacheDOM();
			this.subviews['search'].setElement(this.$search).render();

		},

		//
		// CACHE DOM ---------------------------------------------------
		// This way we won't need to perform additional lookups
		// when updating the view
		//

		cacheDOM: function() {

			this.$search = this.$('#search');
		

		}



	});


	return View;


});