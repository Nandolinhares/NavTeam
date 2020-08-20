import React from 'react';
//Styles
import { Wrapper } from './styles';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { deleteNaver } from '../../redux/actions/naversActions';

export default function DeleteNaver({ setOpen, openDelete, setOpenDelete, handleCloseDelete, activeNaver }) {

    const classes = useStyles();
    const dispatch = useDispatch();

    //Abrir o modal de confirmação de naver deletado
    const handleDeleteNaver = () => {
        dispatch(deleteNaver(activeNaver.id));
        //Fechar Modal principal
        setOpen(false);
        //Fechar modal de delete
        setOpenDelete(false);
    }

    return (
        <Wrapper>
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Excluir Naver</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tem certeza que deseja excluir esse naver?
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.buttons}>
                    <Button variant="outlined" onClick={handleCloseDelete} className={classes.buttonCanc}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleDeleteNaver} autoFocus className={classes.buttonExc}>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </Wrapper>
    )
}

const useStyles = makeStyles({
    buttons: {
        justifyContent: 'center'
    },
    buttonCanc: {
        color: '#212121',
        borderColor: '#212121',
        borderRadius: 0,
        padding: '7px 48px'
    },
    buttonExc: {
        backgroundColor: '#212121',
        color: '#fff',
        borderRadius: 0,
        padding: '8px 48px',
        '&:hover': {
            backgroundColor: '#000'
        }
    }
})