import React, { useState } from 'react';
//Styles
import { Wrapper, Title, WrapModalMessage } from './styles';
//Material UI
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//Redux
import { useSelector } from 'react-redux';

export default function ModalMessage() {

    const { message } = useSelector(state => state.ui);

    const [open, setOpen] = useState(true);

    //Fechar modal
    const handleClose = () => {
        setOpen(false);
        window.location.href = "/";
    }

    return (
        <Wrapper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <WrapModalMessage>
                    <Title>Naver Excluído</Title>
                    <DialogActions>
                    <Tooltip title="Fechar">
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    </DialogActions>
                </WrapModalMessage>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
    </Wrapper>
    )
}
