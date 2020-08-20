import React from 'react';
//Styles
import { Wrapper, WrapModalInfo, NaverImage, Title, InformationTitle, InformationDescription } from './styles';
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

export default function ShowNaver({ open, handleClose, activeNaver, loading }) {

    const classes = useStyles();

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
 
                                <Tooltip title="Deletar">
                                    <IconButton aria-label="delete" >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Editar">
                                    <IconButton aria-label="edit" >
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>         
                            </Grid>
                        </Grid>
                        
                        {/* <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent> */}
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