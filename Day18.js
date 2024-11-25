console.log("and you ");
function col_chan(){
  var colgroup = ['red', 'yellow', 'green,blue', 'pink', 'brown', 'white', 'violet','orange' ];
  var col = colgroup[Math.floor(Math.random()*10)];
  console.log(col)
  document.body.style.backgroundColor = col;
}