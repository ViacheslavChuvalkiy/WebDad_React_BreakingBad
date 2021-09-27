import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Person from "./component";
import {getPersonData} from '../../../store/actions/getPerson'

const PersonContainer = ({id}) => {

  const dispatch = useDispatch();
  const person = useSelector((state) => state.personReducer.person);
  const isLoader = useSelector((state) => state.personReducer.isLoadingData);
  const isError =  useSelector((state) => state.personReducer.isError);

  useEffect(() => {
    dispatch(getPersonData(id));
  }, [dispatch]);

  return <Person
    person = {person}
    isLoader = {isLoader}
    isError = {isError}
  />;
};
export const container = PersonContainer;