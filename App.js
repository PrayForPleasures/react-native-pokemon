import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Pressable,
} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.main_image_fst}
                source={require("../pokedm/assets/pokemon.png")}
            />
            <Image
                style={styles.main_image_scnd}
                source={require("../pokedm/assets/charmander.png")}
            />
            <Pressable
                style={styles.main_button}
                onPress={() => console.log("press start")}
            >
                <Text style={styles.main_button_text}>Начать игру</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    main_image_fst: {
        resizeMode: "contain",
    },
    main_image_scnd: {
        resizeMode: "contain",
    },
    main_button: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "yellow",
        marginTop: 48,
        borderColor: "blue",
        borderWidth: 1,
        shadowColor: "blue",
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: 1,
    },
    main_button_text: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
