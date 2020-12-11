//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

const q1 = document.getElementById('a-1');
const q1a = document.createElement('div');
q1a.className = 'square';
q1.appendChild(q1a);
q1a.textContent = 'x';
q1a.addEventListener('click',() => {
  if (q1a.textContent === 'x') {
    q1a.textContent = 'o';
  } else {
    q1a.textContent = 'x';
  }
});




//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

const q2 = document.getElementById('a-2');
const q2aSelect = document.createElement('select');
colors.forEach((c) => {
  let opt = document.createElement('option');
  opt.text = c;
  q2aSelect.add(opt);
});
q2.appendChild(q2aSelect);
const q2aButton = document.createElement('button');
q2aButton.textContent = 'remove option';
q2.appendChild(q2aButton);
q2aButton.addEventListener('click',() => {
  if (q2aSelect.selectedIndex>=0) {
    q2aSelect.remove(q2aSelect.options.selectedIndex);
  }
});


//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
   const radius = document.getElementById('radius');
   const volume = document.getElementById('volume');
   const area = document.getElementById('area');
   const currentRadius = parseFloat(radius.value);
   if (!isNaN(currentRadius)) {
     console.log("currentRadius",currentRadius,radius.value);
     const currentVolume = Math.PI * 4 * (currentRadius ** 3) / 3;
     const currentArea = Math.PI * 4 * (currentRadius ** 2);
     volume.value = currentVolume;
     area.value = currentArea;
   }
 }

window.onload = document.getElementById('submit').onclick = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.


//resolve // QUESTION 4 here

const q3 = document.getElementById('a-3')
const q4 = document.getElementById('a-4');
const hideButtons=[];
for (let i=0;i<3;i++) {
  hideButtons.push(document.createElement('button'));
  hideButtons[i].textContent = `Hide Answer ${i}`
  q4.appendChild(hideButtons[i]);
}

q4.addEventListener('click',(e) => {
  for (let i=0;i<3;i++) {
    if (e.target === hideButtons[i]) {
      let toHide = q1;
      if (i === 1) {
        toHide = q2;
      } else if (i==2) {
        toHide = q3;
      }
      if (toHide.style.display != 'none') {
        toHide.style.display = 'none';
        e.target.textContent = `Show Answer ${i}`
      } else {
        toHide.style.display = 'block';
        e.target.textContent = `Hide Answer ${i}`
      }
    }
  }
});
