import axios from 'axios';

export function getCardList() {
  return axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
    .then(response => {
      return {
        type : "GET_CARD_LIST",
        cardList: response.data
      };
  });
}