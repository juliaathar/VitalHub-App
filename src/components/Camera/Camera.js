import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';

//1- instanciar a camera
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import * as MediaLibrary from "expo-media-library"

export const Camera = () => {

    const cameraRef = useRef(null);

    const [photo, setPhoto] = useState(null)
  
    const [openModal, setOpenModal] = useState(false)
  
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  
    async function CapturePhoto() {
      if (cameraRef) {
        const photo = await cameraRef.current.takePictureAsync();
        setPhoto(photo.uri)
  
        setOpenModal(true)
  
        console.log(photo);
      }
    }
  
    async function ClearPhoto() {
      setPhoto(null)
      setOpenModal(false)
    }
  
    async function SavePhoto() {
      if(photo) {
        await MediaLibrary.createAssetAsync(photo)
        .then( () => {
          Alert.alert("Sucesso", "Foto salva na galeria")
        } ).catch(error => {
          Alert.alert("Erro", "Erro ao salvar foto")
        })
  
        setOpenModal(false)
      }
    }
  
    useEffect(() => {
      (async () => {
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
  
        const {status: mediaStatus} = await MediaLibrary.requestPermissionsAsync()
      })();
    }, [])

    return(
        <View style={styles.container}>
      {/* 2- chamando a camera */}
      <Camera
        ref={cameraRef}
        type={cameraType}
        style={styles.camera}

        ratio={'16:9'}
      >

        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>

      </Camera>

      <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
        <FontAwesome
          name='camera'
          size={23}
          color={"#fff"}
        />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={falese} visible={openModal}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 30 }}>
          <Image style={{ width: '100%', height: 500, borderRadius: 10 }} source={{ uri: photo }} />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
              <FontAwesome
                name='trash'
                size={40}
                color={"#ff0000"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSave} onPress={() => SavePhoto()}>
              <FontAwesome
                name='save'
                size={40}
                color={"#121212"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    )
}