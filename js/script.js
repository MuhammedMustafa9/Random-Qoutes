var qoutes = [
  {
    qoute: '“Be yourself; everyone else is already taken.”',
    author: '― Oscar Wilde',
  },
  {
    qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: '― Marilyn Monroe',
  },
  
  {
    qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: '― Albert Einstein',
  },
  {
    qoute: `“So many books, so little time.”`,
    author: '― Frank Zappa',
  },
  {
    qoute: `“A room without books is like a body without a soul.”`,
    author: '― Marcus Tullius Cicero',
  },
  {
    qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author: '― Bernard M. Baruch',
  },
  {
    qoute: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
    author: '― William W. Purkey',
  },
  {
    qoute: `“You only live once, but if you do it right, once is enough.”`,
    author: '― Mae West',
  },
  {
    qoute: `“Be the change that you wish to see in the world.”`,
    author: '― Mahatma Gandhi',
  },
  {
    qoute: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: '― Robert Frost',
  },
  {
    qoute: `“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”`,
    author: '― Albert Camus',
  },
  {
    qoute: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
    author: '― C.S. Lewis, The Four Loves',
  },
  {
    qoute: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    author: '― Maya Angelou',
  },
  {
    qoute: `“A friend is someone who knows all about you and still loves you.”`,
    author: '― Elbert Hubbard',
  },
  
];

var genBtn = document.getElementById("genBtn");
var showQoute = document.getElementById("showQoute");
var showAuthor = document.getElementById("showAuthor");

genBtn.addEventListener("click", generateQoute);

function generateQoute() {
  console.log(Math.round(Math.round(Math.random() * qoutes.length-1) ) );
  var randomIndex =
    Math.round(Math.round(Math.random() * qoutes.length-1) );
  if (randomIndex < qoutes.length && randomIndex >= 0 && randomIndex <= qoutes.length -1) {
    showQoute.innerHTML = qoutes[randomIndex].qoute;
    showAuthor.innerHTML = qoutes[randomIndex].author;
  } else {
    randomIndex =
      Math.round(Math.round(Math.random() * qoutes.length-1) );
  }
}
