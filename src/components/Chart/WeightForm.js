import { useState } from "react"
import { TextField } from "@mui/material"


const WeightForm = (props) => {

    const [enteredWeight, setWeight] = useState(60)

    const inputChangeHandler = (event) => {
        let inputValue = event.target.value
        if (!typeof(inputValue) === 'number' || 20>inputValue) {
           console.log('error'); // proper validation to be added
            
        } else {
            setWeight(event.target.value)
        props.onChangeWeight(event.target.value)

        }
    }


    return (
        <div>
            <form>
                <TextField id="outlined-basic"
                    label="Weight (kg)"
                    variant="outlined"
                    type='number'
                    InputProps={{
                        inputProps: {
                            max: 200, min: 20
                        }
                    }}
                    value={enteredWeight}
                    onChange={inputChangeHandler} />
            </form>
        </div>
    )
}

export default WeightForm;
