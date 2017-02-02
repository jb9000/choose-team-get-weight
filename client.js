// URL for the JSON file.  Normally it comes from the line below, but due to http/https issues I saved a local copy.
// var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

var teamID = document.getElementByID('teamInput');
var url = 'https://jeffbautista.github.io/NBA-combined-player-weight/' + teamID + '.JSON';

// When the button is clicked, run a callback function
$('#quote').click(function() {

  // Retrieve the data from the endpoint 
  // Store the player data in a variable
  $.getJSON (url, function(data) {
    var playerData = data['resultSets'][0]['rowSet'];
 
    // Use playerData.forEach() to find the combined player weight
    var total = 0;
    playerData.forEach(function(a) {
      total+= Number(a[7]);
    });
    
    // Iterate through playerData array and build a string
    var playerString = '<ul>';
    for (i=0; i<playerData.length; i++) {
      playerString+= '<li>' + playerData[i][3] + ': ' + playerData[i][7] + ' pounds.</li>';
    }
    playerString+= '</ul>';
    
    // Display the total weight in the paragraph above the Player List <ul>
    var intro = document.getElementById('intro');
    intro.innerHTML = "The combined weight of the players below is " + total + " pounds.";
    
    var playerListUL = document.getElementById('text-block');
    playerListUL.innerHTML = playerString;
      
  });

});
