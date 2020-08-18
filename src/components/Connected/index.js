import React from 'react';
import Button from '@material-ui/core/Button';
//Redux
import { useDispatch } from 'react-redux';
//Action
import { logoutUser } from '../../redux/actions/authenticationActions';

export default function Connected() {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
            <h1>Logado</h1>
            <Button variant="outlined" onClick={logout}>Sair</Button>
        </div>
    )
}
