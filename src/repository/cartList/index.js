import axios from 'axios'

class CardList {

  getCardList = async () => {
    console.log('ab')

    try {
      const response = await axios.create().get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10');
      return response.data
    } catch (e) {
      return e.response.data
    }
  }
};
export default new CardList();

