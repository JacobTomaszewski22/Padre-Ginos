import { createRoot } from "react-dom/client";
import Order from "./Order";

// Create a component that returns an element, with a div inside it, no attributes. inside that will be an h1, no attributes, saying padre...
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order/>
    </div>
  );
};

//Create a container and set it to the root element
const container = document.getElementById("root");
//Add it to the DOM?
const root = createRoot(container);
//Render the whole app
root.render(<App />);
