import React from 'react';
import moment from 'moment';
import './profile.scss';

const formatData = date => moment(date).format('DD MMM YY');

/* const getAge = birthDate => {
  const age = new Date().getTime() - birthDate.getTime();
  return new Date(age).getFullYear() - 1970;
} */

const Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      {
        <div className='profile__birth'>{`Was born ${formatData(
          props.userData.birthDate
        )} in ${props.userData.birthPlace}`}</div>
      }
    </div>
  );
};

export default Profile;