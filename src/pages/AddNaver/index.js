import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, WrapperTitle, Title, WrapModalInfo } from './styles';
//Material UI
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
//Redux
import { useSelector } from 'react-redux';

//Components
import Form from '../../components/AddNaver/Form';

export default function AddNaver() {

    const { message } = useSelector(state => state.ui);

    const [naverInfo, setNaverInfo] = useState({
        job_role: "",
        admission_date: "",
        birthdate: "",
        project: "",
        name: "",
        url: ""
    })

    //Modal
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(message === "Naver criado com sucesso!") {
            setOpen(true);
        }
    }, [message])

      //Mudando o valor do component
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNaverInfo({ ...naverInfo, [name]: value });
    }

    const handleClose = () => {
        setOpen(false);
        window.location.href = '/';
    }

    return (
        <Wrapper>
            <WrapperTitle>
                <Tooltip title="Voltar">
                    <IconButton aria-label="Voltar" component={Link} to="/">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Tooltip>
                <Title>Adicionar Naver</Title>
            </WrapperTitle>
            
            <Form naverInfo={naverInfo} handleChange={handleChange} setOpen={setOpen} />

            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <WrapModalInfo>
                    <DialogTitle id="alert-dialog-title">Naver Criado</DialogTitle>
                    <DialogActions>
                        <Tooltip title="Fechar">
                            <IconButton aria-label="close" component={Link} to="/">
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </DialogActions>
                </WrapModalInfo>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
                
        </Wrapper>
    )
}