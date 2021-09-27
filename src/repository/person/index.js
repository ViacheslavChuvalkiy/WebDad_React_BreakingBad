import axios from 'axios'

class Person {

  getPerson = async (id) => {
    let result = { value: null, error : null};
    try {
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
      result.value = response.data
    } catch (e) {
      result.error = e.response
    }
    return result;
  };

  getPersonQuote = async (id) => {
    let result = { value: null, error : null};
    try {
      const response = await axios.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
      result.value = response.data
    } catch (e) {
      result.error = e.response
    }
    return result;
  }
};
export default new Person();

