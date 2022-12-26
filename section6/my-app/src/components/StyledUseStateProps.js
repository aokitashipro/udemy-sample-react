import React, { useState } from 'react'
import styled from 'styled-components'

const StyledComponent = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${(props) => (props.isRed ? "red" : "green" )};
`

const StyledUseStateProps = () => {
  const [isRed, setIsRed] = useState(false)
  return (<>
  <StyledComponent isRed={isRed}>
    <p>props + useStateのテスト</p>
    <button onClick={()=> setIsRed(!isRed)}>色を変える</button>
  </StyledComponent>
  </>)
}

export default StyledUseStateProps