import React from 'react';

const getAge = birthDate => {
  const age = new Date().getTime() - birthDate.getTime();
  return new Date(age).getFullYear() - 1970;
}

const Greeting = (props) => {
  return (
    <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}</div>
  );
};

export default Greeting;