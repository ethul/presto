$("article").hide();
var version = "0.9.0",
    parsePx = function(px) {
      var regex = /(\d+)\s*px/;
      return parseInt(regex.exec(px)[1], 10);
    };

$("form").submit(function(e) {
  e.preventDefault();
  var text = $("textarea").val(),
      maxHeight = screen.height,
      fontSize = parsePx($("article").css("font-size")),
      lineHeight = parsePx($("article").css("line-height")) + fontSize,
      lines = text.split("\n"),
      linesLength = lines.length,
      linesPerColumn = Math.floor(maxHeight/lineHeight),
      i = 0,
      article = $("article");

  article.hide();
  article.empty();

  for (i = 0; i < linesLength; i = i + linesPerColumn) {
    pre = lines.slice(i, i+linesPerColumn).join("\n");
    article.append("<pre>" + pre + "</pre>");
  }
  return article.fadeIn("fast");
});
