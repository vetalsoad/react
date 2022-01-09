import React from 'react';

const getAge = birthday => {
  const age = new Date().getTime() - birthday.getTime();
  return new Date(age).getFullYear() - 1970;
}

const Greeting = (props) => {
  return (
    <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthday)} years old`}</div>
  );
};

export default Greeting;