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

    },
    footer:{
        alignItems:'flex-end',
        justifyContent:'center',
        
        

    },
    dislike_container:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:3,
        paddingHorizontal:10,
        borderRadius:20,
        alignItems:'center'

    },
    dislike_count_container:{
        backgroundColor:colors.darkorange,
        padding:3,
        borderRadius:20,
        marginRight:3

    },
    dislike_count_text:{
        color:'white',
        fontWeight:'bold',


    },
    dislike_text:{
        color:colors.darkorange,
        fontWeight:'bold'

    }
})