import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {  SearchBar } from "react-native-elements";
import ListRow from '../Components/ListRow';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
});


// const itemList = [
//   {
//       key: 1, 
//       title: 'Albert Einstein',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
//     },
//     {
//       key: 2,
//       title: 'Isaac newton',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
//     },
//     {
//       key: 3, 
//       title: 'Albert Einstein',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
//     },
//     {
//       key: 4,
//       title: 'Sayali Sonawane',
//       description: 'Front End Developer',
//       image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
//     },
//     {
//       key: 5, 
//       title: 'Tejas Shinde',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
//     },
//     {
//       key: 6,
//       title: 'Isaac newton',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
//     },
//     {
//       key: 7, 
//       title: 'Albert Einstein',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
//     },
//     {
//       key: 8,
//       title: 'Isaac newton',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
//     },
//     {
//       key: 9, 
//       title: 'Albert Einstein',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
//     },
//     {
//       key: 10,
//       title: 'Isaac newton',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
//       image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
//     },
//   ]


class ItemList extends Component {
  constructor(props){
    super(props);
    this.state = {
          searchText:"",
          error: null,
          isLoading: true,
          data: [],
          filteredData: []
    }
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/stickers/search?api_key=YuZsXS1zx5RtU1awkyS1WFN09OPLv8dJ&limit=100&q=cat", {
      "method": "GET",
      "headers": {
        "content-type": "multipart/form-data; boundary=---011000010111000001101001"
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            data: result.data,
            fullData: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      )
  }

  search = (searchText) => {
    this.setState({searchText: searchText});
  
    let filteredData = this.state.data.filter(function (item) {
      return item.title.includes(searchText);
    });
  
    this.setState({filteredData: filteredData});
  };
  

  renderHeader = () => {
    return <SearchBar
    round
    lightTheme={true}
    placeholder="Search..."
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText={this.search}
    value={this.state.searchText}
  />;
  };

  renderFooter = () => {
    return (       
      <View>
              {
                  ( this.state.filteredData )
                  ?
                      <ActivityIndicator size="large" color = "#F44336" style = {{ justifyContent:'space-evenly', alignSelf:'center'}} />
                  :
                      null
              }

      </View>           
     )
  }

  

  static navigationOptions = {
    //Setting the header of the screen
    title: 'Home',
    headerStyle: {
      backgroundColor: '#4B0090',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() { 
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex:1, alignSelf:'center', justifyContent:"space-evenly" }}>
          <ActivityIndicator animating size="large" color="#0000ff" />
        </View>
      );
    }
 
        return(
          
          <View style={styles.container}>
                <FlatList
                  data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
                  renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailView',{
                          title: item.title,
                          description: item.slug,
                          image_url: item.images.downsized_still.url
                        })}
                        >
                        <ListRow
                            title={item.title}
                            description={item.slug}
                            image_url={item.images.downsized_still.url}
                        />
                        </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}

                    />
          </View>
        )
      }
    }

export default withNavigation(ItemList);
