




const quizData = [
  {
    question: "JavaScript mein callback function kya hota hai?",
    options: ["Function jo kisi aur function ko argument mein diya jata hai", "Variable ka type", "Loop ka type", "HTML element"],
    answer: "Function jo kisi aur function ko argument mein diya jata hai"
  },
  {
    question: "HTML me image insert karne ke liye kaunsi tag use hoti hai?",
    options: ["<img>", "<image>", "<pic>", "<photo>"],
    answer: "<img>"
  },
  {
    question: "CSS me background color kaise set karte hain?",
    options: ["background-color", "color-background", "bg-color", "setBackground"],
    answer: "background-color"
  },
  {
    question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
    options: ["var", "int", "string", "letvar"],
    answer: "var"
  },
  {
    question: "Web page ko dynamic banane ke liye kis language ka use hota hai?",
    options: ["HTML", "CSS", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "HTML file ka extension kya hota hai?",
    options: [".htm", ".html", ".page", ".web"],
    answer: ".html"
  },
  {
    question: "CSS me font-size set karne ke liye kaunsa property use hoti hai?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "JavaScript me alert dikhane ke liye kya likhte hain?",
    options: ["prompt()", "console()", "alert()", "show()"],
    answer: "alert()"
  },
  {
    question: "Computer ka brain kya kehlata hai?",
    options: ["RAM", "Monitor", "CPU", "Mouse"],
    answer: "CPU"
  },
  {
    question: "RAM ka full form kya hai?",
    options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Random Active Memory"],
    answer: "Random Access Memory"
  },
  {
    question: "CSS me color red ka code kya hai?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
    answer: "#FF0000"
  },
  {
    question: "HTML me heading tag kaunse hote hain?",
    options: ["<h1> to <h6>", "<head1> to <head6>", "<heading>", "<hd>"],
    answer: "<h1> to <h6>"
  },
  {
    question: "JavaScript me loop kaunse hote hain?",
    options: ["for", "while", "do...while", "All of these"],
    answer: "All of these"
  },
  {
    question: "Website ka front-end banane ke liye kaunse language use hoti hain?",
    options: ["HTML, CSS, JS", "Python", "PHP", "C++"],
    answer: "HTML, CSS, JS"
  },
  {
    question: "HTML me list banane ke liye kaunsa tag use hota hai?",
    options: ["<ul>", "<li>", "<ol>", "All of these"],
    answer: "All of these"
  },
  {
    question: "Computer me permanent storage kya hota hai?",
    options: ["RAM", "ROM", "Hard Disk", "CPU"],
    answer: "Hard Disk"
  },
  {
    question: "CSS file ko HTML me kaise link karte hain?",
    options: ["<style>", "<link>", "<css>", "<stylesheet>"],
    answer: "<link>"
  },
  {
    question: "JavaScript me condition check karne ke liye kya use hota hai?",
    options: ["if", "else", "switch", "All of these"],
    answer: "All of these"
  },
  {
    question: "HTML me form banane ke liye kaunsa tag use hota hai?",
    options: ["<form>", "<input>", "<textarea>", "All of these"],
    answer: "All of these"
  },
  {
    question: "Computer me file ko delete karne par kaha jata hai?",
    options: ["Recycle Bin", "Dustbin", "RAM", "Hard Disk"],
    answer: "Recycle Bin"
  },
  {
    question: "JavaScript me string ko number me convert karne ke liye?",
    options: ["parseInt()", "Number()", "Both", "None"],
    answer: "Both"
  },
  {
    question: "CSS me border dene ke liye kaunsi property use hoti hai?",
    options: ["border", "border-style", "border-width", "All of these"],
    answer: "All of these"
  },
  {
    question: "HTML me table banane ke liye tag?",
    options: ["<table>", "<tr>", "<td>", "All of these"],
    answer: "All of these"
  },
  {
    question: "JavaScript kis browser me kaam karta hai?",
    options: ["Chrome", "Firefox", "Edge", "All of these"],
    answer: "All of these"
  },
  {
    question: "HTML me link create karne ke liye?",
    options: ["<a>", "<link>", "<url>", "<href>"],
    answer: "<a>"
  }

];

let currentQuestion = 0;
let score = 0;

let question1 = document.getElementById('question');
let option1 = document.querySelectorAll('.choice-text');
let choice_container = document.querySelectorAll('.choice-container');
let nextbtn = document.getElementById('nextBtn');
let highscor=document.getElementById('highScoreBtn');
let slectedBtn=false;

function loadQuestion() {
   option1.forEach(opt => {
    opt.style.backgroundColor = "";});
    
  choice_container.forEach(container => {
    container.style.backgroundColor="";
    container.style.pointerEvents = "auto";

  });

  let q = quizData[currentQuestion];
  question1.textContent = q.question;
  q.options.forEach((option, index) => {
    option1[index].textContent = option;
  });
}

choice_container.forEach((container, index) => {
  container.addEventListener('click', function () {
    slectedBtn=true;
    let selected = option1[index].textContent;
    let correct = quizData[currentQuestion].answer;

    if (selected === correct) {
      score++;
      option1[index].style.backgroundColor = "green";
      alert('You are right');
    } else {
      option1[index].style.backgroundColor = "red";
      alert('You are wrong! Right answer is ' + correct);
    }
    choice_container.forEach(c => c.style.pointerEvents = "none"
    );
  });
});


nextbtn.addEventListener("click", function () {
  if(!slectedBtn){
    alert("Please select an option");
    return;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    slectedBtn = false;
    loadQuestion();
  } else {
    localStorage.setItem("final_score", score);  // Score save karo
    window.location.href = "score.html"; 
    highscor.style.display="inline-block"
    nextbtn.ariaDisabled=true;
  }
});
loadQuestion();



