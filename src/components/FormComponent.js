import './FormComponent.css'
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid'


const FormComponent = (props) =>
{
    const [title,setTitle] = useState('')  // Creating State React Hook
    const [amount,setAmount] = useState(0)  // Creating State React Hook
    const inputTitle = (event) =>
    {
        setTitle(event.target.value) // Keep value to state
    }

    const inputAmount = (event) =>
    {
        setAmount(event.target.value);
    }

    const saveItem = (event) =>
    {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title: title,
            amount: Number(amount),
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" placeholder="Please typing name" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" placeholder="(+ income , - expense)" onChange={inputAmount} value={amount}></input>
                </div>
                <div >
                    <button type="submit" className="btn">Add Info</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent