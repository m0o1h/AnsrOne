import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  //Views
  container: {
    flex: 1,
    backgroundColor:'#1F2C54'
    //justifyContent: "center",
    //alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    backgroundColor:'#1F2C54',
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistoutercontainer: {
    top: 40,
    flex: 1,
    backgroundColor: "#252527",
  },
  flatlistinnercontainer: {
    flex: 1,
    flexDirection: "column",
  },

  //header
  headerContainer:{
    width:'100%',
    height:50,
    flexDirection:'row',
    backgroundColor:'#364C90',
    alignItems: "center",
    marginTop:40,
  },
  headerThreeBarIcon:{
    marginLeft:5,
  },
  headerSearchIcon:{
    marginRight:5,
  },
  headerInput:{
    borderWidth:2,
    borderRadius:10,
    width:'70%',
    borderColor:'white',
    padding:5,
    color:'white',
  },
  headerDownloadIcon:{
    marginLeft:5,
  },

  verticalScrollContainer:{
    backgroundColor:'#364C90',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  verticalImage:{
    width:'95%',
    height:90,
    borderRadius:10,
    marginVertical:25,
  },

  userNameText:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginLeft:15,
    marginVertical:10,
  },



  video: {
    alignSelf: 'stretch',
    height: 300,
  },


});

export {styles}