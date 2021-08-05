import React from 'react';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const onAddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
};

export default NewMeetup;
