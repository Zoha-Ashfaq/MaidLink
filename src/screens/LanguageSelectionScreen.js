import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSelectionScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(); // Translation hook
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Track selected language

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // Update the language
    // Navigate to PhoneNumberScreen after selecting language
    navigation.navigate('PhoneNumberScreen', { language: lang });
  };

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <View style={styles.background} />

      {/* Logo and App Name */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/pictures/maidlink logo.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>Maid Link</Text>
      </View>

      {/* Select Language */}
      <Text style={styles.selectLanguage}>{t('selectLanguage')}</Text>

      {/* Language Options */}
      <View style={styles.radioGroup}>
        {/* English Option */}
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedLanguage === 'en' && styles.selectedOption,
          ]}
          onPress={() => handleLanguageChange('en')}
        >
          <Text style={styles.radioText}>English</Text>
          <View
            style={[
              styles.radioButton,
              selectedLanguage === 'en' && styles.selectedRadio,
            ]}
          />
        </TouchableOpacity>

        {/* Urdu Option */}
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedLanguage === 'ur' && styles.selectedOption,
          ]}
          onPress={() => handleLanguageChange('ur')}
        >
          <Text style={styles.radioText}>اردو</Text>
          <View
            style={[
              styles.radioButton,
              selectedLanguage === 'ur' && styles.selectedRadio,
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* Central Illustration */}
      <Image
        source={require('../../assets/pictures/language.png')}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
  },
  logo: {
    width: 80,
    height: 80,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#722620',
    marginTop: 10,
  },
  selectLanguage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#de8a0d',
    textAlign: 'center',
    marginVertical: 20,
  },
  radioGroup: {
    alignItems: 'center',
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#de8a0d',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fef6e4',
  },
  radioText: {
    fontSize: 18,
    color: '#722620',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#de8a0d',
    backgroundColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#722620',
  },
  selectedRadio: {
    backgroundColor: '#de8a0d',
  },
  illustration: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LanguageSelectionScreen;
