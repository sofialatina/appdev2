import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/studio-ghibli-phone-nj9cccytx7p1iht7.webp')}
      style={styles.screen}
    >
      <View style={styles.card}>
        <Text style={styles.name}>Sofia Isabel I. Latina</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Course & Section</Text>
        <Text style={styles.value}>
          Bachelor of Science in {"\n"}Information Systems 3-A
        </Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>Level 20 Unlocked</Text>

        <Text style={styles.label}>Hobbies</Text>
        <Text style={styles.value}>
           ⪧ Watching{"\n"}
           ⪧ Gaming{"\n"}
           ⪧ Reading{"\n"}
           ⪧ Observing
        </Text>

        <Text style={styles.label}>Pet Peeves</Text>
        <Text style={styles.value}>Those who were warned and didn't listen.</Text>
        <Text style={styles.value}>People who keep ignoring personal space and waste time.</Text>
        <Text style={styles.value}>Being too "feeling close" even though we are not yet acquainted.</Text>

        <Image
          source={require('./assets/sootsprite.png')}
          style={styles.sticker}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Profile Demo</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.11,
    shadowRadius: 4.8,
    elevation: 8,
    position: 'relative',
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a6f3f0',
    textAlign: 'center',
  },

  divider: {
    height: 2,
    backgroundColor: '#a6e2f3',
    marginVertical: 12,
    borderRadius: 2,
  },

  label: {
    fontSize: 13,
    color: '#d0f7ff',
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  value: {
    fontSize: 16,
    color: '#F5F5F5',
    marginTop: 4,
    lineHeight: 22,
  },

  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#a6f3f0',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 14,
    color: '#a6f3f0',
    fontStyle: 'italic',
  },

  sticker: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
