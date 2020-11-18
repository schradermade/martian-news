import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Epic from './js/epic-service.js';

function clearFields()  {
  $('#date').val("");
  // $("$img-quality").val("");
  $('#longitude').val("");
  $('#latitude').val("");
}

$(document).ready(function() {
  $("#formOne").click(function() {
    // event.preventDefault();
    // let imgQuality = $("#img-quality").val();
    let date = $("#date").val();
    clearFields();
    let promise = Epic.getImage(date);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      $(".show-image").append(`The enhanced image of Earth on ${date}: ${body[0].image}`);
    }, function(error) {
      $(".show-errors").text(`There was an error processing your request: ${error}`);
    });
  });
}); 