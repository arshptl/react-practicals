import React from 'react'
import styled from "styled-components";
import AddButton from '../components/homepage/AddButton';
import Header from '../components/homepage/Header';
import ListComp from '../components/homepage/ListComp';

const StyledDiv = styled.div`
width: 100%;
margin: 0 auto;
background-color: #FFFFFF;
padding: 3.25em;

@media(min-width: 37.5em) {
    max-width: 31.25em;
}
`;

const TodoHome = () => {

    const todoList = ["Buy new sweatshirt", "Begin promotional phase", "Read an article", "Try not to fall asleep", "watch Sherlock", "Begin QA for the Project", "Go for a walt"];
    return (
        <StyledDiv>
            <Header />
            {todoList.map((obj) => {
                return <ListComp title={obj}/> 
            })}
            <AddButton/>
        </StyledDiv>
    )
}

export default TodoHome