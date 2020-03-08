import AsyncStorage from '@react-native-community/async-storage';

const Storage = () => {};

Storage.prototype.setAsyncStorage = async function(obj) {
    const pendingPromiseArr = [];
    Object.keys(obj).forEach(key => {
        pendingPromiseArr.push(AsyncStorage.setItem(`chat:auth:${key}`, obj[key]));
    });
    
    try {
        return await Promise.all(pendingPromiseArr);
    } catch(e) {
        throw e;
    }
};

Storage.prototype.getAsyncStorage = async function(arr) {
    const pendingPromiseArr = [];
    arr.forEach(key => {
        pendingPromiseArr.push(AsyncStorage.getItem(`chat:auth:${key}`));
    });

    try {
        return await Promise.all(pendingPromiseArr);
    } catch(e) {
        throw e;
    }
};

Storage.prototype.clearAsyncStorage = async function(arr) {
    const pendingPromiseArr = [];
    arr.forEach(key => {
        pendingPromiseArr.push(AsyncStorage.removeItem(`chat:auth:${key}`));
    });
    
    try {
        return await Promise.all(pendingPromiseArr);
    } catch(e) {
        throw e;
    }
}

const storage = new Storage();

export default storage;