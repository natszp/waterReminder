import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';


const ModalOverlay = (props) => {
    return (
        <>
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
        </>
    )
}


const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<ModalOverlay
                onOpen={props.onOpen}
                content={props.content}
                onConfirm={props.onConfirm}
                buttonContent={props.buttonContent}
            />, document.getElementById('modal-root'))}
        </>
    )

}

export default Modal;