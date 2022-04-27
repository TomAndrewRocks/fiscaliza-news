import React from 'react'
import { ButtonText, ClickButton, Container, Icon, InfoContainer, InfoText, PageTitleOne, PageTitle, Wrapper, AtentionTitle, PressableLink } from './styles';
import { Linking, Pressable, Text } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Ionicons from '@expo/vector-icons/Ionicons';


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
            style={{display: 'flex', flexDirection: 'row', maxWidth: RFPercentage(49.3)}}
            ><PressableLink>(92) 98435-7108 <Ionicons name="logo-whatsapp" size={RFValue(12)} color="white"/></PressableLink></Pressable>
            <PageTitle
       >Fale conosco através do email:</PageTitle>
       <Pressable
            onPress={() => Linking.openURL('mailto:jornalismofiscalizaamazonas@gmail.com')}
            style={{display: 'flex', flexDirection: 'row', maxWidth: RFPercentage(49.3)}}
            ><PressableLink >jornalismo@fiscalizanews.com.br <Ionicons name="mail-outline" size={RFValue(12)} color="white"/></PressableLink></Pressable>
             <PageTitle
       >Acesse nossas políticas de privacidade logo abaixo:</PageTitle>
       <Pressable
            onPress={() => Linking.openURL('https://fiscalizanews.com.br/politica-de-privacidade/')}
            style={{display: 'flex', flexDirection: 'row', maxWidth: RFPercentage(49.3)}}
            ><PressableLink>Políticas de Privacidade <Ionicons name="globe-outline" size={RFValue(12)} color="white"/></PressableLink></Pressable>
            </Wrapper>
        </Container>
    )
}
