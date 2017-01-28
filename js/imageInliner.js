var img = new Image();
img.src = "data:image/png;base64,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";
var canvas = $("#c")[0];
var context = canvas.getContext('2d');
context.drawImage(img, 0, 0);


//Box Shadows..

const PIXEL_SIZE = 10;
var shadows = [];
for (var i = 0; i < img.height; i++) {
  for (var j = 0; j < img.width; j++) {
    var data = context.getImageData(i, j, 1, 1).data;
    var alpha = data[3] / 255;
    alpha = Math.round(alpha * 100) / 100;
    var x = i * PIXEL_SIZE;
    var y = j * PIXEL_SIZE;
    shadows.push(x + 'px ' + y + 'px rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + alpha + ')');
  }
}
var shadowString = shadows.join(',');
$("#cssey .shadows")
  .css('width', PIXEL_SIZE)
  .css('height', PIXEL_SIZE)
  .css('box-shadow', shadowString);
$("#cssey pre").text(
  JSON.stringify(
    $("#cssey .shadows").css(["display","width","height","box-shadow",]),null,4));


/// Tables
var tableRows = []
for (var i = 0; i < img.height; i++) {
  var tableRow = [];
  for (var j = 0; j < img.width; j++) {
    var data = context.getImageData(j, i, 1, 1).data;
    var alpha = data[3] / 255;
    alpha = Math.round(alpha * 100) / 100;
    var tableCell = '<td width='+PIXEL_SIZE+'px height='+PIXEL_SIZE+'px' + ' style="background-color:rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + alpha + ');"/>';
    tableRow.push(tableCell);
  }
  tableRows.push(tableRow.join(""));
}


$("#tabley pre").text(
  "<table>\n<tbody>\n<tr>" 
  + tableRows.join("</tr>\n<tr>") 
  + "</tr>\n</tbody>\n</table>");
$("#tabley table").html("<tr>" + tableRows.join("</tr>\n<tr>") + "</tr>");

