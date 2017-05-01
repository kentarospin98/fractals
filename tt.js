table = []
players = []

function start() {
  playerdata = prompt("Welcome to League table generator. How many players will be playing?");
  playercount = parseInt(playerdata);

  for(i = 0; i < playercount; i++){
    player = prompt("Enter player " + (i + 1).toString() + "'s name'");
    players.push(player);
  }

  for(i = 0; i < players.length; i++){
    row = []
      for(j = 0; j < players.length; j++){
        if(players[i] != players[j]){
          row.push(["N",[0, 0]])
        }
        else{
          row.push("X")
        }
      }
    table.push(row);
  }

}

function drawtable(){
  document.body.innerHTML = "";
  document.write("<table border='0' width='100%'><tr><td bgcolor=#F></td>");
  for(i = 0; i < players.length; i++){
    document.write("<td bgcolor=#AAA>" + players[i] + "</td>");
  }
  document.write("</tr>")
  for(i = 0; i < table.length; i++){
    document.write("<tr><td bgcolor=#AAA>" + players[i] + "</td>");
    for(j = 0; j < table.length; j ++){
      if(table[i][j][0] == "X"){
        document.write("<td bgcolor=#F></td>");
      }else{
        if (table[i][j][0] == "N") document.write("<td bgcolor=#F00></td>");
        else document.write("<td>" + players[table[i][j][0]] + "\t" + table[i][j][1] + "</td>");
      }
    }
    document.write("<tr>");
  }
  drawbuttons();
}

function match(){
  document.body.innerHTML = "";
  select = [];
  score = []
  for(x = 0; x < 2; x++){
    select.push(document.createElement("select"));
    score.push(document.createElement("input"));
    score[x].type = "text";
    for(i = 0; i < players.length; i ++){
      select[x].options.add( new Option(players[i]));
    }
    document.body.appendChild(select[x]);
    document.body.appendChild(score[x]);
    if(x == 0) document.body.append("\tVs\t");
    else document.body.append("\n");
  }

  document.body.appendChild(makebutton("Update", function(){
    updatescore();
    reset();
  }));
  document.body.appendChild(makebutton("Cancel", reset));

}

function reset(){
  document.body.innerHTML = "";
  drawbuttons();
}

function updatescore(){
  pa = select[0].selectedIndex;
  pb = select[1].selectedIndex;
  sa = parseInt(score[0].value);
  sb = parseInt(score[1].value);
  win = pa;

  if(pa == pb){
    alert("Both players cannot be the same!");
  }else{
    if(sa > sb) win = pa; else win = pb;

    if(table[pa][pb][0] == "N"){
      table[pa][pb] = [win, [sa, sb]];
    }else if (table[pb][pa][0] == "N") {
      table[pb][pa] = [win, [sb, sa]];
    }else alert("These players have exausted their matches");
  }
}

function makebutton(value, func){
  element = document.createElement("input");
  element.type = "button";
  element.value = value;
  element.name = value;
  element.onclick = func;
  return element;
}

function drawbuttons(){
  document.body.appendChild(makebutton("Show Table", drawtable));
  document.body.appendChild(makebutton("Report a Match", match));
}

start();
drawbuttons();
