import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
height:100vh;
scroll-snap-align: center;
display:flex ;
justify-content: center;
`;

const Container = styled.div`
height:100vh;
scroll-snap-align: center;
justify-content: center;
`;

const Left = styled.div`
flex:1;
`;

const List = styled.div`
height:100vh;
scroll-snap-align: center;
`;

const ListItem = styled.div`
height:100vh;
scroll-snap-align: center;
`;

const Right = styled.div`
flex: 1;
`;

export const Works = () => {
  return (
    <Section>
    <Container>
        <Left>
            <List>
                {data.map((item) => (
                    <ListItem>{item}</ListItem>
                ))}
            </List>
        </Left>
        <Right></Right>
    </Container>
    </Section>
  )
}
