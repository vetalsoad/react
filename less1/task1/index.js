// <div class="greeting">Hello, react!</div>



const rootElement = document.querySelector('#root');

/* const  greetingElement = document.createElement("div");
greetingElement.classList.add("greeting");
greetingElement.textContent = "Hello, react!";

rootElement.append(greetingElement); */

const greetingElement = React.createElement(
  'div',
  {className: 'greeting'},
  'Hello, React!'
);

ReactDOM.render(greetingElement, rootElement);