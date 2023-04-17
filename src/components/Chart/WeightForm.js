import { useState } from "react"

const WeightForm = (props) => {

    const [enteredWeight, setWeight] = useState(60)

    const inputChangeHandler = (event) => {
        setWeight(event.target.value)
        props.onChangeWeight(event.target.value)
    }


    return (
        <div>
            <form>
                <input type='number' label='weight' value={enteredWeight} onChange={inputChangeHandler}></input>
            </form>
        </div>
    )
}

export default WeightForm;