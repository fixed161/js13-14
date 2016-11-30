var questions = [
  {
    question: "1.Inside which HTML element do we put the JavaScript?",
    answers: {
        a: "a. <script>",
        b: "b. <src>",
        c: "c. <javascript>",
    },
    rightAnswer: "a"
  },
  {
    question: "2.How do you create a function in JavaScript?",
    answers: {
        a: "a. function = myFunction()",
        b: "b. function myFunction()",
        c: "c. function:myFunction()",
    },
    rightAnswer: "a"
  },
  {
    question: "3.Which class provides a responsive fixed width container?",
    answers: {
        a: "a. container-fixed",
        b: "b. container-fluid",
        c: "c. container",
    },
    rightAnswer: "b"
  },
  {
    question: "4. Which sign does jQuery use as a shortcut for jQuery?",
    answers: {
      a: "a. the $ sign",
      b: "b. the ? Sign",
      c: "c. the % sign",
    },
    rightAnswer: "a"
  },
  {
    question: "5. Which jQuery method is used to perform an asynchronous HTTP request?",
    answers: {
        b: "a. jQuery.ajaxSetup()",
        c: "b. jQuery.ajaxAsync()",
        a: "c. jQuery.ajax()",
    },
    rightAnswer: "c"
  },
];

var  rightAnswer = ["a","a","b","a","c"]

localStorage.setItem('questions', JSON.stringify(questions));
localStorage.setItem('rightAnswer', JSON.stringify(rightAnswer));
