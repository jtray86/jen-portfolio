import { useHistory } from "react-router-dom";
import styled from "styled-components";


function Header() {
    const history = useHistory()

    const Siteheader =styled.header`
    overflow: hidden;
    background-color: rgb(1, 20, 43);
    padding: 10px 10px;
    color: #78ebbd
    `

    const Ulnav = styled.ul`
    list-style-type: none;
    float: right
    `;

    const Linav = styled.li`
    display: inline;
    padding: 1rem;
    

    `;
    const H1 = styled.h1`
    display: inline;
    padding-left: 4rem
    

    `
    const Link = styled.a`
    color: #78ebbd;
    text-decoration: none;
    padding-top: .5rem;
    

    :hover {
        background-color: #78ebbd;
        color: black;
       
      }
    `

    return (
        <Siteheader> 
            <H1>Jen Tracy</H1>
           
                <Ulnav>
                <Linav>
                    <Link onClick={() =>history.push("/")}> Home </Link>
                </Linav>
                <Linav>
                    <Link onClick={() =>history.push("/about")}>About</Link>
                </Linav>
                <Linav>
                    <Link onClick={() =>history.push("/portfolio")}>Portfolio</Link>
                </Linav>
                </Ulnav>
           
        </Siteheader> 
    )
  }

export default Header 