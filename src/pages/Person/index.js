import React from 'react';
import PersonPage from "../../components/molecules/Person";

const Person = ({match}) => {
  return (
    <div>
      <PersonPage
      id = {match.params.id}/>
    </div>
  );
}
export default Person;