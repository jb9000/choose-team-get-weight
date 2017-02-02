// URL for the JSON file.  Normally it comes from the line below, but due to http/https issues I saved a local copy.
// var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

// When the button is clicked, run a callback function
$('#quote').click(function() {
  var teamID = document.getElementById('teamInput').value;
  console.log(teamID + ' is a ' + typeof teamID);
  // Retrieve the data from the endpoint 
  // Store the player data in a variable
  var url = 'https://jeffbautista.github.io/choose-team-get-weight/' + teamID + '.JSON';
  var url2 = 'https://jeffbautista.github.io/choose-team-get-weight/' + teamID + 'B.JSON';
  $.getJSON (url, function(data) {
    var playerData = data['resultSets'][0]['rowSet'];
 
    var url2 = 'https://jeffbautista.github.io/choose-team-get-weight/' + teamID + 'B.JSON';
    $.getJSON (url2, function(data) {
       var teamData = data['resultSets'][0]['rowSet'][0][2];
       console.log(teamData);
    });
    
    
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
