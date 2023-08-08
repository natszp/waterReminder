import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';



const RemoveDrinkForm = (props) => {

    const submitFormHandler = (event) => {
        event.preventDefault();
        const drinkData = {
            type: props.type,
            amount: props.amount,
            id: props.id
        }
        props.onRemoveDrinkData(drinkData);
    }

    return (
        <form onSubmit={submitFormHandler} >
            <InputLabel>Amount of {props.type}</InputLabel>
            <TextField
                type="number"
                value={props.amount}
                InputLabelProps={{
                    shrink: true,
                }}
                required={true}
            />
            <div>
                <Button type='submit' aria-label='add'>Remove</Button>
            </div>
        </form>

    )
}

export default RemoveDrinkForm