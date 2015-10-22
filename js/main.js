define([
  'jquery',
  'mustache',
  'text!/templates/names.html'
], function(
  $,
  Mustache,
  namesTpl
){
  var exports = {};
  exports.init = function(){
    var data = {
      names: [
        'Domingo',
        'Kristie',
        'Phil',
        'Noemi',
        'Elijah',
        'Ralph',
        'Jaimarie',
        'Thomas',
        'Mychelle',
        'Nick',
        'Monica',
        'Mike'
      ]
    };

    var listHtml = Mustache.render(namesTpl, data);
    $("#container").html(listHtml);
  };

  return exports;
  
})