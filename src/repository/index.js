import cardList from './cardList'
import person from './person'
class Repository {
  APICardList = cardList;
  APIPerson = person
}
export default new Repository()
