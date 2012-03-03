$(document).ready(function() {
  $(window).resize(function() {
    Presto.screenController.resize($(window).height(),$(window).width());
  });
  Presto.fontController.resize();
});
