import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Login from '../../components/Login';
import Connected from '../../components/Connected';

export default function Home() {

    const { authenticated } = useSelector(state => state.user);

    return (
        <>
            {authenticated ? (
                <Connected />
            ) : (
                <Login />
            )}
        </>
    )
}

