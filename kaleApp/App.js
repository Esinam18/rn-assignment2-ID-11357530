import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontEdit}>
        My name is <Text style={styles.fontBold}> Harriet Esinam Kale </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontEdit:{
    fontSize: 24,
  },
  fontBold:{
    fontWeight: 'bold',
  },
});
