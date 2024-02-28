import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Text style={styles.cim}>Testtömegindex</Text>

      <View style={styles.body}>
        <Text style={styles.szoveg}>Tömeg</Text>
        <TextInput
          style={styles.mezo}
          onChangeText={text => setWeight(text)}
          value = {weight}
        />
        <Text style={styles.szoveg}>Magasság</Text>
        <TextInput
          style={styles.mezo}
          onChangeText={text => setHeight(text)}
          value = {height}
        />
        <Pressable
          onPress={calcBMI}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            SZÁMÍT
          </Text>
        </Pressable>
        <Text style={styles.szoveg}>Testtömegindex</Text>
        <TextInput
          style={styles.mezo}
          value = {bmi}
        />

        <Pressable
            onPress={reset}
            style={styles.button}>
            <Text style={styles.buttonText}>VISSZAÁLLÍT</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ferencsik Boglárka, 2024</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
