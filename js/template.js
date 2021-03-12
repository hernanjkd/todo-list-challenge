/*jshint laxbreak:true */
(function (window) {
	'use strict';
	/**
	 * Sets up defaults for all the Template methods such as a default template
	 *
	 * @constructor
	 */
	function Template() {
		this.defaultTemplate
		=	'<li data-id="{{id}}">'
		+		'<div class="view">'
		+			'<label>{{title}}</label>'
		+			'<button class="destroy"></button>'
		+		'</div>'
		+	'</li>';
	}
	/**
	 * Creates an <li> HTML string and returns it for placement in your app.
	 *
	 * NOTE: In real life you should be using a templating engine such as Mustache
	 * or Handlebars, however, this is a vanilla JS example.
	 *
	 * @param {object} data The object containing keys you want to find in the
	 *                      template to replace.
	 * @returns {string} HTML String of an <li> element
	 *
	 * @example
	 * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 * });
	 */
	Template.prototype.show = function (data) {
		var i, l;
		var view = '';
		for (i = 0, l = data.length; i < l; i++) {
			var template = this.defaultTemplate;
			template = template.replace('{{id}}', data[i].id);
			template = template.replace('{{title}}', data[i].title);
			view = view + template;
		}
		return view;
	};
	/**
	 * Displays a counter of how many to dos are left to complete
	 *
	 * @param {number} activeTodos The number of active todos.
	 * @returns {string} String containing the count
	 */
	Template.prototype.itemCounter = function (activeTodos) {
		var plural = activeTodos === 1 ? '' : 's';
		return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
	};
	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);