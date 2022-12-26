import styled from 'styled-components'

const StyledComponent = () => {

  return (<>
    <Wrapper>
      <Title>
        styledComponentのテストです。
      </Title>
    </Wrapper>
  </>)
}

const Wrapper = styled.div`
  border: 1px solid red;
`

const BaseTitle = styled.h1`
  color: blue;
`

const Title = styled(BaseTitle)`
  background-color: lightgray;
`

export default StyledComponent