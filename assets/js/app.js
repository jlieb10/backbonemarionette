window.App = new Backbone.Marionette.Application();

App.addRegions({
  content: "#content",
  input: "#input"
});

App.on("start", function() {
  App.Router = new MyRouter({controller: new MyController});
  Backbone.history.start({pushState: true});
});
