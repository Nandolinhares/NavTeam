import React, { useState } from 'react';
//Styles
import { Wrapper, WrapModalInfo, NaverImage, Title, InformationTitle, InformationDescription, WrapButtons } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//Components
import DeleteNaver from '../DeleteNaver';

export default function ShowNaver({ open, setOpen, handleClose, activeNaver, loading }) {

    const classes = useStyles();

    //State do modal
    const [openDelete, setOpenDelete] = useState(false);

    //Abrir modal Deletar
    const openDeleteModal = () => {
        setOpenDelete(true);
    }

    //Fechar modal
    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    return (
        <Wrapper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {loading ? (
                    <CircularProgress />
                ) : (
                    <>                 
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6} className={classes.gridImage}>
                                <NaverImage src={activeNaver.url} alt={activeNaver.name} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <WrapModalInfo>
                                    <Title>{activeNaver.name}</Title>
                                    <DialogActions>
                                        <Tooltip title="Fechar">
                                            <IconButton aria-label="close" onClick={handleClose}>
                                                <CloseIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </DialogActions>
                                </WrapModalInfo>
                                {/* Job */}
                                <InformationDescription>{activeNaver.job_role}</InformationDescription>
                                {/* Idade */}
                                <InformationTitle>Idade</InformationTitle>
                                <InformationDescription>{activeNaver.birthdate}</InformationDescription>
                                {/* Tempo de empresa */}
                                <InformationTitle>Tempo de empresa</InformationTitle>
                                <InformationDescription>{activeNaver.admission_date}</InformationDescription>
                                {/* Projetos */}
                                <InformationTitle>Projetos que participou</InformationTitle>
                                <InformationDescription>{activeNaver.project}</InformationDescription>
 
                                <WrapButtons>
                                    <Tooltip title="Deletar">
                                        <IconButton aria-label="delete" onClick={openDeleteModal} >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Editar">
                                        <IconButton aria-label="edit" >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </WrapButtons>      
                            </Grid>
                        </Grid>
                        
                        {/* Modal do delete se o openDelete for sim */}
                        <DeleteNaver setOpen={setOpen} openDelete={openDelete} setOpenDelete={setOpenDelete} handleCloseDelete={handleCloseDelete} activeNaver={activeNaver} />
                    </>
                )}
            </Dialog>
        </Wrapper>
    )
}


const useStyles = makeStyles({
    gridImage: {
        padding: '0 !important'
    }
})