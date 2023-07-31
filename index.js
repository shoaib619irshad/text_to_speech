const text=document.querySelector(".text");
const button=document.querySelector(".btn");
const speaks=new SpeechSynthesisUtterance();
const synth=window.speechSynthesis;
let ourText="";

const checkBrowserCompatibility=()=>{
if("speechSynthesis" in window)
console.log("Web Speech API supported!");
else
console.log("Web Speech API not supported!");
}

checkBrowserCompatibility();

button.addEventListener("click", ()=>{
    ourText=text.value;
    speaks.text=ourText;
    synth.speak(speaks);
    text.value="";
})