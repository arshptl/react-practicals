import React from 'react'
import styled from 'styled-components';
import SelectComp from './SelectComp';
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiLock2Line } from "react-icons/ri";



const StyledOuterDiv = styled.div`
cursor: pointer;    
display: flex;
flex-direction: column;
width: 100%;
display: flex;
align-items: flex-start;
margin-bottom: 3em;
/* background-color: lightpink; */

@media(min-width: 37.5em) {
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
}

@media (min-width: 62.5em) {
    flex-direction: row;
}

`;

const StyledUserProfile = styled.div`
display: flex;
gap: 1em;
width: 100%;

.styledImage{
    img{
        width: 3em;
        height: 3em;
        border-radius: 50%;
    }
    
    /* background-color: red; */
}

.styledEmail{
    color: gray;
    line-height: 1em ;
}

@media(min-width: 37.5em) {
    width: 45%;
    flex-direction: row;
    font-size: 0.9em;
    .styledEmail{
        font-size: 0.9em;
    }
}

@media (min-width: 62.5em) {
    width: 35%;
}
`;

const StyledSelectDiv = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
gap: 8%;
align-items: center;
margin: 1em 0;

.styledActive{
    color: #00c91e;
}


@media(min-width: 37.5em) {
    gap: 5%;
    margin: 0em;
    justify-content: flex-start;
    width: 55%;
    *{
        flex-grow: 1;
        flex-basis: 0;
    }
}

@media (min-width: 62.5em) {
    width: 50%;
    *{
        flex-grow: 1;
        flex-basis: 0;
    }
    
}

`;

const roles = [
    {
        id: '1',
        role: 'Read'
    },
    {
        id: '2',
        role: 'Manager'
    },
];

const status = [
    {
        id: '1',
        role: 'Active'
    },
    {
        id: '2',
        role: 'Inactive'
    },
];

const UserList = ({ userData, showPopupHandler, closePopup }) => {
    return (
        <StyledOuterDiv onMouseEnter={() => {
            showPopupHandler(userData)
        }}
            onMouseLeave={() => {
                closePopup()
            }

            }>
            <StyledUserProfile>
                <div className='styledImage'>
                    <img
                        src={userData.image}
                        alt={userData.username} />
                </div>
                <div>
                    <div>{userData.username}</div>
                    <div className='styledEmail'>{userData.email}</div>
                </div>
            </StyledUserProfile>
            <StyledSelectDiv>
                {userData.status === "Active" ? <div className="styledActive">Active</div> : <SelectComp title={userData.status} role={status} />}
                {userData.access === "Owner" ? <div>Owner</div> : <SelectComp title={userData.access} role={roles} />}
                {userData.access === 'Owner' ? <RiLock2Line style={{ color: 'gray', fontSize: '25px' }} /> : <RiDeleteBin6Line style={{ color: 'gray', fontSize: '25px' }} />}
            </StyledSelectDiv>
        </StyledOuterDiv>
    )
}

export default UserList