import React, { useEffect } from 'react';
//Styles
import { WrapForm, FormUpdate, Label, WrapButton  } from './styles';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { updateNaver } from '../../redux/actions/naversActions';

export default function Form({ naverInfo, setNaverInfo, handleChange, setOpen, naverId }) {

    const dispatch = useDispatch();
    const classes = useStyles();

    const { loading, errors } = useSelector(state => state.ui);
    const { activeNaver } = useSelector(state => state.navers);

    useEffect(() => {
        setNaverInfo({
            job_role: activeNaver.job_role,
            admission_date: activeNaver.admission_date,
            birthdate: activeNaver.birthdate,
            project: activeNaver.project,
            name: activeNaver.name,
            url: activeNaver.url
        })

    }, [activeNaver, setNaverInfo])

    //Função para chamar a criação do naver
    const updateNaverCall = (event) => {
        event.preventDefault();
        const newNaver = {
            job_role: naverInfo.job_role,
            admission_date: naverInfo.admission_date,
            birthdate: naverInfo.birthdate,
            project: naverInfo.project,
            name: naverInfo.name,
            url: naverInfo.url
        }
        dispatch(updateNaver(newNaver, naverId));
    }

    return (
        <FormUpdate onSubmit={updateNaverCall}>
            <WrapForm>
                <div className={classes.fields}>
                    <Label>Nome</Label>
                    <TextField 
                        label="Nome"
                        type="text"
                        id="outlined-size-small"
                        name="name"
                        value={naverInfo.name || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message === "Invalid Request Body - \"name\" is not allowed to be empty" ? "O campo não pode estar em branco" : false}
                        fullWidth
                    />
                </div>
                <div className={classes.fields}>
                    <Label>Cargo</Label>
                    <TextField 
                        label="Cargo"
                        type="text"
                        id="outlined-size-small"
                        name="job_role"
                        value={naverInfo.job_role || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message === "Invalid Request Body - \"job_role\" is not allowed to be empty" ? "O campo não pode estar vazio" : false}
                        fullWidth
                    />
                </div>
            </WrapForm>
            <WrapForm>
                <div className={classes.fields}>
                    <Label>Idade</Label>
                    <TextField 
                        placeholder="09/08/1968"
                        type="text"
                        id="outlined-size-small"
                        name="birthdate"
                        value={naverInfo.birthdate || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message}
                        fullWidth
                    />
                </div>
                <div className={classes.fields}>
                    <Label>Tempo de Empresa</Label>
                    <TextField 
                        placeholder="22/08/2020"
                        type="text"
                        id="outlined-size-small"
                        name="admission_date"
                        value={naverInfo.admission_date || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message}
                        fullWidth
                    />
                </div>
            </WrapForm>
            <WrapForm>
                <div className={classes.fields}>
                    <Label>Projetos que participou</Label>
                    <TextField 
                        label="Projetos"
                        type="text"
                        id="outlined-size-small"
                        name="project"
                        value={naverInfo.project || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message === "Invalid Request Body - \"project\" is not allowed to be empty" ? "O campo não pode estar vazio" : false}
                        fullWidth
                    />
                </div>
                <div className={classes.fields}>
                    <Label>Url da foto do naver</Label>
                    <TextField 
                        label="Url"
                        type="text"
                        id="outlined-size-small"
                        name="url"
                        value={naverInfo.url || ""}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        error={errors.message ? true : false}
                        helperText={errors.message === "Invalid Request Body - \"url\" is not allowed to be empty" ? "O campo não pode estar vazio" : false}
                        fullWidth
                    />
                </div>
            </WrapForm>
            <WrapButton>
                <Button variant="contained" type="submit" className={classes.button}>
                    Salvar 
                    {loading && <CircularProgress />}
                </Button>
            </WrapButton>
        </FormUpdate>
    )
}

const useStyles = makeStyles((theme) => ({
    fields: {
        width: '100%'
    },
    input: {
        marginTop: 14,
        width: '90%',
        borderColor: '#000',
        marginBottom: 14
    },
    button: {
        backgroundColor: '#212121',
        color :'#fff',
        '&&:hover': {
            backgroundColor: '#3a464a'
        },
        borderRadius: 0,
        marginRight: 0,
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto'
        },
        padding: '8px 48px'
    }
}))
