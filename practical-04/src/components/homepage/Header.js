import styled from 'styled-components';

const StyledDateHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 3em;

.date{
    display: flex;
    gap: 0.2em;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1rem;
}

.year{
    font-size: 0.8rem;
}
`;

const Header = () => {
    return (
        <StyledDateHeader>
            <div className="date">
                <div>
                    12
                </div>
                <div className='year'>
                    <b>JAN</b><br />
                    2016
                </div>
            </div>
            <div>TUESDAY</div>
        </StyledDateHeader>
    )
}

export default Header