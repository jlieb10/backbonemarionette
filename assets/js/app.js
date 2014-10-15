window.App = new Backbone.Marionette.Application();

App.addRegions({
  content: "#content",
  input: "#input"
});

App.Router = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'index'
    }
});

App.Controller = Marionette.Controller.extend({
    index: function() {
        var view = new App.IndexView();
        App.content.show(view);
    }
});


App.IndexView = Marionette.ItemView.extend({
    tagName: 'h1',
    template: _.template('Hello World')
});

App.on("start", function() {
    App.controller = new App.Controller();

    App.router = new App.Router({
        controller: App.controller
    });

    Backbone.history.start();
});

$(function(){
    App.start();
});
