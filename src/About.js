import styled from "styled-components";
import PorofilePic from "./jen.JPG"

function About() {

    const Container = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
        margin-top: 4rem;
        background-color: rgb(1, 20, 43);
        content: justified;
        width: 100%;
        
    `

    const Grid = styled.div`
        
        background-color: rgb(1, 20, 43);
        padding: 20px;
        font-size: 30px;
        text-align: center;
        color: #78ebbd;
    
    `
    const Image = styled.img`
        height: 20rem;
        border: #78ebbd solid 1px;
        padding: 10px;
        box-shadow: 5px 5px 8px 2px #44cfa5;
        background-color: rgb(1, 27, 59)
    `
    return( 
    <Container>
        <Grid>
            <h4>Software Engineer</h4>
            <p></p>
        </Grid>
        <Grid>
            <Image src= {PorofilePic}/>
        </Grid>
    </Container>
        
        );
  }

export default About 