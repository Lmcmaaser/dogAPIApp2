/*example data: 
{
    "message": [
        "https://images.dog.ceo/breeds/entlebucher/n02108000_1547.jpg",
        "https://images.dog.ceo/breeds/briard/n02105251_8194.jpg",
        "https://images.dog.ceo/breeds/malinois/n02105162_9368.jpg"
    ],
    "status": "success"
}*/

'use strict';
const url = 'https://dog.ceo/api/breeds/image/random/';

function getDogImages(a) { //fetches number of dog images based on user input
    const info = `${url}${a}`; 
    fetch(info)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.')); //error message
}

function displayResults(a) {
  console.log(a.message);
  //let data = a.message;
  $('.results').empty();
  for (let i = 0; i < a.message.length; i++) {
    $('.results').append(
      `<img class="results-img" alt="dog picture" src="${a.message[1]}">`
    )
  }
};

function watchSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    const num = $("#dogs").val();
    getDogImages(num);
  });
  //clear input for new input
  $('#dogs').val('');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchSubmit();
});