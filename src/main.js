import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Epic from './js/epic-service.js';

function clearFields()  {
  $('#date').val("");
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let date = $("#date").val();
    clearFields();
    let promise = Epic.getImage(date);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.show-rover').text(`This picture was taken on ${date} by the ${body.photos[0].rover.name} rover!`)
      $('.show-image').html(`<img src=${body.photos[0].img_src}>`);
    }, function(error) {
      $(".show-errors").text(`There was an error processing your request: ${error}`);
    });
  });
}); 