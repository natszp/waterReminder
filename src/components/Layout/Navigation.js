import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Navigation = (props) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.text}
                    </Typography>
                    <Button color="inherit" onClick={props.onClick}>{props.buttonText}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navigation;