import React from 'react';
import { View, Text, useWindowDimensions, Image, StatusBar } from 'react-native';
import HTML from 'react-native-render-html';
import { RFValue } from 'react-native-responsive-fontsize';
import { FeedPostContainer, FeedPostExcerpt, FeedPostTitle, FeedScroll } from './styles';


export default function Screen2({ route }) {
  const { item } = route.params;

  const {width} = useWindowDimensions();

  return (
    <FeedPostContainer>
      <StatusBar barStyle='light-content' backgroundColor={'#087433'}/>
      <FeedScroll
      showsVerticalScrollIndicator={false}>
        <FeedPostTitle style={{fontSize: RFValue(19), color: 'black', marginVertical: 10}}>
        {item.title.rendered.toString().replace("&#8212;", "'").replace("&#8213;", "'").replace("&#8214;", "'").replace("&#8215;", "'").replace("&#8216;", "'").replace("&#8217;", "'").replace("&#8218;", "'").replace("&#8219;", "'").replace("&#8220;", "'").replace("&#8221;", "'")}
        </FeedPostTitle>
         <View>
              {item._embedded['wp:featuredmedia'].filter(
                element => element.id == item.featured_media).map((subitem, index) => (
                  <Image source={{uri: subitem.media_details.sizes.full.source_url}} style={{width: RFValue(360),
                  height: RFValue(205), alignSelf: 'center'}} key={item.id}/>
                ))}
        </View>
        <FeedPostExcerpt>
        <Text style={{fontStyle: 'italic', fontSize: RFValue(10)}}>{item.yoast_head_json.description}</Text>
        <HTML source={{html: item.content.rendered}} contentWidth={width}/>
       </FeedPostExcerpt>
       </FeedScroll>
    </FeedPostContainer>
  );
}
