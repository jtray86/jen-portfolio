import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";

function Portfolio() {

    const CardContainer = styled.div`
    margin: 5% ; 
    display: flex;
    
    `

    const Card = styled.div`
        width: 40%;
        height: 18rem;
        border: #78ebbd solid 1px;
        padding: 10px;
        box-shadow: 5px 5px 20px 2px #44cfa5;
        margin: 3rem;
        background-color: rgb(1, 27, 59);
    `
    const Video = styled.div`
    width: 100%
    `
    return (
        <CardContainer>
            <Card>
                <Video>
                    <YoutubeEmbed embedId="p8tAIzhoQkw" />
                </Video>
            </Card>
            <Card>
                <Video>
                    <YoutubeEmbed embedId="p8tAIzhoQkw" />
                </Video>
            </Card>
        </CardContainer>
    );
  }

export default Portfolio 