import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { NavbarSection, LogoNave } from './styles';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { logoutUser } from '../../redux/actions/authenticationActions';

//Images
import Logo from '../../images/logo.png';

export default function Navbar() {

    const dispatch = useDispatch();
    const classes = useStyles();
    const { authenticated } = useSelector(state => state.user);

    //Função Logout onClick
    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <NavbarSection>
            <Button component={Link} to="/">
                <LogoNave src={Logo} alt="Logo" />
            </Button>
            {authenticated && <Button onClick={logout} className={classes.buttonLogout}>Sair</Button>}
        </NavbarSection>
    )
}

const useStyles = makeStyles({
    buttonLogout: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18
    },
})