import React, { Component } from 'react';
import styled from 'styled-components';


export default class Footer extends Component {

    render(){
        return(
            <FooterWrapper><div className="Footer">© 2019 Copyright: Szymon Wojaczek&nbsp;&nbsp;
            <a href="https://github.com/Vezil/" target="_blank">Github</a></div>
            </FooterWrapper>
        );
    }

}

const FooterWrapper = styled.nav`

background: black;
color:gray;
position:fixed;
bottom:0;
left:0;
right:0;
opacity:0.7;
text-align:center;
padding:1%;

a{
    color:green;
}

`;

