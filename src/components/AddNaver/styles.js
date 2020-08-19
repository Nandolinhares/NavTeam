import styled from 'styled-components';

export const WrapForm = styled.section`
    display: flex;
    flex-direction: row;
    margin: 28px;
    @media (max-width: 413px) {
        flex-direction: column;
    }
`;

export const FormAdd = styled.form``;

export const Label = styled.label`
    font-weight: bold;
`;

export const WrapButton = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 545px;
`;
