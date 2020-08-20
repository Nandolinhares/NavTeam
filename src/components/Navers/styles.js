import styled from 'styled-components';

export const NaversSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 28px;
`;

export const NaverImage = styled.img`
    width: 280px;
    height: 280px;
    @media (max-width: 314px) {
        width: 100%;
    }
    cursor: pointer;
`;

export const NaverName = styled.h2`
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: #212121;
    margin-bottom: 2px;
`;

export const NaverJobRole = styled.h2`
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    font-weight: normal;
    margin-top: 0;
`;

export const IconsSection = styled.section``;