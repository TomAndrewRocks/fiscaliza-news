import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from '../../components/FeedInfo';
import { ActivityIndicator, FlatList, Image, Platform, Pressable, RefreshControl, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import SearchCategory from '../../components/SearchCategory';
import SearchFeed from '../../components/SearchFeed';
import { ApiPostFisc } from '../../api/constants';
import { FeedPostContainer, FeedPostThumb, FeedPostTitle } from './styles';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerTintColor: "white",
  headerBackTitle: "Back",
};

function BrasilFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=13&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
};

function PolitcsFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=11&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}

function PoliciaFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=22&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}

function EntretenimentoFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=5194&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}

function AMFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=22&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}

function MundoFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=17&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}

function EsportesFeed({navigation}) {
  const [allPosts, setAllPosts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [originalInfo, setOriginalInfo] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [setAllPosts]);

  const fetchAll = () => {
    fetch(`${ApiPostFisc}/posts?_embed&categories=53&per_page=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        setAllPosts(responseJson);
        setMasterData(responseJson); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = () => {
    setAllPosts([]);
    fetchAll();
  };

  const ItemView = ({ item }) => {
    return (
      <View>
            <TouchableOpacity
            onLongPress={() =>
            navigation.navigate('Screen2', {item: item})}
            delayLongPress={100}
            key={item.id}
            style={{justifyContent: 'center',
            alignItems: 'center',
            height: RFPercentage(25.5),
            top: 0,
          }}>
            <View style={{ alignSelf: 'center', marginHorizontal: 0}} key={item.id}>
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
      </View>
    );
  };

  function trackDown(s) {
    let arr = JSON.parse(JSON.stringify(originalInfo));
    setAllPosts(allPosts.filter((d) => d.title.rendered.includes(s)))
  };

    return (
  <SafeAreaView>
   <View style={{paddingTop: 20}} >
    <TextInput
     placeholder='Pesquisar no Fiscaliza'
    onChangeText={(s) => trackDown(s)}
    style={styles.textInputStyle}
    />
    {allPosts.length > 0 ? (
    <FlatList
      data={allPosts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={ItemView}
      style={{position:'relative', marginBottom: 90, marginHorizontal: 20}}
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
    );
}


export function Search() {

  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator
      initialRouteName="SearchCategory" 
      screenOptions={screenOptionStyle}>
      <Stack.Screen name='SearchCategory' component={SearchCategory}
       options = {({navigation, route}) => ({
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      })}/>
       <Stack.Screen
      name='BrasilFeed'
      component={BrasilFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
        <Stack.Screen
      name='PolitcsFeed'
      component={PolitcsFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
       <Stack.Screen
      name='PoliciaFeed'
      component={PoliciaFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
       <Stack.Screen
      name='MundoFeed'
      component={MundoFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
       <Stack.Screen
      name='EntretenimentoFeed'
      component={EntretenimentoFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen
      name='AMFeed'
      component={AMFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
       <Stack.Screen
      name='EsportesFeed'
      component={EsportesFeed}
      options={{
        headerTitle: '',
        headerStyle:{backgroundColor: '#087433'},
          headerTitle: (props) => ( 
          <Image
            style={{ width: RFValue(145), height: RFValue(36) }}
            source={require('../../../assets/logo.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen
        name="SearchFeed"
        component={SearchFeed}
        options = {({navigation, route}) => ({
          headerTitle: '',
          headerStyle:{backgroundColor: '#087433'},
            headerTitle: (props) => ( 
            <Image
              style={{ width: RFValue(145), height: RFValue(36) }}
              source={require('../../../assets/logo.png')}
              resizeMode='contain'
            />
          ),
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerLeft: (props) => null
        })}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options = {({navigation, route}) => ({
          headerTitle: '',
          headerStyle:{backgroundColor: '#087433'},
            headerTitle: (props) => ( 
            <Image
              style={{ width: RFValue(145), height: RFValue(36) }}
              source={require('../../../assets/logo.png')}
              resizeMode='contain'
            />
          ),
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerLeft: (props) => null
        })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

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