import styled from 'styled-components'


export const Button = styled.button`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase; 
    color: #10B982;
    font-weight: 900;
    background-color: #fff;
    padding: .75em 2em;
    border-radius: 100px;
    &:hover {
        opacity: .75;
    }
`;

export default Button