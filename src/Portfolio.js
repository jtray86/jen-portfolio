import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";

function Portfolio() {

    
    return (
        <>
        <CardContainer>
            <Card>
                <Video>
                    <YoutubeEmbed embedId="p8tAIzhoQkw" />
                    <Discription>
                        <h3 style={{display: "inline"}}>MyFI</h3>
                        <Language>React.js</Language>
                        <Language>Rails API</Language>
                        <p>A financial app to help people in debt plan to get out of debt and become financially independent.</p>
                        <RepoLink href= 'https://github.com/jtray86/personal-fi-frontend' target="_blank">Frontend Repo</RepoLink>|
                        <RepoLink href= 'https://github.com/jtray86/personal-fi-backend' target="_blank">Backend Repo</RepoLink>
                    </Discription>
                </Video>
            </Card>
            <Card>
                <Video>
                    <YoutubeEmbed embedId="vaaAz0gT8Ek" />
                    <Discription>
                        <h3 style={{display: "inline"}}>The Pass</h3>
                        <Language>React.js</Language>
                        <Language>Rails API</Language>
                        <p>A travel-social app for gay or male presenting queer people and straight/queer women to meet and plan travel togther.</p>
                        <RepoLink href='https://github.com/jtray86/The-Pass-Frontend' target="_blank">Frontend Repo</RepoLink>|
                        <RepoLink href='https://github.com/jtray86/the-pass-backend' target="_blank">Backend Repo</RepoLink>
                    </Discription>
                </Video>
            </Card>
        </CardContainer>
        <SkillsContanier>
                <h2 style={{textDecoration: "underline"}}>Skills</h2>
                <Skills>JavaScript</Skills> 
                <Skills>React  </Skills> 
                <Skills>Ruby </Skills> 
                <Skills>Rails </Skills> 
                <Skills> Html </Skills> 
                <Skills> CSS </Skills> 
                <Skills> PostgreSQL</Skills>
        </SkillsContanier>
        <PortfolioCode>
            <p style ={{paddingTop: '3rem'}}>Built with React and custom Styled Components</p>
            <RepoLink href= 'https://github.com/jtray86/jen-portfolio' target="_blank">Source Code</RepoLink>
        </PortfolioCode>
        </>
    );
  }

export default Portfolio 

const CardContainer = styled.div`
    margin: 5% ; 
    display: flex;
    flex-wrap: wrap;
    `

const Card = styled.div`
    
    width: 40%;
    
    border: #78ebbd solid 1px;
    padding: 10px;
    box-shadow: 5px 5px 20px 2px #44cfa5;
    margin: 3%;
    background-color: rgb(1, 27, 59);
    `
const Video = styled.div`
    width: 100%
    `
const SkillsContanier= styled.div`
    margin-left: auto;
    margin-right: auto;
    color: #78ebbd;
    text-align: center
`
const Skills = styled.span`
  padding: 1.5%;
`
const Discription= styled.div`
  padding: 2%;
  color: #d7f7ed;
`

const Language = styled.span`
float: right;
margin: 1.5%;
font-size: x-small;
border: solid .5px #78ebbd;
border-radius: 3px;
padding: 2px;
`

const RepoLink= styled.a`
    color: #78ebbd;
    text-decoration: none;
    padding: 2%;
    
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
const PortfolioCode= styled.div`
    height: 10rem;
    width: 100%;
    color: #d7f7ed;
    text-align: center
`