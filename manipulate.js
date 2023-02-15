const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p1 = document.createElement('p');
p1.textContent = "Hey I'm red!";
p1.classList.add('p1');
container.appendChild(p1);

const hi3 = document.createElement('h3');
hi3.textContent = "I'm a blue h3";
container.appendChild(hi3);

const newBlock = document.createElement('div');
newBlock.classList.add('newBlock');
container.appendChild(newBlock);

const hi1 = document.createElement('h1');
hi1.textContent = "I'm in a div";
newBlock.appendChild(hi1);

const para2 = document.createElement('p')
para2.textContent = "ME TOO!";
para2.classList.add('p2');
newBlock.appendChild(para2);

// event listener #1 inside index.html

// event listener #2 more useful than #1
btn.onclick = () => alert('Hello World #2'); // shorthand function without arguments

// event listener #3 more powerful and useful for multiple events
const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
    alert("Hello World #3");
})

// uncomment to test each method, method 1 inside index::: not working need to revise the button to accommodate methods
// FUNCTION METHOD 
function alertFunction(){
    alert ("YAY! YOU DID IT");
}

// FUNCTION METHOD 2
// btn.onclick = alertFunction;

// FUNCTION METHOD 3
// btn.addEventListener('click',alertFunction);

btn.addEventListener('click', function (e) { // console log listener
    console.log(e);
  });

btn.addEventListener('click', function (e) { // console log listener target
    console.log(e.target);
  });
  

btn.addEventListener('click', function (e) { // listener that changes the background of the target
    e.target.style.background = 'blue';
  });
  
//   useful hints
// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// });