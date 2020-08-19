import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Title, WrapNavSection, WrapperNavers } from './styles';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { getNavers } from '../../redux/actions/naversActions';

//Components
import Navers from '../Navers';

export default function Connected() {

    const dispatch = useDispatch();
    const classes = useStyles();
    const { navers } = useSelector(state => state.navers);

    //Pega os navers cadastrados
    useEffect(() => {
        dispatch(getNavers());
    }, [dispatch])

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
                            <Navers naver={naver} />
                        </div>
                    )
                })}
            </WrapperNavers>
            
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