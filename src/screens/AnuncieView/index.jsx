import React from 'react'
import { ButtonText, ClickButton, Container, Icon, InfoContainer, InfoText, PageTitleOne, PageTitleTwo, Wrapper } from './styles';
import { Linking } from 'react-native'


export function Anuncie() {
    
    return (
        <Container>
        <Wrapper>
        <PageTitleOne
       >Anuncie no Fiscaliza Amazonas - O portal de notícias que mais cresce na região Norte</PageTitleOne>
        <InfoContainer>
        <Icon name="magnet-outline" />
        <InfoText>Divulgando aqui, a sua empresa ganha visibilidade e pode atrair mais clientes.</InfoText>
        </InfoContainer>
        <InfoContainer>
        <Icon name="trending-up-outline" />
        <InfoText>Possuímos mais de 170 mil acessos na média total, e esse número cresce a cada dia.</InfoText>
        </InfoContainer>
        <InfoContainer>
        <Icon name="cellular-outline" />
        <InfoText>Temos um alcance de 7 milhões em todas as nossas plataformas.</InfoText>
        </InfoContainer>
        <InfoContainer>
        <Icon name="alarm-outline" />
        <InfoText>Média total de 2 minutos em cada acesso no nosso portal.</InfoText>
        </InfoContainer>
        <PageTitleTwo>Entre em contato com a nossa equipe comercial!</PageTitleTwo>
        <ClickButton>
            <ButtonText
            onPress={() => Linking.openURL('mailto:jornalismofiscalizaamazonas@gmail.com')}
            >CLIQUE AQUI</ButtonText>
            </ClickButton>
            </Wrapper>
        </Container>
    )
}

 
