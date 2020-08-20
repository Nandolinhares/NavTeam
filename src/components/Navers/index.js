import React from 'react';
import { NaversSection, NaverImage, NaverName, NaverJobRole, IconsSection } from './styles';
import { makeStyles } from '@material-ui/core/styles';
//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export default function Navers({ naver, showNaverInfo }) {

    const classes = useStyles();

    return (
       <NaversSection>
            <NaverImage src={naver.url} alt={naver.name} onClick={() => showNaverInfo(naver)} />
            <NaverName>{naver.name}</NaverName>
            <NaverJobRole>{naver.job_role}</NaverJobRole>
            <IconsSection>
                <Tooltip title="Deletar">
                    <IconButton aria-label="delete" className={classes.deleteButton}>
                        <DeleteIcon />
                    </IconButton> 
                </Tooltip>
                <Tooltip title="Editar">
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </IconsSection>
       </NaversSection>
    )
}

const useStyles = makeStyles({
    deleteButton: {
        marginLeft: -14
    }
})