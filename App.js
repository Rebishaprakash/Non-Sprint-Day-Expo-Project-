import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, useColorScheme, View ,TextInput,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createNativeStackNavigator()
function HomeScreen({navigation}){

  // const colorScheme = useColorScheme();
  // console.log('colorScheme', colorScheme)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login=()=>{
      email==="rebisha" &&password ==="123" ?
        navigation.navigate("detail")
        :
        alert("enter valid email and password")
    }
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <View>
        <Text style={{color:'red',fontWeight:'900'}}>Login Page</Text>
      </View>
      
        
      <View >
        <TextInput
          style={styles.TextInput}
          placeholder="User name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}

        />
      </View>
   
      <View >
        <TextInput
          style={styles.TextInput} 
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}

        />
      </View>
      
      <TouchableOpacity>
        <Button style={styles.loginText} title="Log in" onPress={() => login()}/>
      </TouchableOpacity>
      
      </View>
    // <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:colorScheme==='dark'?'yellow':'red'}}>
    //   <Text>Home Screen</Text>
    //   <Button title= "detail" onPress={()=>navigation.navigate("detail")}/>
    // </View>
  )
}

function DetailsScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>DetailsScreen</Text>
      <Button title="back" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default function App() {
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="detail" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 50,
    width:300,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});