import { useState } from "react";
import ItemList from './GroceryList';
import { produce, pantryItems } from './gorecyItems';

export default function GroceryCart() {
    const [cart, setCart] = useState([]);

    const addItem = ((item) => {
        setCart((prev) => {
            if (prev.includes(item)) {
                alert('Already Added');
                return prev;
            };
                           
            return [
                ...prev,
                item
            ];
        })
    }); 
    
    const removeItem = (targetIndex) => {
        setCart((prev) => {
            return prev.filter((item, index) => index !== targetIndex);
        })
    }

    const listStyles = {
        ul: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        list: {
            padding: '10px'
        }
    }

    return (
        <div>
            <h2>Grocery List</h2>
            <ul style={listStyles.ul}>
                {cart.map((item, index) => (
                    <li onClick={() => removeItem(index)} key={index}
                        style={listStyles.list}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <h2>Produce</h2>
            <ItemList items={produce} onItemClick={addItem} />

            <h2>Pantry Items</h2>
            <ItemList items={pantryItems} onItemClick={addItem} />
        </div>
    )
}
