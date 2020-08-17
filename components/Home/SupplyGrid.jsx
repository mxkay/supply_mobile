import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import SupplyTile from "./SupplyTile.jsx";

const SupplyGrid = ({ supplies, onPress, activity }) => (
    
    <View style={styles.vertical}>
        <View style={styles.container}>
            {
                activity ?
                    <ActivityIndicator />
                :
                    supplies[0]?
                        supplies.map( supply => <SupplyTile name={supply.name} color={supply.color} id={supply.id} onPress={onPress} />)
                    :
                        <Text>You aren't tracking any supplies yet</Text> }
        </View>
    </View>
)

const styles = StyleSheet.create({
    vertical: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlignVertical: "center",
    }
})

export default SupplyGrid