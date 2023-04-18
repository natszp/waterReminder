import { useState } from "react"
import { TextField } from "@mui/material"

const WeightForm = (props) => {

    const [enteredWeight, setWeight] = useState(60)

    const inputChangeHandler = (event) => {
        setWeight(event.target.value)
        props.onChangeWeight(event.target.value)
    }


    return (
        <div>
            <form>
                <TextField id="outlined-basic"
                    label="Weight (kg)"
                    variant="outlined"
                    type='number'
                    min='20'
                    value={enteredWeight}
                    onChange={inputChangeHandler} />
            </form>
        </div>
    )
}

export default WeightForm;
