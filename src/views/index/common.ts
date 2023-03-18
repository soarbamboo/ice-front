import styled from 'styled-components'


export const Main = styled.div`
    margin-top: -64px;
    background-color: #eaeaea;
    position:relative ;
`
export const IndexCard = styled.div`
    width:100% ;
    padding-bottom: 20px ;
`
export const CardContent = styled.div`
    width:90% ;
    margin: 0 auto ;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important;
    background-color: #fff ;
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 20px 40px ;
    box-sizing:border-box ;
`
export const CardContentTitle = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.8rem;
`

export const Footer = styled.footer`
    width: 100% ;
    padding: 20px 30px;
    margin-top: 0px;
    text-align: center;
    font-size: .75rem !important;
`
export const FooterIcp = styled.a`
    color: #007bff;

    &:hover{
        cursor:pointer ;
    }
`    