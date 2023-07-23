import styled from 'styled-components'

export const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 80px;
    margin-top: 50px;
  }

  .informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    gap: 10px;
  
    .about{
      font-size: 22px;
      font-weight: 600;
    }

    .city{
      font-size: 18px;
    }

  .personal_description {
    text-align: justify;
    @media (min-width: 768px) {
      width: 500px;
    }
  }
  }
  img {
    width: 290px;
    
    height: auto;
    margin-top: 10px;
    border-radius: 50%;
  }
`
