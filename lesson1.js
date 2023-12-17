
let text1Words = ["你好，","你","想","学习","中文","吗？","学习","中文","很", "难 ，","但是","也","很","有意思。"];
let text1Meaning = ["hello", "you", "want to", "study", "chinese", "question particle, makes the sentence a question", "study", "chinese", "very" ,"difficult", "but", "also", "very", "interesting"];

let tekstInnpakningEl = document.querySelector("#tekst1Innpakning");
let popup = document.querySelector("#popUp");
let divArray = [];

for (let i=0; i<text1Words.length; i++){
    let div = document.createElement("div");
    //her lager jeg teksten og divene 
    div.innerHTML= text1Words[i];
    div.id = "word" + i;
    divArray.push(div)
    tekstInnpakningEl.appendChild(div);
    //disse gjør at backgrunnsfargen endres
    div.addEventListener("mouseenter", ()=>{ div.style.backgroundColor ="grey"; })
    div.addEventListener("mouseout", ()=>{ div.style.backgroundColor ="white"; })
}
console.log(divArray)
//prøv å loope denne koden senere eller bare kopy paste mange ganger
// problemet var at jeg glemte let i: let s = 0;
for (let s=0; s<=text1Meaning.length;s++ ){ 
    divArray[s].addEventListener("click", ()=>{
        popup.innerHTML = text1Meaning[s];
        console.log(text1Meaning)
    })
}
