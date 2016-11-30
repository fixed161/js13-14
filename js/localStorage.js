'use strict;'

$(function(){

    var questions = JSON.parse(localStorage.getItem('questions'));

    var html = $('#quiz').html();

    var content = tmpl(html, {
        data: questions
    });

    $('body').prepend(content);

});
