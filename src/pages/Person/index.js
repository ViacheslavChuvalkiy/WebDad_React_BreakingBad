import React from 'react';
import PersonPage from "../../components/organisms/Person";
import Header from "../../components/molecules/Header";

const Person = () => {
  return (
    <div>
      <Header
        isPerson = {true}
      />
      <PersonPage/>
    </div>
  );
}
export default Person;