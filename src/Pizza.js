import React from "react";

export default function PizzaOrder(props){
    const { info, update, submit, disabled, errors, saveOrder } = props;

    const onChange = event => {
        const {name, value, checked, type} = event.target
        const valueToUse = type === "checkbox" ? checked : value
        update(name, valueToUse)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="container">
                <label>Name
                    <input
                        type="text"
                        value={info.name}
                        onChange={onChange}
                        name="name"
                        id="name-input"
                    />
                </label>
            <br></br>
                <label>Size
                    <select value={info.size} id="size-dropdown" name="size" onChange={onChange}>
                        <option value="">-- Choose a Size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
            <br></br>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={info.pepperoni}
                        onChange={onChange}
                    />
                </label>
            <br></br>
                <label>Olives
                    <input
                        type="checkbox"
                        name="olives"
                        checked={info.olives}
                        onChange={onChange}
                    />
                </label>
            <br></br>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={info.sausage}
                        onChange={onChange}
                    />
                </label>
            <br></br>
                <label>Pepper
                    <input
                        type="checkbox"
                        name="pepper"
                        checked={info.pepper}
                        onChange={onChange}
                    />
                </label>
            <br></br>
                <label>Special Request
                    <input
                        type="text"
                        name="specialRequest"
                        onChange={onChange}
                        id="special-text"
                    />
                </label>
            <br></br>
            <button onClick={saveOrder}>Add to Order</button>
            <br></br>
                <button id="order-button" disabled={disabled}>Submit</button>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
          
        </form>
    )
}