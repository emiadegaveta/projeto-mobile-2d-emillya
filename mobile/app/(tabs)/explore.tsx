import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { FlatList } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
          <Image
                  source={require('@/assets/images/explorar.jpeg')}
                  style={styles.reactLogo}
                />
              }
              >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{color: '#5e4d85'}}>Pix, extrato, cartões e senhas</ThemedText>
      </ThemedView>
     <ThemedView style={styles.collapsibleContainer}>
           <Collapsible title="Extrato📜">
       <FlatList
         data={[
           { id: '1', text: '20/11: boleto-celular' },
           { id: '2', text: '18/11: lanche-xtudo' },
           { id: '3', text: '17/11: doces' },
           { id: '4', text: '17/11: roupa-loja' },
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
           { id: '1', text: '+200,00' },
           { id: '2', text: '-10,50' },
           { id: '3', text: '-150,00' },
           { id: '4', text: '+20,00' },
         ]}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
           <ThemedText style={styles.listItem}>📊 {item.text}</ThemedText>
         )}> </FlatList>
                 </Collapsible>
     </ThemedView>
      <Collapsible title="Cartões 💳">
        <ThemedText>
          Aqui você pode utilizar seus cartões virtualmente/digitalmente.

        </ThemedText>

        <Image source={require('@/assets/images/cartão.jpeg')} style={{ alignSelf: 'center',  width: 220, height: 120  }} />
        
      </Collapsible>

      <Collapsible title="Senhas 🔑">
                 <FlatList
         data={[
           { id: '1', text: 'Cartão D: xxxx' },
           { id: '2', text: 'Banco: xx-xx-xx' },
           { id: '3', text: 'Cartão C: xxxxxx' },
           { id: '4', text: 'Pix: xx-xx' },
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
    width: 410,
    height: 300,
    resizeMode: 'contain',
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
 