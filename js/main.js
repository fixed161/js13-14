'use strict;'

$(function(){

    var button = document.getElementById('button');
    var resultField = document.getElementById('resultField');
    var resetBtn = document.getElementById('resetBtn');

    button.addEventListener('click', checkingAnswer);
    resetBtn.addEventListener('click', resetForm);

    var rightAnswer = JSON.parse(localStorage.getItem('rightAnswer'));
    var totalAnswer = 5;
    var rightUserAnswers = 0;

    function checkingAnswer() {

          var usersAnswers = [];

          for (var i = 1; i < totalAnswer; i++) {
              usersAnswers[i - 1] = document.forms['test']['q' + i].value;
          };

          for (var i = 0; i < totalAnswer; i++) {
              if (usersAnswers[i] === rightAnswer[i]) {
                  rightUserAnswers++;
              }
          };

      if (rightUserAnswers >= 3) {
          resultField.innerHTML = "Правильно отвечено на" + rightUserAnswers + "из 5 вопросов. <b>Вы прошли!</b>"
      } else {
          resultField.innerHTML = "Правильно отвечено на" + rightUserAnswers + "из 5 вопросов. <b>Вы не прошли!</b>"
      }
    };

    function resetForm() {
        $('input:radio').prop('checked', false);
    };



});
