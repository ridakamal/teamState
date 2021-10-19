const team = 
{
  _players:[
    {firstname:'Pablo', 
    lastname:'Sachez', 
    age:10}
    ],
  _games:[
    {opponents: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27}
  ],


getPlayer() 
  {
return this._players;
  },
getGames() 
  {
return this._games;
  },
};
function addPlayer(firstName, lastName, age) {
const player = {
  firstName: firstName,
  lastName: lastName,
  age: age
  }
team._players.push(player);
  }

function addGame( opponents, teamPoints, opponentPoints)
  { const game= { 
    opponents: opponents,
    teamPoints: teamPoints,
    opponentsPoints: opponentPoints
    };
team._games.push(game);
  }

  

addPlayer('Steph', 'Curry', 28);
addPlayer( 'Lisa','Leslie', 44);
addPlayer('Bugs', 'Bunny', 76);
addGame('Titans', 100, 90);
addGame('Falcons', 70, 90);
addGame('Macaws', 50,80 );

console.log(team.getPlayer());
console.log(team.getGames());