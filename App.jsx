import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleInfo,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const data = require('./data.json');
const site = 'https://crowd.blob.core.windows.net/crowdvideos/';
const Sources = data.map(item => site + item.src.replace('.mp4', '.jpg'));

const App = () => {
  console.log(Sources);

  const handleButtonPress = () => {
    // تنفيذ أي عمل تحتاجه عند الضغط على الزر
    alert('information');
  };

  const handlerightButtonBackground = () => {
    // تنفيذ أي عمل تحتاجه عند الضغط على الزر الأيمن
    alert('Right');
  };

  const handleleftButtonBackground = () => {
    // تنفيذ أي عمل تحتاجه عند الضغط على الزر الأيسر
    alert('Left');
  };

  return (
    <View style={styles.container}>
      <View style={styles.grayBox}>
        <View style={styles.additionalGrayBox}>
          <Text style={styles.additionalGrayBoxText}>1/5</Text>
        </View>
        <Pressable style={styles.buttonContainer} onPress={handleButtonPress}>
          <FontAwesomeIcon icon={faCircleInfo} size={20} color="#878787" />
        </Pressable>
        <View style={styles.angleRightContainer}>
          <Pressable
            style={styles.rightButtonBackground}
            onPress={handlerightButtonBackground}>
            <FontAwesomeIcon icon={faChevronRight} size={30} color="#878787" />
          </Pressable>
        </View>
        <View style={styles.angleLeftContainer}>
          <Pressable
            style={styles.leftButtonBackground}
            onPress={handleleftButtonBackground}>
            <FontAwesomeIcon icon={faChevronLeft} size={30} color="#878787" />
          </Pressable>
        </View>
        <Image source={{uri: Sources[4]}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayBox: {
    width: 365,
    height: 230,
    flexShrink: 0,
    borderRadius: 33,
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    backdropFilter: 'blur(2px)',
    position: 'relative',
  },
  additionalGrayBox: {
    width: 45,
    height: 20,
    flexShrink: 0,
    borderRadius: 25.5,
    backgroundColor: '#878787',
    position: 'absolute',
    bottom: 190,
    right: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalGrayBoxText: {
    color: '#DCDCDC',
    textAlign: 'center',
    fontFamily: 'Gidugu',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 190,
    right: 20,
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  angleRightContainer: {
    position: 'absolute',
    top: '50%',
    right: '50%', // تم تغيير هذه القيمة إلى '50%'
    transform: [{translateX: 15}, {translateY: -10}], // تم تعديل النقل إلى اليمين
  },
  rightButtonBackground: {
    position: 'absolute',
    right: -166,
    marginTop: -23,
    width: 60,
    height: 60,
    backgroundColor: '#C8C8C8',
    borderRadius: 26,
    zIndex: -1,
    justifyContent: 'center', // جعل المحتوى في الوسط عموديًا
    alignItems: 'center', // جعل المحتوى في الوسط أفقيًا
  },

  angleLeftContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%', // تم تغيير هذه القيمة إلى '50%'
    transform: [{translateX: -15}, {translateY: -10}], // تم تعديل النقل إلى اليسار
  },
  leftButtonBackground: {
    position: 'absolute',
    left: -150, // تم تغيير هذه القيمة إلى 0
    width: 60,
    height: 60,
    marginTop: -10,
    backgroundColor: '#C8C8C8',
    borderRadius: 26,
    zIndex: -1,
  },

  image: {
    width: 127,
    height: 212,
    flexShrink: 0,
    borderRadius: 26,
    backgroundColor: 'lightgray',
    zIndex: -1,
    elevation: 4,
    right: -120,
    marginTop: 9,
  },
});

export default App;
