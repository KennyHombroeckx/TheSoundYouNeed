
//
// BACBONE VIEW ---------------------------------------------------------
// A Backbone view is used for all DOM interactions with the user
//


define([

	'backbone',
	'jquery_ui',
	'handlebars',

	'app',

	'text!templates/search.html'

], function(Backbone, jquery, Handlebars, App, Template) {

	'use strict';


	var View = Backbone.View.extend({

		
		//
		// INITIALIZE --------------------------------------------------
		// Pre-compile template
		//

		initialize: function() {
			
			this.template = Handlebars.compile(Template);

		},


		//
		// RENDER TEMPLATE ---------------------------------------------
		// Render base template
		//

		render: function() {

			this.$el.hide().html(this.template).fadeIn(150);
				console.log(this.$('.js-main-search'));
				var autocomplete = this.$('.js-main-search')
						.autocomplete({ source: $.proxy( this.search, this), appendTo: '#search', minLength: 1 })
						.data('ui-autocomplete');
			//this.overrideMenu(autocomplete);
		
		},


		//
		// EVENTS ------------------------------------------------------
		// On autocomplte select -> trigger selectItem
		//

		events: {
			
			"autocompleteselect" : 'selectItem'
		
		},

		//
		// SEARCH -------------------------------------------------------
		// Search for People, Sets, Variables, Models...
		//

		search: function(request, callback) {

			var url = App.SERVER + 'tracks.json?q=';
			var api_id = '&client_id=' + App.SOUNDCLOUDID;
			
			var self = this;
          	var crit = request.term.toLowerCase();

          	$.ajax({
          		type: 'GET',
          		url: url + crit + api_id,
          		dataType: 'json',
          		crossDomain: true

          	}).done(function(response){
          
          		var data = _.map(response, function(num, key){ 

              		return { value: num.user.permalink, label: num.user.permalink, id: num.user.id};

            	});

            	callback(data); 

            }).fail(function(error){
            	console.log(error);
          		//Give the user some feedback
          	});

		}



	});


	return View;


});