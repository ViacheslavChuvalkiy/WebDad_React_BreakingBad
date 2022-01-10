import {React, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Person from "./component";
import {getPersonQuote} from '../../../store/actions/getPersons'


const PersonContainer = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cardListReducer.cardList);
  const isLoader = useSelector((state) => state.personsReducer.isLoadingData);
  const quote = useSelector((state) => state.personsReducer.quote);
  const {id} = useParams();
  let isError = useSelector((state) => state.personsReducer.isError);
  let person = cardList.filter(item => item.char_id  == id);

  useEffect(() => {
    if (person.name){
      dispatch(getPersonQuote(person.name));
    }
  }, [dispatch]);

  if (person.length){
    person = person[0];
  }
  else {
    isError = true;
  }

  return <Person
    person={person}
    isLoader={isLoader}
    isError={isError}
    quote={quote}
    isCatalogPage={false}
  />;
};
export const container = PersonContainer;