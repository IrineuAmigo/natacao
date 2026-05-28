
import { StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";


const PlaceholderImage = require('@/assets/images/natacao2.png'); 


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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

const onReset = () => {
  setShowAppOptions(false);
};

const onAddSticker = () => {
  setIsModalVisible
  // será implementado depois
  alert('Adicionar sticker');
}

const onModalClose = () => {
  setIsModalVisible(false);
}

const onSaveImageAsync = async () => {
  // será implementado depois
  alert('Salvar imagem');
};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reiniciar" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save" label="Salvar" onPress={onSaveImageAsync} />    
          </View>
        </View>

  ) : (

      <View style={styles.footerContainer}>
        <Button theme="primary" label = "Escolha uma foto" onPress={pickImage} />
        <Button label="Use esta foto" onPress={() => setShowAppOptions(true)} />      
        </View>
      )}  
    </View>
  );
  
<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
  {/* Aqui serão listados os emojis para escolha, por enquanto só tem um exemplo */}
</EmojiPicker>  


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

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});

}
