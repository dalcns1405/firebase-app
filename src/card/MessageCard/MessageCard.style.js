import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkorange,
        borderRadius:6,
        margin:8,
        padding:4,
        height:Dimensions.get('window').height/10,
        borderBottomWidth: 2,
        borderBottomColor: '#95a0a5',
        borderLeftColor:'#95a0a5',
      
     
        

        
    },
    inner_container:{
        flexDirection:'row',
        justifyContent: 'space-between',


    },
    user:{
        color:'#d8d8d5'

    },
    date:{
        fontStyle: 'italic',
        color:'#d8d8d5'

    },
    text:{
        color:'white', 
        fontWeight: 'bold',
        marginVertical: 8,
        fontSize:16

    }
})