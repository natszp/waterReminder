import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  Button  from '@mui/material/Button';


const Modal = (props) => {

    return (
        <div>
            <Dialog open={props.onOpen}>
                <DialogTitle id="alert-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onConfirm} autoFocus>
                        {props.buttonContent || 'Understood'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default Modal;