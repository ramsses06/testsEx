import axios from 'axios';
const URL = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

class Registers {
  async getRegisters () {
    const responseData = await axios({
      method: 'get',
      url: `${URL}`
    });
    return responseData.data;
  }
}

export default new Registers();