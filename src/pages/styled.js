import styled from 'styled-components'

export const StyledHomePage = styled.main`
  header {
    width: 100vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2dfd3;
    color: #ac6730;

    ul {
      display: flex;
      background-color: #f2dfd3;
      gap: 25px;

      @media (min-width: 768px) {
        gap: 50px;
      }
    }

    .link {
      text-decoration: none;
      background-color: #f2dfd3;
      color: #ac6730;
      @media (min-width: 768px) {
        
        border-radius: 4px;
        padding: 4px;
      }
    }
  }
`
