import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, FlatList, RefreshControl, ImageBackground, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';
import { ApiPostFisc } from '../../api/constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FeedPostContainer, FeedPostThumb, FeedPostTitle } from './styles';

const image = { uri: "https://fiscalizanews.com.br/wp-content/uploads/2021/04/bg.png" };

export default function NewsFeed({navigation}) {

  const [allPosts, setAllPosts] = useState([]);
  const [postsBrazil, setPostsBrazil] = useState([]);
  const [postsWorld, setPostsWorld] = useState([]);
  const [postsSports, setPostsSports] = useState([]);
  const [postsCulture, setPostsCulture] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchAll();
    fetchBrazil();
    fetchWorld();
    fetchSports();
    fetchCulture();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&per_page=80`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchBrazil = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=13&per_page=80`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPostsBrazil(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchWorld = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=17&per_page=80`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPostsWorld(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchSports = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=53&per_page=80`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPostsSports(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCulture = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=5194&per_page=80`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPostsCulture(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    setPostsBrazil([]);
    setPostsWorld([]);
    setPostsSports([]);
    setPostsCulture([]);
    fetchAll();
    fetchBrazil();
    fetchWorld();
    fetchSports();
    fetchCulture();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(35.5),
            top: 50,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 30}} key={item.id}>
          {item._embedded['wp:featuredmedia'].filter(
            element => element.id == item.featured_media).map((subitem, index) => (
              <FeedPostContainer>
                
              <FeedPostThumb source={{uri: subitem.media_details.sizes.full.source_url}} key={item.id}/>
             <FeedPostTitle style={{fontSize: RFValue(11), color: 'black', alignSelf: 'center', textAlign: 'left'}}>
                { item.title.rendered.toString().replace("&#8212;", "'").replace("&#8213;", "'").replace("&#8214;", "'").replace("&#8215;", "'").replace("&#8216;", "'").replace("&#8217;", "'").replace("&#8218;", "'").replace("&#8219;", "'").replace("&#8220;", "'").replace("&#8221;", "'")}
                </FeedPostTitle>
               
           </FeedPostContainer>
            ))}
        </View>
           </TouchableOpacity>
           </ImageBackground>
      </View>
    );
  };

    return (
      <>
       <StatusBar barStyle='light-content' backgroundColor={'#087433'}/>
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableTabBar
            style={styles.scrollStyle}
            tabStyle={styles.tabStyle}
          />
        )}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarInactiveTextColor={'#121212'}
        tabBarActiveTextColor={'#087433'}
        tabBarUnderlineStyle={styles.underlineStyle}
        
      >
        <View  key={'1'} tabLabel={'Geral'} style={{flex:1}}>
      <></>
      {allPosts.length > 0 ? (
      <FlatList
        data={allPosts}
        renderItem={ItemView}
        style={styles.listcontainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}/>    
      )}
        </View>
        <View  key={'2'} tabLabel={'Mundo'} style={{flex:1}}>
      <></>
      {postsWorld.length > 0 ? (
      <FlatList
        data={postsWorld}
        renderItem={ItemView}
        style={styles.listcontainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}/>    
      )}
        </View>
        <View  key={'3'} tabLabel={'Brasil'} style={{flex:1}}>
      <></>
      {allPosts.length > 0 ? (
      <FlatList
        data={postsBrazil}
        renderItem={ItemView}
        style={styles.listcontainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        
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
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}/>    
      )}
        </View>
        
        <View  key={'4'} tabLabel={'Esportes'} style={{flex:1}}>
      <></>
      {postsSports.length > 0 ? (
      <FlatList
        data={postsSports}
        renderItem={ItemView}
        style={styles.listcontainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}/>    
      )}
        </View>
        <View  key={'5'} tabLabel={'Entretenimento'} style={{flex:1}}>
      <></>
      {postsCulture.length > 0 ? (
      <FlatList
        data={postsCulture}
        renderItem={ItemView}
        style={styles.listcontainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
        <ActivityIndicator size={'small'} color={'#087433'} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}/>    
      )}
        </View>
      </ScrollableTabView>
      </>
    );
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: '#087433',
    borderRadius: 3,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});