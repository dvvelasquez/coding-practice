/* ---------- Importing react when using React with node.js ----------*/
// import { React } from 'react';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);

const container = document.getElementById("app");
console.log(container); // should log the <main> element
const root = ReactDOM.createRoot(container);

/* Normal elements */
const text = <p>This is a paragraph</p>;

/* Nested JSX */
// Note: if it's nested elements it has to be wrapped within a valid html element
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// Copy code here:
root.render({ myDiv });

/* Example 2 */
const myList = (
  <ul>
    <li>text 1</li>
    <li>text 2</li>
    <li>text 3</li>
    <li>text 4</li>
  </ul>
);

root.render(myList);

/*
In HTML, it’s common to use class as an attribute name:
In JSX, you can’t use the word class! You have to use className instead:
<h1 className="big">Title</h1>
*/
const myDiv1 = <div className="big">I AM A BIG DIV</div>;

root.render(myDiv1);

/* Add a bit of js to reach */
root.render(<h1>2 + 3</h1>); // will display it as is (string)
root.render(<h1>{2 + 3}</h1>); // will add the total and display 5 as result
/* Or */
const math = <h1>2 + 3 = {2 + 3}</h1>;
root.render(math);

/* Ways of rendering */
const name = "Gerdo";
const greeting = <p>Hello, {name}!</p>;

const theBestString = "This text was accessed through a javascript variable";
root.render(
  <h1>
    {theBestString}
    {greeting}
  </h1>
);

/* From an Obj */
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi",
};

const panda = <img src={pics.panda} alt="Lazy Panda" />;

const owl = <img src={pics.owl} alt="Unimpressed Owl" />;

const owlCat = <img src={pics.owlCat} alt="Ghastly Abomination" />;

const goose =
  "https://content.codecademy.com/courses/React/react_photo-goose.jpg";
const gooseImg = <img src={goose} />;
root.render(gooseImg);

/* Event Listeners */
/* Note that in HTML, event listener names are written in all lowercase,
such as onclick or onmouseover. In JSX, event listener names are written
in camelCase, such as onClick or onMouseOver. */
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  );
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <img
    onClick={makeDoggy}
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);

root.render(kitty);

/* Conditionals statements If / else */
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "heads" : "tails";
}

const animalPics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};
let animalImg;

// if/else statement begins here:
if (coinToss() === "heads") {
  animalImg = <img src={animalPics.kitty} />;
} else {
  animalImg = <img src={animalPics.doggy} />;
}

root.render(animalImg);

/* JSX Conditionals: The Ternary Operator */
const petsPics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

const img = <img src={petsPics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

root.render(img);

// Conditional JSX (condition && expression)
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

/* .map in JSX */
const people = ["Rowe", "Prevost", "Gare"];
const peopleList = people.map((person, index) => (
  // index + 1 is to start the count from 1 instead of 0
  <li key={"person_" + index}>
    {"person-" + (index + 1)}: {person}
  </li>
));

root.render(<ul>{peopleList}</ul>);

/* React.createElement */
// In JSX would be const greatestDivEver = <div>i am div</div>;
const greatestDivEver = React.createElement("div", null, "i am div");
const greatestDivEver1 = React.createElement(
  "div",
  { className: "Hello" },
  "i am div"
);

/* Note:
Reference: createElement(type, props, ...children)
createElement returns a React element object with a few properties:

type: The type you have passed.
props: The props you have passed except for ref and key.
ref: The ref you have passed. If missing, null.
key: The key you have passed, coerced to a string. If missing, null.
*/

/* Create Element Examples */
// React
// import { createElement } from 'react';

function Greeting({ name }) {
  return React.createElement(
    "h1",
    { className: "greeting" },
    "Hello ",
    React.createElement("i", null, name),
    ". Welcome!"
  );
}

function App() {
  return <Greeting name="Taylor" />;
}

root.render(<App />);

// Example in JSX
function Greeting1({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

// export default function App1() {
//     return <Greeting1 name="Taylor" />;
// }
