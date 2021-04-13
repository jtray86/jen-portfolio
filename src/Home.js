import styled from "styled-components";
import ProfilePic from "./jen.JPG";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    return (
      <Container>
        <Intro>
          <h2 style={{textDecoration: "underline", fontSize: '30px'}}>Jen Tracy</h2>
          <h4>FULL STACK SOFTWARE ENGINEER</h4>
          <SocialContainer>
            <SocialLink href="https://www.linkedin.com/in/jen-tracy-a874273a/" target="_blank"> 
                <span>Linkedin</span>
                <LinkedInIcon style={{ fontSize: 40 }} />
            </SocialLink>
            <SocialLink href="https://github.com/jtray86" target="_blank"> 
                <span>Github</span>
                <GitHubIcon fontSize="large"/>
            </SocialLink>
        </SocialContainer>
        </Intro>
        <ImageContaner>
          <ImageHome src={ProfilePic}/>
        </ImageContaner>
        
      </Container>
    );
  }

export default Home  

const ImageHome = styled.img`
  opacity: 0.3;
  width: 100%
  `

  const ImageContaner= styled.div`
    position:relative;
    float: right;
    height: 100%;
    width: 45%;

  :after {
    width:45%;
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    background: linear-gradient(to right, rgba(1, 20, 43,1) 0%,rgba(1, 20, 43,0) 100%);
    height:100%;
  
  `
  const Container = styled.div`
    margin: 5%;
    display: flex;
  `

  const Intro= styled.div`
    margin-top: 18%;
    margin-left: auto;
    margin-right: auto;
    color: #78ebbd;
    text-align: center
  `

  const SocialLink = styled.a `
    margin: .5rem;
    color: #d7f7ed;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 35px;
    height: 35px;
    
    span{
      display: none
  }
   

`
const SocialContainer = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`