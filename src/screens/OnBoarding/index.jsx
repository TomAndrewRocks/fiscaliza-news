import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#fefefe'};

const slides = [
  {
    id: '1',
    image: require('../../../assets/Frame.png'),
    title: 'Informação com Credibilidade',
    subtitle: 'O seu canal cotidiano de informação está ainda melhor. Mais abrangente, ampla cobertura, e o mesmo compromisso de sempre.',
  },
  {
    id: '2',
    image: require('../../../assets/Frame2.png'),
    title: 'Navegue pelas categorias',
    subtitle: 'Acesse o melhor conteúdo jornalístico, acessando as editorias desejadas.',
  },
  {
    id: '3',
    image: require('../../../assets/Frame3.png'),
    title: 'Disque Denúncia',
    subtitle: 'Temos um espaço para você indicar problemas.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center', top: RFValue(60)}}>
      <Image
        source={item.image}
        style={{height: '58%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

export default function OnBoarding({navigation}) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#FBC600',
                  width: RFValue(14),
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('TabRoutes')}>
                <Text style={{fontWeight: 'bold', fontSize: RFValue(15), color: 'white'}}>
                  VAMOS LÁ!
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: RFValue(15),
                    color: '#087433',
                  }}>
                  Pular
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: RFValue(15),
                    color: 'white',
                  }}>
                  Próximo
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar
        backgroundColor="#087433"
        />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: RFValue(13),
    marginTop: RFValue(10),
    maxWidth:  RFValue(300),
    textAlign: 'center',
    lineHeight: RFValue(23),
  },
  title: {
    color: COLORS.white,
    fontSize: RFValue(22),
    fontWeight: 'bold',
    marginTop: RFValue(20),
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: RFValue(7),
    width: RFValue(30),
    backgroundColor: '#087433',
    marginHorizontal: RFValue(5),
    borderRadius: RFValue(50),
  },
  btn: {
    flex: 1,
    height: RFValue(50),
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#087433',
    justifyContent: 'center',
    alignItems: 'center',
  },
});