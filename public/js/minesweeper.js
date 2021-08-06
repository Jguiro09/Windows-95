
var grid = document.getElementById("grid");
var testMode = false; //Turn this variable to true to see where the mines are
var easybtn = document.getElementById('easy');
var medbtn = document.getElementById('med');
var hardbtn = document.getElementById('hard');
var resetbtn = document.getElementById('reset');
var timerScore = document.getElementById('timerscore');
var timerDiv = document.getElementById('timer');
var submitbtn = document.getElementById('submitbtn');
var usernameInput = document.getElementById('scoreName');
var highscoresDiv = document.getElementById('scoresDiv');
var highscores = document.getElementById('scores');
var highscoresTEXT = document.getElementById('highscoreTEXT');
var hideYourNameHere = document.getElementById('hideName');
let seconds = 0;

//todo List;
//Highscores go to bottom of page in highest to lowest

easybtn.addEventListener('click', function () {
  let timerRun = setInterval(function () {
    if (seconds !== 999) {
      timerDiv.textContent = `Timer: ${seconds++}`;
    }
    else {
      timerDiv.textContent = `Timer: ${seconds}`;
      clearInterval(timerRun);
    }
  }, 1000);
  console.log(timerRun);
  generateGrid();
  function generateGrid() {
    //generate 9 by 9 grid
    grid.innerHTML = "";
    for (var i = 0; i < 9; i++) {
      row = grid.insertRow(i);
      for (var j = 0; j < 9; j++) {
        cell = row.insertCell(j);
        cell.addEventListener('click', function () { clickCell(this); });
        var mine = document.createAttribute("data-mine");
        mine.value = "false";
        cell.setAttributeNode(mine);
      }
    }
    addMines();
  }

  function addMines() {
    //Add mines randomly
    for (var i = 0; i < 10; i++) {

      var row = Math.floor(Math.random() * 9);
      var col = Math.floor(Math.random() * 9);
      var cell = grid.rows[row].cells[col];
      cell.setAttribute("data-mine", "true");
      if (testMode) cell.innerHTML = "X";
    }
  }

  function revealMines() {
    //Highlight all mines in red
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-mine") == "true") cell.className = 'mine';
      }
    }
  }

  function checkLevelCompletion() {
    var levelComplete = true;
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if ((grid.rows[i].cells[j].getAttribute("data-mine") == "false") && (grid.rows[i].cells[j].innerHTML == "")) levelComplete = false;
      }
    }
    if (levelComplete) {
      revealMines();
      timerScore.innerText = seconds;
      clearInterval(timerRun);
      usernameInput.style.display = 'inline-block'
      submitbtn.style.display = 'inline-block'
      hideYourNameHere.style.display = 'inline-block'
      endScreen();
    }
  }

  function clickCell(cell) {
    //Check if the end-user clicked on a mine
    if (cell.getAttribute("data-mine") == "true") {
      revealMines();
      timerScore.innerText = '0, You blew up.'
      clearInterval(timerRun)
      endScreen();
      timerDiv.textContent = 'Timer: 0';
    }
    else {
      cell.className = "clicked";
      //Count and display the number of adjacent mines
      var mineCount = 0;
      var cellRow = cell.parentNode.rowIndex;
      var cellCol = cell.cellIndex;
      //alert(cellRow + " " + cellCol);
      for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 8); i++) {
        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 8); j++) {
          if (grid.rows[i].cells[j].getAttribute("data-mine") == "true") mineCount++;
        }
      }
      cell.innerHTML = mineCount;
    };

    if (mineCount == 0) {
      //Reveal all adjacent cells as they do not have a mine
      cell.innerHTML = '<img class="scalecontent" src="/images/minesweeper_blank.jpg">';
      for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 8); i++) {
        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 8); j++) {
          //Recursive Call
          if (grid.rows[i].cells[j].innerHTML == "") clickCell(grid.rows[i].cells[j]);
        }
      }

    }
    checkLevelCompletion();
  }
  resetbtn.style.display = "inline-block"
  resetbtn.addEventListener('click', function () {
    seconds = 0
    clearInterval(timerRun);
    timerRun = setInterval(function () {
      if (seconds !== 999) {
        timerDiv.textContent = `Timer: ${seconds++}`;
      }
      else {
        clearInterval(timerRun);
      }
    }, 1000);
    generateGrid();
  })
});
medbtn.addEventListener('click', function () {

  let timerRun = setInterval(function () {
    if (seconds !== 999) {
      timerDiv.textContent = `Timer: ${seconds++}`;
    }
    else {
      timerDiv.textContent = `Timer: ${seconds}`;
      clearInterval(timerRun);
    }
  }, 1000);
  generateGrid();
  function generateGrid() {
    //generate 16 by 16 grid
    grid.innerHTML = "";
    for (var i = 0; i < 16; i++) {
      row = grid.insertRow(i);
      for (var j = 0; j < 16; j++) {
        cell = row.insertCell(j);
        cell.onclick = function () { clickCell(this); };
        var mine = document.createAttribute("data-mine");
        mine.value = "false";
        cell.setAttributeNode(mine);
      }
    }
    addMines();
  }

  function addMines() {
    //Add mines randomly
    for (var i = 0; i < 40; i++) {
      var row = Math.floor(Math.random() * 16);
      var col = Math.floor(Math.random() * 16);
      var cell = grid.rows[row].cells[col];
      cell.setAttribute("data-mine", "true");
      if (testMode) cell.innerHTML = "X";
    }
  }

  function revealMines() {
    //Highlight all mines in red
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-mine") == "true") cell.className = 'mine';
      }
    }
  }

  function checkLevelCompletion() {
    var levelComplete = true;
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        if ((grid.rows[i].cells[j].getAttribute("data-mine") == "false") && (grid.rows[i].cells[j].innerHTML == "")) levelComplete = false;
      }
    }
    if (levelComplete) {
      revealMines();
      timerScore.innerText = seconds;
      clearInterval(timerRun);
      usernameInput.style.display = 'inline-block'
      submitbtn.style.display = 'inline-block'
      hideYourNameHere.style.display = 'inline-block'
      endScreen();
    }
  }

  function clickCell(cell) {
    //Check if the end-user clicked on a mine
    if (cell.getAttribute("data-mine") == "true") {
      revealMines();
      clearInterval(timerRun);
      timerScore.textContent = "0, You blew up."
      endScreen();
      timerDiv.textContent = 'Timer: 0';
    } else if (cell === 'red') { }
    else {
      cell.className = "clicked";
      //Count and display the number of adjacent mines
      var mineCount = 0;
      var cellRow = cell.parentNode.rowIndex;
      var cellCol = cell.cellIndex;
      //alert(cellRow + " " + cellCol);
      for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 15); i++) {
        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 15); j++) {
          if (grid.rows[i].cells[j].getAttribute("data-mine") == "true") mineCount++;
        }
      }
      cell.innerHTML = mineCount;
      if (mineCount == 0) {
        cell.innerHTML = '<img class="scalecontent" src="/images/minesweeper_blank.jpg">'
        //Reveal all adjacent cells as they do not have a mine
        for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 15); i++) {
          for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 15); j++) {
            //Recursive Call
            if (grid.rows[i].cells[j].innerHTML == "") clickCell(grid.rows[i].cells[j]);
          }
        }
      }
      checkLevelCompletion();
    }
  }
  resetbtn.style.display = "inline-block"
  resetbtn.addEventListener('click', function () {
    seconds = 0
    clearInterval(timerRun);
    timerRun = setInterval(function () {
      if (seconds !== 999) {
        timerDiv.textContent = `Timer: ${seconds++}`;
      }
      else {
        clearInterval(timerRun);
      }
    }, 1000);
    generateGrid();
  })
});
hardbtn.addEventListener('click', function () {
  let timerRun = setInterval(function () {
    if (seconds !== 999) {
      timerDiv.textContent = `Timer: ${seconds++}`;
    }
    else {
      timerDiv.textContent = `Timer: ${seconds}`;
      clearInterval(timerRun);
    }
  }, 1000);
  generateGrid();
  function generateGrid() {
    //generate 16 by 30 grid
    grid.innerHTML = "";
    for (var i = 0; i < 16; i++) {
      row = grid.insertRow(i);
      for (var j = 0; j < 30; j++) {
        cell = row.insertCell(j);
        cell.onclick = function () { clickCell(this); };
        var mine = document.createAttribute("data-mine");
        mine.value = "false";
        cell.setAttributeNode(mine);
      }
    }
    addMines();
  }

  function addMines() {
    //Add mines randomly
    for (var i = 0; i < 99; i++) {
      var row = Math.floor(Math.random() * 16);
      var col = Math.floor(Math.random() * 30);
      var cell = grid.rows[row].cells[col];
      cell.setAttribute("data-mine", "true");
      if (testMode) cell.innerHTML = "X";
    }
  }

  function revealMines() {
    //Highlight all mines in red
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 30; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-mine") == "true") cell.className = 'mine';
      }
    }
  }

  function checkLevelCompletion() {
    var levelComplete = true;
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 30; j++) {
        if ((grid.rows[i].cells[j].getAttribute("data-mine") == "false") && (grid.rows[i].cells[j].innerHTML == "")) levelComplete = false;
      }
    }
    if (levelComplete) {
      revealMines();
      timerScore.innerText = seconds;
      clearInterval(timerRun);
      usernameInput.style.display = 'inline-block';
      submitbtn.style.display = 'inline-block';
      hideYourNameHere.style.display = 'inline-block';
      endScreen();
    }
  }

  function clickCell(cell) {
    //Check if the end-user clicked on a mine
    if (cell.getAttribute("data-mine") == "true") {
      revealMines();
      clearInterval(timerRun);
      timerScore.textContent = "0, You blew up."
      endScreen();
      timerDiv.textContent = 'Timer: 0';
    }
    else {
      cell.className = "clicked";
      //Count and display the number of adjacent mines
      var mineCount = 0; mineCount.className = 'invisZero';
      var cellRow = cell.parentNode.rowIndex;
      var cellCol = cell.cellIndex;
      //alert(cellRow + " " + cellCol);
      for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 15); i++) {
        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 29); j++) {
          if (grid.rows[i].cells[j].getAttribute("data-mine") == "true") mineCount++;
        }
      }
      cell.innerHTML = mineCount;
      if (mineCount == 0) {
        cell.innerHTML = '<img class="scalecontent" src="/images/minesweeper_blank.jpg">'
        //Reveal all adjacent cells as they do not have a mine
        for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 15); i++) {
          for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 29); j++) {
            //Recursive Call
            if (grid.rows[i].cells[j].innerHTML == "") clickCell(grid.rows[i].cells[j]);
          }
        }
      }
      checkLevelCompletion();
    }
  }
  resetbtn.style.display = "inline-block"
  resetbtn.addEventListener('click', function () {
    seconds = 0
    clearInterval(timerRun);
    timerRun = setInterval(function () {
      if (seconds !== 999) {
        timerDiv.textContent = `Timer: ${seconds++}`;
      }
      else {
        clearInterval(timerRun);
      }
    }, 1000);
    generateGrid();
  })
});
function endScreen() {
  // Get the modal
  namesArray = [];
  submitbtn.addEventListener('click', function (event) {
    event.preventDefault();
    var userinput = usernameInput.value;
    var uils = localStorage.setItem('Name', userinput);
    var sls = localStorage.setItem('Score', seconds);
    namesArray.push(uils, sls);
    console.log(namesArray);
  })
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal 
  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}