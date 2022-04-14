import React, { useEffect, useState } from 'react'
import { SafeAreaView, TextInput, View, Pressable, FlatList, RefreshControl, StyleSheet, StatusBar, ActivityIndicator, Text } from 'react-native';
import { ApiPostFisc } from '../../api/constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FeedPostContainer, FeedPostThumb, FeedPostTitle } from './styles';
 
export default function SearchFeed({navigation}) {

  const [posts, setPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchDataHeader();
  }, [setPosts]);

  const fetchDataHeader = () => {
    fetch(`${ApiPostFisc}/posts?_embed&per_page=80&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setPosts([]);
    fetchDataHeader();
  };

  function renderPostHeader(item) {
    return(
      <View style={{ marginHorizontal: 20}}>
         <Pressable
            onPress={() =>
            navigation.navigate('Screen2', {item: item})}
            style={{justifyContent: 'center',
            alignItems: 'center',
          }}>
         <View style={{alignItems: 'center', marginVertical: 10}}>
              {item._embedded['wp:featuredmedia'].filter(
                element => element.id == item.featured_media).map((subitem, index) => (
                 <FeedPostContainer style={{marginTop: 15}}>
                    <Ionicons name="newspaper-outline" size={32} color="black" />
                    <FeedPostTitle>{item.title.rendered.toString().replace("&#8212;", "'").replace("&#8213;", "'").replace("&#8214;", "'").replace("&#8215;", "'").replace("&#8216;", "'").replace("&#8217;", "'").replace("&#8218;", "'").replace("&#8219;", "'").replace("&#8220;", "'").replace("&#8221;", "'")}</FeedPostTitle>
                </FeedPostContainer>
                ))}
            </View>
            </Pressable>
      </View>
    )
  };

  function renderPost(item) {
    return(
      <View style={{ marginHorizontal: 10}}>
         <Pressable
            onPress={() =>
            navigation.navigate('Screen2', {item: item})}
            style={{justifyContent: 'center',
            alignItems: 'center',
          }}>
         <View style={{alignItems: 'center', marginVertical: 10}}>
              {item._embedded['wp:featuredmedia'].filter(
                element => element.id == item.featured_media).map((subitem, index) => (
                 <FeedPostContainer style={{marginTop: 15}}>
                    <Ionicons name="newspaper-outline" size={32} color="black" />
                    <FeedPostTitle>{item.title.rendered.toString().replace("&#8212;", "'").replace("&#8213;", "'").replace("&#8214;", "'").replace("&#8215;", "'").replace("&#8216;", "'").replace("&#8217;", "'").replace("&#8218;", "'").replace("&#8219;", "'").replace("&#8220;", "'").replace("&#8221;", "'")}</FeedPostTitle>
                </FeedPostContainer>
                ))}
            </View>
            </Pressable>
      </View>
    )
  };

  function renderPostFooter(item) {
    return(
      <View style={{ marginHorizontal: 10}}>
         <Pressable
            onPress={() =>
            navigation.navigate('Screen2', {item: item})}
            style={{justifyContent: 'center',
            alignItems: 'center',
          }}>
         <View style={{alignItems: 'center', marginVertical: 10}}>
              {item._embedded['wp:featuredmedia'].filter(
                element => element.id == item.featured_media).map((subitem, index) => (
                 <FeedPostContainer style={{marginTop: 15}}>
                    <Ionicons name="newspaper-outline" size={32} color="black" />
                    <FeedPostTitle>{item.title.rendered.toString().replace("&#8212;", "'").replace("&#8213;", "'").replace("&#8214;", "'").replace("&#8215;", "'").replace("&#8216;", "'").replace("&#8217;", "'").replace("&#8218;", "'").replace("&#8219;", "'").replace("&#8220;", "'").replace("&#8221;", "'")}</FeedPostTitle>
                </FeedPostContainer>
                ))}
            </View>
            </Pressable>
      </View>
    )
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setPosts(posts.filter((d) => d.title.rendered.includes(s)))
  };

  return (
    <SafeAreaView>
     <View style={{paddingTop: 20}} >
      <TextInput
       placeholder='Pesquisar no Fiscaliza'
      onChangeText={(s) => trackDown(s)}
      style={styles.textInputStyle}
      />
      {posts.length > 0 ? (
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => renderPostHeader(item)}
        style={{position:'relative', marginBottom: 20, marginHorizontal: 20}}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#fff"
              colors={["#087433"]}
            />
          }
      />
       ) : (
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center', position: 'relative', top: RFPercentage(38.5)}}/>    
      )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: RFValue(35),
    width: RFPercentage(45),
    alignSelf: 'center',
    borderWidth: 0.4,
    paddingLeft: RFValue(10),
    margin: RFValue(3),
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  },
});
