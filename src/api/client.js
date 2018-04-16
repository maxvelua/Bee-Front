import axios from 'axios';
import mainConfig from '../configs/main';

export default {
    // запрос на сервер, первый аргумент строка пути, второй тело запроса (так выглядит POST, другие розняца), ответ содержится в res.data, а не res
    register: (credentials) => axios.post(mainConfig.apiHost + '/client', credentials).then(res => res.data),
}
