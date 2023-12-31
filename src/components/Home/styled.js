import styled from 'styled-components'

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 50px;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }

  img {
    width: 290px;
    height: auto;
    margin-top: 10px;
    border-radius: 50%;
  }

  .description {
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 22px;
    }

    .nome {
      color: #ac6730;
      font-size: 22px;
      font-weight: 600;
      margin-top: 10px;
      @media (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 20px;
      }
    }

    .cargo {
      margin-bottom: 10px;
      margin-top: 10px;
      font-weight: 500;

      @media (min-width: 768px) {
        margin-bottom: 20px;
      }
    }

    .instagram {
      width: 120px;
      border-radius: 4px;
      border: solid 1px #ac6730;
      color: #ac6730;
      padding: 5px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      @media (min-width: 768px) {
        width: 150px;
      }
    }
  }
`
