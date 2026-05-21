
import { StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


const PlaceholderImage = require('@/assets/images/natacao2.png'); 


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);

    } else { 
      alert('Nenhuma imagem selecionada');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        
      </View>
      {showAppOptions ? (
          <View />
  ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label = "Escolha uma foto" onPress={pickImage} />
        <Button label="Use esta foto" onPress={() => setShowAppOptions(true)} />      
        </View>
      )}  
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",

  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center', 

},
});

