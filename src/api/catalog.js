import axios from 'axios';
import mainConfig from '../configs/main';

export default {
    area: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/catalog/area', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/catalog/area', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/catalog/area', credentials).then(res => res.data),
    },
    iot: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/catalog/iot', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/catalog/iot', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/catalog/iot', credentials).then(res => res.data),

        getType:(credentials) => axios.get(mainConfig.apiHost + '/iot/iot-type', credentials).then(res => res.data),
        putType:(credentials) => axios.put(mainConfig.apiHost + '/iot/iot-type', credentials).then(res => res.data),
        postType:(credentials) => axios.post(mainConfig.apiHost + '/iot/iot-type', credentials).then(res => res.data),
    },
    location: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/catalog/location', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/catalog/location', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/catalog/location', credentials).then(res => res.data),

        getType:(credentials) => axios.get(mainConfig.apiHost + '/catalog/location/type-of-location', credentials).then(res => res.data),
        putType:(credentials) => axios.put(mainConfig.apiHost + '/catalog/location/type-of-location', credentials).then(res => res.data),
        postType:(credentials) => axios.post(mainConfig.apiHost + '/catalog/location/type-of-location', credentials).then(res => res.data),

        getTimeZone:(credentials) => axios.get(mainConfig.apiHost + '/catalog/location/time-zone', credentials).then(res => res.data),
        putTimeZone:(credentials) => axios.put(mainConfig.apiHost + '/catalog/location/time-zone', credentials).then(res => res.data),
        postTimeZone:(credentials) => axios.post(mainConfig.apiHost + '/catalog/location/time-zone', credentials).then(res => res.data),
    },
    numberOfFrames: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/number-of-frames', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/number-of-frames', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/number-of-frames', credentials).then(res => res.data),
    },
    region: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/catalog/region', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/catalog/region', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/catalog/region', credentials).then(res => res.data),
    },
    species: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/species', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/species', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/species', credentials).then(res => res.data),
    },
    suppliers: {
        get:(type) => axios.get(mainConfig.apiHost + '/catalog/suppliers/' + type).then(res => res.data),
        put:(type, data) => axios.put(mainConfig.apiHost + '/catalog/suppliers/' + type, data).then(res => res.data),
        post:(type, data) => axios.post(mainConfig.apiHost + '/catalog/suppliers/' + type, data).then(res => res.data),
        delete:(type, id) => axios.delete(mainConfig.apiHost + '/catalog/suppliers/' + type, {params: {supplier_id: id}}).then(res => res.data)
    },
    typeOfBeehive: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/type-of-beehive', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/type-of-beehive', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/type-of-beehive', credentials).then(res => res.data),
    },
    typeOfFood: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/type-of-food', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/type-of-food', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/type-of-food', credentials).then(res => res.data),
    },
    typeOfMedication: {
        get:(credentials) => axios.get(mainConfig.apiHost + '/type-of-medication', credentials).then(res => res.data),
        put:(credentials) => axios.put(mainConfig.apiHost + '/type-of-medication', credentials).then(res => res.data),
        post:(credentials) => axios.post(mainConfig.apiHost + '/type-of-medication', credentials).then(res => res.data),
    }

};
