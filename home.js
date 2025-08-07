let playrBtn = document.getElementById('playerBtn');
let playerInput = document.getElementById('playerName');


playrBtn.addEventListener('click',function(){
  play=playerInput.value.trim();
  if(play===""){
    alert('Enter Your Name');
  }else{
    localStorage.setItem("playerName",play);
    window.location.href="quiz.html";
  }
})

