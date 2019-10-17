const canvas = document.getElementById('pixel_canvas');
let gridWidth = document.getElementById('gridWidth').value,
  gridHeight = document.getElementById('gridHeight').value,
  color = document.getElementById('color').value;


makeGrid = () =>{
  for (let row = 0; row < gridHeight; row++) {
    const rows = document.createElement('tr');
    canvas.appendChild(rows)
    for (let col = 0; col < gridWidth; col++) {
      const cell = document.createElement('td')
      rows.appendChild(cell);
    }
  }
}

makeGrid();
// $(document).ready(function() {
//   const canvas = $("#pixel_canvas");
//   makeGride();

//   // Submit New grid
//   $("button").click(function(e) {
//     e.preventDefault();
//     reset();
//     makeGride();
//   });

//   // Make grid
//   function makeGride() {
//     // Assign width and height
//     let width = $("#gridWidth").val(),
//       height = $("#gridHeight").val();

//     // Drawing the Grid
//     for (let y = 0; y < height; y++) {
//       const line = $("<tr></tr>");
//       $(canvas).append(line);
//       for (let x = 0; x < width; x++) {
//         line.append("<td></td>");
//       }
//     }
//     // coloring the grid.
//     $("td").click(function() {
//       let color = $("#color").val();
//       $(this).css("background-color", color);
//       // Removung border from nested cells
//       $(this).css("border", "none");
//       $("tr").css("border", "none");
//     });
//   }

//   // Clearing old grid
//   $("input[type = 'button']").click(function(e) {
//     e.preventDefault();
//     clear();
//   });

//   // empty old grid
//   function reset() {
//     $(canvas).empty();
//   }

//   // Removing colors
//   function clear() {
//     $("td").css("background-color", "transparent");
//     $("td").css("border", "1px solid #000");
//     $("tr").css("border", "1px solid #000");
//   }
// });