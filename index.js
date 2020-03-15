window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;


const button = document.querySelector('button.btn');
const stop = document.querySelector("button.stop");
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);

button.addEventListener('click', () => {
  dictate();
});


stop.addEventListener('click', () => {
   recognition.stop();
});


function dictate(){
  
    recognition.start();
    
    recognition.onresult = (event) => {
        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far. 
        // We only need the current one.
        var current = event.resultIndex;
    
      
    console.log("HELLO");
	    // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;
    
        // Add the current transcript to the contents of our Note.
        paragraph.textContent += transcript;
    };
}
