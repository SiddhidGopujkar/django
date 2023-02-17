import React from 'react'
import styled from "styled-components/macro";

const PageHeader = ({ title }) => {
  return (
    <div className='w-100'>
        <div className='page-header-left-border' style={{ height: '50px' }} />
        <div className='d-flex align-items-center' style={{ height: '70px', borderTop: '1px solid #A9A9A9',borderBottom: '1px solid #A9A9A9',}}>
            <BackArrowContainer className='d-flex align-items-center justify-content-center'>
                <BackArrowIcon src="svgs/back-icon.svg" className='' alt="back" />
            </BackArrowContainer>
            <div>
                <Title>{title}</Title>
            </div>
        </div>
            
    </div>
  )
}

export default PageHeader

const BackArrowContainer = styled.div`
    width: 71px;
    height: 100%;
    border-right: 1px solid #A9A9A9;
`;
const BackArrowIcon = styled.img`
    border: 1px solid #000000;
    border-radius: 50%;
    padding: 15px;
`;
    
    const Title = styled.p`
    height: 100%;
    color: #111111;
    padding-left: 40px;
    font-size: 32px;
    font-weight: 700;
    font-family: Poppins Bold;
    z-index: 1;
    margin-bottom: 0;
`;