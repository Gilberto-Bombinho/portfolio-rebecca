import styled from 'styled-components'

export const StyledProjects = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 1000px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    @media(min-width: 768px){
      gap: 100px;
    }


    li {
      width: 300px;
      
      margin-top: 20px;
      margin-bottom: 40px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media(min-width: 768px){
      width: 400px;
      height: 400px;
      margin-bottom: 20px;
    }

      img {
        width: 300px;
        height: 200px;
        border-radius: 4px 4px 0 0;

        @media(min-width: 768px){
      width: 400px;
      height: 200px;
    }
      }

      p {
        margin-left: 5px;
      }

      .title {
        color: #ffffff;
        font-weight: 600;
        font-size: 20px;
      }

      .tecnology{
        color: #23ABB3;
        font-weight: 500;
      }


      .links {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        margin-bottom: 5px;
        gap: 5px;

        .video {
          width: 200px;
          text-decoration: none;
          border-radius: 4px;
          border: solid 1px #23ABB3;
          color: #ffffff;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vercel {
          width: 100px;
          text-decoration: none;
          border-radius: 4px;
          border: solid 1px #23ABB3;
          color: #ffffff;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`
