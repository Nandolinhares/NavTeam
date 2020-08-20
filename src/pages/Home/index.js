import React from 'react';
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
//Redux
import { useSelector } from 'react-redux';

//Components
import Login from '../../components/Login';
import Connected from '../../components/Connected';

export default function Home() {

    const { authenticated } = useSelector(state => state.user);
    const { loading } = useSelector(state => state.ui);

    return (
        <>
            {authenticated ? (
                <Connected />
            ) : (
                <Login />
            )}
            {loading && <CircularProgress />}
        </>
    )
}

