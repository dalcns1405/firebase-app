import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base_style=StyleSheet.create({
    container: {
        backgroundColor: colors.darkorange,
        padding: 10,
        margin: 8,
        borderRadius: 8,
        alignItems: "center"

    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"

    },
    button_container: {
        flexDirection: 'row',
        alignItems: "center"

    }

})

export default {

    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.darkorange,
         

        },
        title: {
            ...base_style.title,
          color: "white",
        

        },
      

    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
            borderColor:colors.darkorange,
            borderWidth:1,

        },
        title: {
            ...base_style.title,
            color: colors.darkorange,
      

        },
      
    })

}