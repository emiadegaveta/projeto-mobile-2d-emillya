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
          source={require('@/assets/images/começo.jpeg')}
          style={styles.reactLogo}
        />
      }
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: '#5e4d85' }}>Seja Bem-Vindo(a)! 👤</ThemedText>
      </ThemedView>
      <ThemedView style={styles.collapsibleContainer}>
      <Collapsible title="Perfil😶">
  <FlatList
    data={[
      { id: '1', text: 'Nome: User' },
      { id: '2', text: 'Email: user@gmail.com' },
      { id: '3', text: 'CPF: 000-000-000-00' },
    ]}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <ThemedText style={styles.listItem}>🌟 {item.text}</ThemedText>
    )}
  />
</Collapsible>

            <Collapsible title="Saldo💰">
              <ThemedText>
                <ThemedText type="defaultSemiBold">🌟 U$ 567,93</ThemedText>
              </ThemedText>
            </Collapsible>
</ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">👋 Primeiros passos: </ThemedText>
        <ThemedText style={{ fontSize: 18 }}>
        🌟 Seja Bem-Vindo(a) ao seu Banco Digital 
          <ThemedText type="defaultSemiBold"> BankTale</ThemedText>! A facilidade e modernidade na parte de finanaças na sua mão.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🤝 O que oferecemos?</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>
        🌟 Aqui você pode realizar Pix, ver seus cartões, senhas, extratos e muito mais! Tudo com uma interface simples e prática.
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
    marginVertical: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 410,
    alignItems: 'center',
    resizeMode: 'contain',
    position: 'absolute',
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