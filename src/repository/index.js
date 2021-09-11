import cardList from './cartList/index'

class Repository {
  APICardList: IAPICore = cardList
}

export default new Repository()
