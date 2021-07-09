import styled from 'styled-components';
import ImgBg from '../../images/redReddish.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${ImgBg});
    height : 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh, -80px);
    max_height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw-1300px) /2);
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height = 100%
    padding: 0 2rem;
    width: 650px;
    color #fff;
    text-transform: uppercase;
    line-height : 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    margin-left: 2rem;
    cursor: pointer;
    letter-spacing: 3px
`

export const HeroHr = styled.hr`
    width: 590px;
    margin-left: 2rem;
    margin-bottom: 1rem;
    border: 3px solid #fff;
`

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    cursor: pointer;
    margin-botton: 2rem;
    margin-left: 2.9rem;
`
    
export const HeroBtn = styled.button`
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border: none;
    margin-left: 2rem;
    margin-top: 2rem;
    background: #8eb186;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #bd9bb5;
        transition: 0.2s ease-out;
        curson: pointer;
        color: #fff;
    }
`