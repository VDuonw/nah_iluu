const wrapper = document.querySelector(".wrap");

const question = document.querySelector(".question");

const gif = document.querySelector(".gif");

const yes = document.querySelector(".yes");

const no = document.querySelector(".no");

yes.addEventListener("click", () => {

question.innerHTML = "Siuuu:3 i'm Winnner";
  gif.src ="https://media1.giphy.com/media/65wE7Exx1eKZGYIP0G/giphy.gif?cid=ecf05e47pflucmh0vrme015p70yv93fc3kv8n0yzgt319s8u&ep=v1_gifs_related&rid=giphy.gif&ct=s"
});

no.addEventListener('mouseover', () =>{

const noRect = no.getBoundingClientRect();

const maxX = window.innerWidth - noRect.width;
const maxY = window.innerHeight - noRect.height;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

no.style.left = randomX + 'px';
no.style.top = randomY + 'px';
});
