import {useState} from 'react';
import Pizza from "./pizza";

// This is a better method of exporting functions as it shows up in the stack trace
export default function Order() {
    // const pizzaType = "pepperoni";
    // const pizzaSize = "M";
    const [pizzaType, setPizzaType] = useState("Pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    return(
        <div className="order">
            <h2>Createe Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select
                        onChange={(e) => setPizzaType(e.target.value)}
                        name="pizza-type" value={pizzaType}>
                            <option value="pepperoni">The Pepperoni</option>
                            <option value="hawaiian">Hawaiian</option>
                            <option value="big_meat">the big meat</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input 
                                    checked={pizzaSize === 'S'} 
                                    type="radio" 
                                    name = "pizza-size"
                                    value = "S"
                                    id = "pizza-s"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor = "pizza-s">Small</label>
                            </span>
                            <span>
                                <input 
                                    checked={pizzaSize === 'M'} 
                                    type="radio" 
                                    name = "pizza-size"
                                    value = "M"
                                    id = "pizza-m"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor = "pizza-m">Medium</label>
                            </span>
                            <span>
                                <input 
                                    checked={pizzaSize === 'L'} 
                                    type="radio" 
                                    name = "pizza-size"
                                    value = "L"
                                    id = "pizza-L"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor = "pizza-L">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="sumbit">Add to Cart</button>
                </div>
                <div className = "order-pizza">
                    <Pizza
                        name="Pepperoni"
                        description="Another one"
                        image="/public/pepperoni.webp"
                    />
                    <p>£10.00</p>
                </div>
            </form>
        </div>
    )
        
    
}