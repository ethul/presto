var Presto = (function(App) {

  App.screenController = Ember.Object.create({
    screen: Ember.Object.create({
      height: $(window).height(),
      width: $(window).width()
    }),
    resize: function(height,width) {
      this.get("screen").setProperties({height: height, width: width});
    },
  });

  App.fontController = Ember.Object.create({
    font: Ember.Object.create({
      height: undefined,
      width: undefined,
    }),
    resize: function() {
      $("body").append($("<pre id=tag style=display:inline>&nbsp;</pre>"));
      this.get("font").setProperties({height: $("#tag").height(), width: $("#tag").width()});
      $("#tag").remove();
    },
  });

  App.textController = Ember.Object.create({
    text: Ember.Object.create({
      value: ""
    }),
  });

  App.mainController = Ember.ArrayController.create({
    content: [],
    text: App.textController.text,
    screen: App.screenController.screen,
    font: App.fontController.font,
    regenerator: function() {
      var text = this.get("text").get("value")
        , screenHeight = this.get("screen").get("height")
        , fontHeight = this.get("font").get("height")
        , lines = text.split("\n")
        , linesInPre = Math.floor(screenHeight/fontHeight)
        , i = 0
        , content = [];

      if (text !== "") {
        for (i = 0; i < lines.length; i = i + linesInPre) {
          content.push(lines.slice(i, i + linesInPre).join("\n"));
        }
      }
      this.set("content",content);
    }.observes("text.value","screen.height","font.height"),
  });

  return App;
}(Presto || Ember.Application.create()));
