import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async key => {
  try {
    let d = await AsyncStorage.getItem(key);
    d = d ? JSON.parse(d) : [];
    return d;
  } catch (e) {
    console.log(e);
  }
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
