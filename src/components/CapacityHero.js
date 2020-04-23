import styled from "styled-components";

const HoverText = styled.div`
    opacity: ${props => (!props.grey ? 0.2 : 1)};
    -webkit-filter: ${props => (!props.grey ? "grayscale(100%)" : "")};
    filter: ${props => (!props.grey ? "grayscale(100%)" : "")};
    -webkit-transition: ${props =>
        !props.grey ? "all 0.15s ease-in-out" : ""};
    transition: ${props => (!props.grey ? "all 0.15s ease-in-out" : "")};
    :hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }
`;

export default HoverText;
