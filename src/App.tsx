import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Route, Routes} from "react-router-native";


// Components
import LinearGradient from './Components/LinearGradient';

// Pages
import Login from "./Screens/Login";
import Swipe from './Screens/Swipe';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <LinearGradient>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/Home" element={<Swipe />}/>
            </Routes>
        </LinearGradient>
      </View>        
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F2F2F',
  },
});
