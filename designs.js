// Select color input

// Select size input
$('document').ready(function (){
  // Select color input

  // Select size input

  var height, width, color;

// When size is submitted by the user, call makeGrid()

  $('#sizePicker').submit(function (event) {

      event.preventDefault();

      height = $('#inputHeight').val();

      width = $('#inputWeight').val();

      makeGrid(height, width);

  })

  function makeGrid(x, y) {

    // Your code goes here!
    for (var i = 1; i <= x; i++) {

        $('#pixelCanvas').append($tr);

        for (var j = 1; j <=y; j++) {

            $tr.append($('<td></td>'));

          }

      }
      // add colors to the cells

      $('td').click(function addColor(){

          color = $('#colorPicker').val();

if ($(this).attr('style')) {

              $(this).removeAttr('style')

          } else {

              $(this).attr('style', 'background-color:' + color);

          }

      })

  }
});
