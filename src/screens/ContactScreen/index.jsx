import React from 'react'
import { ButtonText, ClickButton, Container, Icon, InfoContainer, InfoText, PageTitleOne, PageTitle, Wrapper, AtentionTitle, PressableLink } from './styles';
import { Linking, Pressable, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';


export default function Contact() {
    
    return (
        <Container>
        <Wrapper>
        <PageTitle
       >Aqui você tem os dados pra sugerir pautas, criticar matérias e ajudar a equipe do Fiscaliza News a fazer um trabalho cada vez melhor.</PageTitle>
       <PageTitle
       >É só mandar sua mensagem em alguma das opções abaixo, especificando o assunto e com qual setor você deseja se comunicar.</PageTitle>
       <AtentionTitle
       >Atenção:</AtentionTitle>
        <InfoContainer>
        <Text>•</Text>
        <InfoText>Nenhuma mensagem aqui enviada será publicada.</InfoText>
        </InfoContainer>
        <InfoContainer>
        <Text>•</Text>
        <InfoText>Se você deseja anunciar no nosso portal, acesse a aba <Text style={{fontWeight: 'bold'}}>Anuncie</Text>, no menu abaixo.</InfoText>
        </InfoContainer>
        <InfoContainer>
        <Text>•</Text>
        <InfoText>Pode entrar em contato a qualquer momento com nossa equipe editorial pelos canais de atendimento descritos a seguir.</InfoText>
        </InfoContainer>
        <PageTitle
       >Fale conosco através do nosso telefone:</PageTitle>
            <Pressable
            onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=5592984357108')}
            ><PressableLink style={{maxWidth: RFPercentage(17.3), padding: RFPercentage(1)}}>(92) 98435-7108</PressableLink></Pressable>
            <PageTitle
       >Fale conosco através do email:</PageTitle>
       <Pressable
            onPress={() => Linking.openURL('mailto:jornalismofiscalizaamazonas@gmail.com')}
            ><PressableLink  style={{maxWidth: RFPercentage(32.3), padding: RFPercentage(1)}}>jornalismo@fiscalizanews.com.br</PressableLink></Pressable>
             <PageTitle
       >Acesse nossas políticas de privacidade logo abaixo:</PageTitle>
       <Pressable
            onPress={() => Linking.openURL('https://fiscalizanews.com.br/politica-de-privacidade/')}
            ><PressableLink style={{maxWidth: RFPercentage(23.7), padding: RFPercentage(1)}}>Políticas de Privacidade</PressableLink></Pressable>
            </Wrapper>
        </Container>
    )
}
