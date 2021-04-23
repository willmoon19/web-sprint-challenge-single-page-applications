import React from "react";

export default function PizzaOrder(props){
    const { info, update, submit } = props;

    const onChange = event => {
        const {name, value} = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

    return (
        <form onSubmit={onSubmit}>s
            <div>
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
                    <select value={info.size}>
                        <option value="sml">Small</option>
                        <option value="med">Medium</option>
                        <option value="lrg">Large</option>
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

            </div>
          
        </form>
    )
}