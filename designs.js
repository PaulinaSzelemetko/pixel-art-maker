// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = $("#input_height").val();
    var width = $("#input_width").val();
    $("#pixel_canvas").empty();
    for (var i = 0; i < height; i++) {
        $("#pixel_canvas").append("<tr></tr>");
         for (var j = 0; j < width; j++) {
             $("#pixel_canvas > tr:last").append("<td></td>");
         }
    }
}

$("#sizePicker").on("submit", function(evn) {
   evn.preventDefault();
   makeGrid();
});

var color = $("#colorPicker").val();


$("#colorPicker").on("change", function() {
    color = $("#colorPicker").val();
    console.log(color);
});

$("#pixel_canvas").on("click", "td", function(evn) {
    $(evn.target).css("background-color", color);

});