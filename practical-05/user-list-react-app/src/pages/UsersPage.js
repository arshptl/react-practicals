import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/users/Header';
import HoverCard from '../components/users/HoverCard';
import UserList from '../components/users/UserList';
import { userData } from '../static/utils/userData';

const StyledDiv = styled.div`
width: 100%;
margin: 0 auto;
background-color: #FFFFFF;
padding: 2em;
min-width: 24em;
max-width: 60em;

.styledError{
padding: 0.7em;
margin-top: 0.5em;
color: red;
background-color: #ffe6e6;
}

.styledEmptyList{
    padding: 0.7em;
    margin-top: 0.5em;
    text-align: center;
    background-color: #e9fbf3;
    color: #24c27b;
}

@media(min-width: 37.5em) {
    width: 100%;
    padding: 2em;
}

@media(min-width: 62.5em) {
    width: 100%;
    padding: 3.25em;
}
`;

const UsersPage = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState();

    const closePopup = () => {
        console.log("LEAVEEE!!");
        setShowPopup(false);
    };
    const showPopupHandler = (item) => {
        setShowPopup(true);
        setSelectedUser(item);
        console.log('item obj', selectedUser);
    };

    return (
        <StyledDiv>
            <Header />
            {userData.map((obj) => {
                return <UserList userData={obj} showPopupHandler={showPopupHandler}
                    closePopup={closePopup} key={obj.userId} />;
            })}
            {showPopup && <HoverCard selectedUser={selectedUser} />}
        </StyledDiv>
    )
}

export default UsersPage