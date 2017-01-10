var file
var txt
var button
var words
var dict
var order
var newstring

function setup() {
  noCanvas();
  // file = select("#file");
  txt = select("#textbx");
  button = select("#submit");

  button.mouseClicked(shuff);
}

function shuff(evnt) {
  // console.log(txt.value());
  dict = {};
  order = [];
  newstring = "";

  words = txt.value().toLowerCase().split(/\W+/g);

  for (var i = 0; i < words.length; i++) {
    if (!dict[words[i][0]]) {
      dict[words[i][0]] = [];
    }
    dict[words[i][0]].push(words[i]);
    order.push(words[i][0]);
  }
  console.log(dict);
  console.log(order);

  for (var i = 0; i < order.length; i++) {
    newstring += random(dict[order[i]]) + " ";
  }

  createP(newstring);
}
