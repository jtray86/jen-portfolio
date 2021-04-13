import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



function Contact() {
    return( 
    <Container>
        <h2>Get In Touch</h2>
        <DiscriptionP>My Inbox is always open.</DiscriptionP>
        <DiscriptionP>Currently looking for new opportunities. Whether you have a question or just want to say hi. Feel free to send me an email or connect on Linkedin</DiscriptionP>
        <EmailLink href="mailto: jenniferetracy@gmail.com">JenniferETracy@gmail.com</EmailLink>
        <SocialContainer>
            <SocialLink href="https://www.linkedin.com/in/jen-tracy-a874273a/" target="_blank"> <span>Linkedin</span>
                <LinkedInIcon style={{ fontSize: 40 }} />
            </SocialLink>
            <SocialLink href="https://github.com/jtray86" target="_blank">     <span>Github</span>
                <GitHubIcon fontSize="large"/>
            </SocialLink>
        </SocialContainer>
    </Container>
    );
  }

export default Contact  

const Container = styled.div`
    margin: auto;
    margin-top: 10%;
    width: 50%;
    border: 1px solid #78ebbd;
    padding: 10px;
    box-shadow: 5px 5px 8px 2px #44cfa5;
    background-color: rgb(1, 27, 59);
    text-align: center;
    color: #78ebbd;
    `

const EmailLink= styled.a`
    font-size: large;
    text-decoration: none;
    color: #78ebbd;
    position: relative;
    z-index: 1;
    
    
    :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(0);
        transform-origin: bottom center;
        background-color: #78ebbd;
        
        z-index: -1;
        transition: transform 0.3s;
    }

    :hover::after {
        transform: scaleY(1);
    }
    
    :hover{
        color: rgb(1, 27, 59)
    }

`
const DiscriptionP = styled.p`
    color: #d7f7ed;
    
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