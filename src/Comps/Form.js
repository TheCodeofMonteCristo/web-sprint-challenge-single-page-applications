import "../index.css";

const Form = props => {

    const {
        values,
        submit,
        change,
        errors
    } = props

    const handleSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const handleChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return (
        <form id="pizza-form" className="form-container" onSubmit={handleSubmit}>
            <h2>Name for Order</h2>
            <div className="name-input">
                <label>
                    <input 
                    id="name-input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    />
                </label>
            </div>
            {/* DROPDOWN */}
            <h2>Choice of Size</h2>
            <div className="dropdown">
                <label>
                    <select
                        id="size-dropdown"
                        onChange={handleChange}
                        value={values.size}
                        name='size'
                        className="dropdown-content"
                    >
                        <option value='8in'>8 Inch</option>
                        <option value='10in'>10 Inch</option>
                        <option value='12in'>12 Inch</option>
                        <option value='14in'>14 Inch</option>
                    </select>
                </label>
            </div>
            {/* Radio Btns */}
            <h2>Choice of Sauce</h2>
            <div className="sauce-radio">
                
                <label>Original Red
                    <input 
                        name='sauce'
                        value='original'
                        type='radio'
                        data-cy="original"
                        onChange={handleChange}
                        checked={values.sauce === 'original'}
                    />
                </label>
                <label>Garlic Ranch
                    <input 
                        name='sauce'
                        value='garlic'
                        type='radio'
                        data-cy="garlic"
                        onChange={handleChange}
                        checked={values.sauce === 'garlic'}
                    />
                </label>
                <label>BBQ sauce
                    <input 
                        name='sauce'
                        value='BBQ'
                        type='radio'
                        data-cy="BBQ"
                        onChange={handleChange}
                        checked={values.sauce === 'BBQ'}
                    />
                </label>
                <label>Alfredo
                    <input 
                        name='sauce'
                        value='alfredo'
                        type='radio'
                        data-cy="alfredo"
                        onChange={handleChange}
                        checked={values.sauce === 'alfredo'}
                    />
                </label>
            </div>
            {/* CHECKBOX */}
            <h2>Choice your Toppings</h2>
            <div className="topping-checkbox">
                <label>Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        checked={!!values.pepperoni}
                        onChange={handleChange}
                    />
                </label>
                <label>Sausage
                    <input 
                        name='sausage'
                        type='checkbox'
                        checked={!!values.sausage}
                        onChange={handleChange}
                    />
                </label>
                <label>Bacon
                    <input 
                        name='bacon'
                        type='checkbox'
                        checked={!!values.bacon}
                        onChange={handleChange}
                    />
                </label>
                <label>Grilled Chicken
                    <input 
                        name='chicken'
                        type='checkbox'
                        checked={!!values.chicken}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="special-instructions">
                <h4>Special Instructions</h4>
                <label>
                    <input 
                        id="special-text"
                        type='text'
                        name='special'
                        placeholder='Special Instructions'
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button id="order-button">Add To Order</button>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.sauce}</div>
            </div>
        </form>
    )
}

export default Form

