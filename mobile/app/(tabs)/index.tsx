import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { FlatList } from 'react-native';
import { getBackgroundColorAsync } from 'expo-system-ui';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/夜幕微光01-removebg-preview.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText style={{ fontSize: 18 }}>
        🏢 Seja Bem-Vindo(a) ao seu Banco Digital Vintchôito 🤖
        <ThemedText type="defaultSemiBold"></ThemedText> Facilidade e praticidade no seu dia a dia. 📱
      </ThemedText>
      <ThemedView style={styles.collapsibleContainer}>
        <Collapsible title="Perfil 🙂">
          <FlatList
            data={[
              { id: '1', text: 'Nome: Vinthôito' },
              { id: '2', text: 'Email: emillya@gmail.com' },
              { id: '3', text: 'CPF: 400-289-228-28' },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ThemedText style={styles.listItem}> ✨{item.text}</ThemedText>
            )}
          />
        </Collapsible>

        <Collapsible title="Saldo💰">
          <ThemedText>
            <ThemedText type="defaultSemiBold">R$ 28.869,69</ThemedText>
          </ThemedText>
        </Collapsible>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Primeiros passos: </ThemedText>
        <ThemedText style={{ fontSize: 18 }}>
          🏢 Seja Bem-Vindo(a) ao seu Banco Digital
          <ThemedText type="defaultSemiBold"> Vintchôito</ThemedText>! Aqui você pode acessar os dados da sua conta e muito mais, de forma fácil e acessível, com mais praticidade e rapidez.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Serviços:</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>
          🤳 Área Pix, cartões, senhas e consulta de extratos.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 5,
  },
  collapsibleContainer: {
    marginVertical: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    

  },
  listContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 4,
  },
});