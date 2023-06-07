import React from 'react'
import { styled } from 'styled-components'
import { Navbar } from './Navbar';

const Section = styled.div`
height:100vh;
scroll-snap-align: center;
display:flex;
flex-direction:column;
align-items: center;
justify-content:space-between;
`;

const Container = styled.div`
height:100vh;
scroll-snap-align: center;
width:1400px;
display:flex;
justify-content:space-between;
`;

const Left = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:20px;
`;

const Title = styled.h1`
    font-size:74px;
`;

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height:15px;
`;

const SubTitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size:24px; 
    color:lightgray;
`;

const Button = styled.button`
    background-color : #da4ea2;
    color: white;
    width:100px;
    font-weight:500;
    border-radius: 5px;
    padding : 10px;
    border: none;
    cursor: pointer;
`;

const Right = styled.div`
    flex:3;
    position: relative;
`;
const Img = styled.img`
    width: 600px;
    height: 500px;
    object-fit: contain;
    position: absolute;
    top : 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(30px);
        }
    }
`;


export const Hero = () => {
  return (
    <Section>
    <Navbar/>
    <Container>
        <Left>
            <Title>Hi, I'm Yash Paudel</Title>
            <WhatIDo>
            <Line src='./img/whitearrow.png'/>
                <SubTitle>I am a Web Developer</SubTitle>
            </WhatIDo>
            <Desc>I am practicing react and threejs</Desc>
            <Button>Learn More</Button>
        </Left>
        <Right>
            {/* {3d Model} */}
            <Img src='./img/hoodie.png'></Img>
        </Right>
    </Container>
    </Section>
  )
}
