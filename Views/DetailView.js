import React,{Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 5,
    },
    title: {
        fontSize: 25,
        color: 'blue',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
        color:'red'        
    },
    photo: {
        flex:2,
        margin:30,
        justifyContent:'center',
        height: "100%",
        width: '100%',
    },
});

class DetailView extends Component{

    static navigationOptions = {
        //Setting the header of the screen
        title: 'Detail View',
        headerStyle: {
          backgroundColor: '#4B0090',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    

      render() {
        const { navigation } = this.props;
        return (
          <View style={styles.container}>
        <Image source={{ uri: navigation.getParam('image_url') }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                Title : {JSON.stringify(navigation.getParam('title'))}
            </Text>
            <Text style={styles.description}>
                Description : {JSON.stringify(navigation.getParam('description'))}
            </Text>
        </View>

    </View>
);
}
}

export default DetailView;