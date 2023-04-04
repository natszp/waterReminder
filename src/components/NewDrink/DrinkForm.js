const DrinkForm = () => {


    return (
        <div>
            <form>
                <div>
                    <div>
                        <label>Type</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input
                            type='number'
                            min='100'
                            step='100'
                        />
                    </div>
                </div>
                <div>
                    <button type="button">Cancel</button>
                    <button type='submit'>Add Drink</button>
                </div>
            </form>
        </div>
    )
}

export default DrinkForm;