import axios from 'axios';
import mainConfig from '../configs/main';

export default {
    getBox:(credentials) => axios.get(mainConfig.apiHost + '/box', credentials).then(res => res.data),
    getClient:(credentials) => axios.get(mainConfig.apiHost + '/client', credentials).then(res => res.data),
    getColonies:(credentials) => axios.get(mainConfig.apiHost + '/colonies', credentials).then(res => res.data),
    getEmployeeColonies:(credentials) => axios.get(mainConfig.apiHost + '/colonies', credentials).then(res => res.data),

    getIotArnia:(credentials) => axios.get(mainConfig.apiHost + '/iot/arnia-scales', credentials).then(res => res.data),
    getIotSensors:(credentials) => axios.get(mainConfig.apiHost + '/iot/sensors', credentials).then(res => res.data),
    getIotGps:(credentials) => axios.get(mainConfig.apiHost + '/iot/gps', credentials).then(res => res.data),

    getPallets:(credentials) => axios.get(mainConfig.apiHost + '/pallets', credentials).then(res => res.data),
    getQueens:(credentials) => axios.get(mainConfig.apiHost + '/queens', credentials).then(res => res.data),

}