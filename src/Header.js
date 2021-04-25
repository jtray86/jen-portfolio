import { useHistory } from "react-router-dom";
import styled from "styled-components";


function Header() {
    const history = useHistory()



    return (
        <Siteheader> 
            <H1>Jen Tracy</H1>
           
                <Ulnav>
                    <Linav>
                        <Link onClick={() =>history.push("/about")}>About</Link>
                    </Linav>
                    <Linav>
                        <Link onClick={() =>history.push("/portfolio")}>Portfolio</Link>
                    </Linav>
                    <Linav>
                        <Link onClick={() =>history.push("/contact")}>Contact</Link>
                    </Linav>
                </Ulnav>
           
        </Siteheader> 
    )
  }

export default Header 

const Siteheader =styled.header`
    overflow: hidden;
    background-color: rgb(1, 20, 43);
    padding: 10px 10px;
    color: #78ebbd
    `

    const Ulnav = styled.ul`
    list-style-type: none;
    float: right;
    margin-right: 10%
    `;

    const Linav = styled.li`
    display: inline;
    padding: 1rem;
    font-size: large;

    `;
    const H1 = styled.h1`
    display: inline;
    padding-left: 10%;
    font-size: 50px;
    

    `
    const Link = styled.a`
    color: #78ebbd;
    text-decoration: none;
    padding-top: .5rem;
    
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