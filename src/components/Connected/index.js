import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Title, WrapNavSection, WrapperNavers } from './styles';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { getNavers, showNaver } from '../../redux/actions/naversActions';

//Components
import Navers from '../Navers';
import ShowNaver from '../ShowNaver';

export default function Connected() {

    const dispatch = useDispatch();
    const classes = useStyles();

    //State modal
    const [open, setOpen] = useState(false);

    //Redux info
    const { navers, activeNaver } = useSelector(state => state.navers);
    const { loading } = useSelector(state => state.ui);

    //Pega os navers cadastrados
    useEffect(() => {
        dispatch(getNavers());
    }, [dispatch])

    //Show Naver information
    const showNaverInfo = (naver) => {
        dispatch(showNaver(naver.id));
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        dispatch({ type: 'CLEAR_ACTIVE_NAVER' });
    }

    return (
        <Wrapper>
            <WrapNavSection>
                <Title>Navers</Title>
                <Button variant="contained" className={classes.buttonAdd} component={Link} to="/cadastrar" >Adicionar Naver</Button>
            </WrapNavSection>
            {/* Navers */}
            <WrapperNavers key={Math.random() * 100000}>
                {navers.map(naver => {
                    return (
                        <div key={Math.random() * 10000}>
                            <Navers naver={naver} showNaverInfo={showNaverInfo} />
                        </div>
                    )
                })}
            </WrapperNavers>

            {/* Modal que vai abrir se o open estiver true */}
            <ShowNaver open={open} handleClose={handleClose} activeNaver={activeNaver} loading={loading} />
            
        </Wrapper>
    )
}

const useStyles = makeStyles({
    buttonAdd: {
        backgroundColor: '#212121',
        color: '#fff',
        '&&:hover': {
            backgroundColor: '#3a464a'
        },
        alignSelf: 'center',
        borderRadius: 0,
        padding: 14
    }
})