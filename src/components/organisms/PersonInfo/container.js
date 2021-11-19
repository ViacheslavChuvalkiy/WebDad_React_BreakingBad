import {React, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Person from "./component";
import {getPersonQuote, getPersonsData} from '../../../store/actions/getPersons'

const PersonContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personsReducer.persons);
  const isLoader = useSelector((state) => state.personsReducer.isLoadingData);
  const isError = useSelector((state) => state.personsReducer.isError);
  const quote = useSelector((state) => state.personsReducer.quote);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getPersonsData());
  }, [dispatch]);

  const person = persons.length ? persons.filter((item) => item.char_id == id)[0] : [];

  useEffect(() => {
    if (person.name){
      dispatch(getPersonQuote(person.name));
    }
  }, [person]);

  return <Person
    person={person}
    isLoader={isLoader}
    isError={isError}
    quote={quote}
    isCatalogPage={false}
  />;
};
export const container = PersonContainer;