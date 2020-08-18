import React, { useState } from 'react';
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';//Redux
//Styles Styled components
import { Wrapper, Logo, FormLogin, Label } from './styles';
//MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { loginUser } from '../../redux/actions/authenticationActions';

export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    //Controlled components
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    //Mudando o valor do component
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    //Ao enviar
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: values.email,
            password: values.password
        }

       if(user.email !== "" && user.password !== "") {
            console.log(user);
            dispatch(loginUser(user));
       } else {
           alert("Preencha os campos corretamente")
       }
    }

    return (
        <Wrapper>
            {/* Logo SVG do figma */}
            <Logo />

            {/* Formulário do login */}
            <FormLogin onSubmit={handleSubmit}>
                <Label>Email</Label>
                <TextField 
                    label="Email"
                    type="email"
                    id="outlined-size-small"
                    name="email"
                    value={values.email || ""}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    fullWidth
                />
                <Label>Senha</Label>
                <TextField 
                    label="Senha"
                    type="password"
                    id="outlined-size-small"
                    name="password"
                    value={values.password || ""}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    fullWidth
                />

                <Button variant="contained" type="submit" className={classes.button}>
                    Entrar  
                    {loading && <CircularProgress />}
                </Button>
            </FormLogin>

        </Wrapper>
    )
}

const useStyles = makeStyles({
    input: {
        marginBottom: 28,
        width: '100%'
    },
    button: {
        backgroundColor: '#212121',
        color :'#fff',
        '&&:hover': {
            backgroundColor: '#3a464a'
        }
    }
})