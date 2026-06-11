
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import IconButton from "@/components/IconButton";
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from "react";
import EmojiSticker from "@/components/EmojiSticker"; 
import EmojiList from "@/components/EmojiList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MedialLibrary from 'expo-media-library';

import { captureRef } from "react-native-view-shot";



const PlaceholderImage = require('@/assets/images/natacao2.png'); 


export default function Index() {
  const imageRef = useRef(null);


  const [status, requestPermission] = MedialLibrary.usePermissions();
   if (status === null) {
    requestPermission();
  }

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

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
  setIsModalVisible(true);
}

const onModalClose = () => {
  setIsModalVisible(false);
}

const onSaveImageAsync = async () => {
  try {
    const localUri = await captureRef(imageRef, {
      height: 440,
      quality: 1,
    });

    
    await MedialLibrary.saveToLibraryAsync(localUri);
    if (localUri) {
      alert('Imagem salva com sucesso!');
    }
  } catch (e) {
    console.log(e);
  }
};


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
      </View>
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

    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    </EmojiPicker>  

    </GestureHandlerRootView>

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
