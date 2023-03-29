import React,{useState} from 'react';
import { View, Text, TextInput, Image, ScrollView, Button, Dimensions } from 'react-native';
import { styles } from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {YoutubeIframe, YouTubePlayer}  from 'react-native-youtube-iframe';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window')

function HomeScreen({navigation}){
      return (
    <View style={styles.container} >
        <View style={styles.headerContainer} >
            <Ionicons name="reorder-three" size={45} color="white" style={styles.headerThreeBarIcon} />
            <FontAwesome name="search" size={24} color="white" style={styles.headerSearchIcon} />
            <TextInput
            style={styles.headerInput}
            placeholder='TYPE HERE'
            onChangeText={()=>{}}
            ></TextInput>
            <Feather name="download" size={24} color="white" style={styles.headerDownloadIcon} />
        </View>

        <View style={styles.verticalScrollContainer} >
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={styles.verticalImage} ></Image>
        </View>

        <Text style={styles.userNameText} >Hi, Sneha</Text>

        <Text style={{...styles.userNameText, color:'#C05819'}} >Live .</Text>

        <View>
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
          <View style={{width:width, borderRadius:10, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>
          
        </ScrollView>
        </View>

        <Text style={{...styles.userNameText, fontSize:20,fontWeight:'normal'}} >{'Cohort Based Courses >'}</Text>

        <View>
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
          <View style={{width:width, borderRadius:10, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>

            <View style={{width:width, height:300}}>
            <Image source={{uri:"https://aptstudy.com/wp-content/uploads/2019/08/website-8-08-2019_-study-skills-01.jpg"}} style={{width:'100%', height:'20%'}} ></Image>
            <Button title='Join now' color={'red'} onPress={()=>{}} ></Button>
            </View>
          
        </ScrollView>
        </View>

     </View>
  );
  }

  function NotesScreen({navigation}) {
  
    return (
      <View style={styles.imageContainer} >
       {/* <YoutubeIframe
      videoId="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      height={300}
      width={200}
      play={true}
      onChangeState={(event) => console.log(event)}
      onReady={() => console.log('ready')}
      onError={(error) => console.log(error)}
    /> */}
        <Text style={styles.userNameText} >Youtube Video</Text>
       </View>
    );
  }

  function TestsScreen({navigation}) {
  
    return (
      <View style={styles.imageContainer} >
        <Text style={styles.userNameText} >Tests</Text>
       </View>
    );
  }

function QuizScreen({navigation}) {
  
    return (
      <View style={styles.imageContainer} >
        <Text style={styles.userNameText} >Quiz</Text>
       </View>
    );
  }

export default function MainPage({navigation}) {
    return (
        <Tab.Navigator initialRouteName='HomeScreen' >
          <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown:false,
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            tabBarInactiveBackgroundColor:'#2E2E31',
            tabBarActiveBackgroundColor:'#2E2E31',
            tabBarStyle:{borderTopColor:'#252527'},
            tabBarIcon:({focused, color, size })=>(<Entypo name="home" size={20} color={color} />),
          }}
          />
          <Tab.Screen name="Notes" component={NotesScreen}
          options={{
            headerShown:false,
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            tabBarInactiveBackgroundColor:'#2E2E31',
            tabBarActiveBackgroundColor:'#2E2E31',
            tabBarStyle:{borderTopColor:'#252527'},
            tabBarIcon:({color})=>( <Foundation name="clipboard-pencil" size={20} color={color} />),
          }}
          />
          <Tab.Screen name="Tests" component={TestsScreen}
          options={{
            headerShown:false,
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            tabBarInactiveBackgroundColor:'#2E2E31',
            tabBarActiveBackgroundColor:'#2E2E31',
            tabBarStyle:{borderTopColor:'#252527'},
            tabBarIcon:({color})=>(<FontAwesome name="clipboard" size={20} color={color} />),
          }}
          />
          <Tab.Screen name="Quiz" component={QuizScreen}
          options={{
            headerShown:false,
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            tabBarInactiveBackgroundColor:'#2E2E31',
            tabBarActiveBackgroundColor:'#2E2E31',
            tabBarStyle:{borderTopColor:'#252527'},
            tabBarIcon:({color})=>(<Foundation name="clipboard-notes" size={20} color={color} />),
          }}
          />
        </Tab.Navigator>
    );
}

