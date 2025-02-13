const messages = [
    "تاسو نه مه دا توقعو نه وو",
    "مړه ګپ مه لګوه",
    "سوچ پې وکه",
    "يو وار بيا سوچ پې اوکه",
    "مړه خپه دې کم ",
    "مړه ته لا اوس ام نه کوې",
    "مړه ډير زيات دې خپه کړم ",
    "ټيک ده ستا خوښه ده نو.",
    "کلک که يسسسس ستا............. ډرامې دې راخسې دې",
  //)   "Just kidding, say yes please! ❤️"
   
  //)   "Are you sure?",
  //)   "Really sure??",
  //)   "Are you positive?",
  //)   "Pookie please...",
  //)   "Just think about it!",
  //)   "If you say no, I will be really sad...",
  //)   "I will be very sad...",
  //)   "I will be very very very sad...",
  //)   "Ok fine, I will stop asking...",
  //)  "Just kidding, say yes please! ❤️"-->
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}