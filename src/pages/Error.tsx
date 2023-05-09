import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

const Error = () => {

  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }

  return (
    <ErrorContainer>
      <h1>404 Page Not Found</h1>
      <p>Unfortunately, this page is unavailable</p>

      <ReturnHome onClick={handleReturn}>Return to Home</ReturnHome>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: default;
`

const ReturnHome = styled.button`
  margin: 2rem 1rem;
  padding: 1rem 2rem;
  color: var(--text-primary);
  font-size: 1.6rem;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid var(--text-secondary);
  border-radius: 0.6rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: var(--bg-secondary) 0px 8px 24px;
  }
`

export default Error
