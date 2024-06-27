import { StyleSheet, View, StatusBar } from 'react-native';
import HomePage from './Screens/HomePage';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
      <StatusBar style="auto" barStyle={'light-content'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(127, 0, 255)',
  },
});
