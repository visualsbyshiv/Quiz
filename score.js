let Name =localStorage.getItem('playerName');
let score=localStorage.getItem("final_score");

document.getElementById('showName').textContent=`Player: ${Name}`;
document.getElementById('showScore').textContent=`Score: ${score}`;