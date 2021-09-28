import {React, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Person from "./component";
import {getPersonsData} from '../../../store/actions/getPersons'

const PersonContainer = () => {

  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personsReducer.persons);
  const isLoader = useSelector((state) => state.personsReducer.isLoadingData);
  const isError =  useSelector((state) => state.personsReducer.isError);
  const {id} = useParams();


  useEffect(() => {
    dispatch(getPersonsData());
  }, [dispatch]);

  return <Person
    persons = {persons}
    isLoader = {isLoader}
    isError = {isError}
    id = {id}
  />;
};
export const container = PersonContainer;