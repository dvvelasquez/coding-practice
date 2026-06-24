import { useState } from 'react';
import { GroceryItemAdvanced, GroceryItemSimple } from './GroceryItem';

function ShowHideGroceryList() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
        isOpen ? 'Hide List' : 'Show List';
    }

    const itemList = ['Eggs', 'Banana', 'Strawberry', 'Bread', 'Oranges']

    const myList = (
        itemList.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    )

    return (
        <GroceryItemAdvanced type="Grocery List!" show={handleClick}>
            {isOpen ? myList : ''}
        </GroceryItemAdvanced>
    )
    
}

function ShowGroceryOnClick() {

    function showGroceryOnClick(item) {
        alert(item);
    }

    return (
        <GroceryItemSimple 
            onClick={() => showGroceryOnClick('Banana')}
            name="Banana"
        />
    )
}

export {
    ShowHideGroceryList,
    ShowGroceryOnClick
};