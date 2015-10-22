requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
    'mustache':'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.0/mustache.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
  }
});

define([
  'jquery',
  'main'
],
function(
  $,
  main
){
  $(document).ready(function(){
    main.init();
  });
});