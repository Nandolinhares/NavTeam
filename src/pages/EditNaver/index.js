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
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { showNaver } from '../../redux/actions/naversActions';

//Components
import Form from '../../components/EditNaver/Form';

export default function EditNaver({ match }) {

    const dispatch = useDispatch();

    const naverId = match.params.id;

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
        if(message === "Naver atualizado com sucesso!") {
            setOpen(true);
        }

        //Pegar o naver pelo Id
        dispatch(showNaver(naverId));
        //Limpando errors
        dispatch({ type: 'CLEAR_ERRORS' });
      
    }, [dispatch, message, naverId])

      //Mudando o valor do component
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNaverInfo({ ...naverInfo, [name]: value });
    }

    //
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
                <Title>Editar Naver</Title>
            </WrapperTitle>
            
            <Form naverInfo={naverInfo} setNaverInfo={setNaverInfo} handleChange={handleChange} setOpen={setOpen} naverId={naverId} />

            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <WrapModalInfo>
                    <DialogTitle id="alert-dialog-title">Naver Atualizado</DialogTitle>
                    <DialogActions>
                        <Tooltip title="Fechar">
                            <IconButton aria-label="close" onClick={handleClose}>
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