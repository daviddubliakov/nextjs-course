import React from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: meetupId,
        image: 'https://media.istockphoto.com/photos/looking-directly-up-at-the-skyline-of-the-financial-district-in-picture-id1215119911',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup',
      },
    },
  };
};

export default MeetupDetails;
