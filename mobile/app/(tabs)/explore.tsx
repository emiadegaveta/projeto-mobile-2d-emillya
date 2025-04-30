import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { FlatList } from 'react-native';
import undefined from '@/components/ui/TabBarBackground';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/28.png')} 
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: '#5e4d85' }}>Pix, cartões, senhas e extratos </ThemedText>
      </ThemedView>
      <ThemedView style={styles.collapsibleContainer}>
        <Collapsible title="Extrato📜">
          <FlatList
            data={[
              { id: '1', text: '27/01: boleto-casas bahia' },
              { id: '2', text: '28/01: parada do 12' },
              { id: '3', text: '30/01: açaí da bru' },
              { id: '4', text: '02/02: polo modas' },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ThemedText style={styles.listItem}>⬇️ {item.text}</ThemedText>
            )}
          />
        </Collapsible>

        <Collapsible title="Pix💸">
          <FlatList
            data={[
              { id: '1', text: '-280,00' },
              { id: '2', text: '-60,00' },
              { id: '3', text: '-18,00' },
              { id: '4', text: '-20,00' },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ThemedText style={styles.listItem}>📊 {item.text}</ThemedText>
            )}
          />
        </Collapsible>
      </ThemedView>
      <Collapsible title="Cartões 💳">
        <ThemedText>
          Cartão de Débito:

        </ThemedText>

        <Image source={require('@/assets/images/dedito2.png')} style={{ alignSelf: 'center', width: 250, height: 250 }} />

        <ThemedText>
          Cartão de Crédito:

        </ThemedText>

        <Image source={require('@/assets/images/dedito1.png')} style={{ alignSelf: 'center', width: 250, height: 250 }} />
      </Collapsible>

      <Collapsible title="Senhas 🔑">
        <FlatList
          data={[
            { id: '1', text: 'Débito: 4002' },
            { id: '2', text: 'Banco: 66-99-24' },
            { id: '3', text: 'Pix: 28828' },
            { id: '4', text: 'Crédito: 8922' },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemedText style={styles.listItem}>🔑 {item.text}</ThemedText>
          )}> </FlatList>
      </Collapsible>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    height: 20,
    width: 20,
  },
  reactLogo: {
    height: undefined, aspectRatio: 16/10.6,
    width: '100%',
    alignItems: 'flex-end',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  collapsibleContainer: {
    marginVertical: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    fontSize: 17,
    marginBottom: 4,
  },
});
