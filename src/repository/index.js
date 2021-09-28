import cardList from './cardList'
import persons from './persons'
class Repository {
  APICardList = cardList;
  APIPersons = persons
}
export default new Repository()
