import styled from "styled-components";
import PorofilePic from "./jen.JPG"

function About() {

    return( 
        <Container>
    <ContainerGrid>
        <Grid>
            <AboutContent>
                <h1 style={{color: '#78ebbd'}}>Software Engineer</h1>
                <p>Full Stack software developer with experience in Ruby on Rails, React, and JavaScript with a Theatre background. Possesses strong skills in team collaboration, critical thinking, and creative problem solving. I am constantly seeking to innovate and master new skills.</p>
                <p>While away from my desk, I enjoy spending time with my incredible family, crocheting, sewing, and hiking; when i have time to get out of the city.</p>
            </AboutContent>
        </Grid>
        <Grid>
            <Image src= {PorofilePic}/>
        </Grid>
    </ContainerGrid>
    </Container> 
        );
  }

export default About 
    const Container = styled.div`
        margin-right: 10%;
        margin-left: 10%;
        margin-top: 0;
        `

    const ContainerGrid = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
        margin-top: 2rem;
        background-color: rgb(1, 20, 43);
        content: justified;
        width: 100%;
        
    `

    const Grid = styled.div`
        
        background-color: rgb(1, 20, 43);
        padding: 20px;
        text-align: center;
        color: #d7f7ed;
    
    `
    const Image = styled.img`
        height: 25rem; 
        border: #78ebbd solid 1px;
        padding: 10px;
        box-shadow: 5px 5px 8px 2px #44cfa5;
        background-color: rgb(1, 27, 59)
    `
    const AboutContent= styled.div`
        width: 30rem;
        margin-top: 16%;
        font-size: large;
    `
