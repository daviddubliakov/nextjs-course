import React from 'react';

import MeetupsList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://media.istockphoto.com/photos/looking-directly-up-at-the-skyline-of-the-financial-district-in-picture-id1215119911',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://media.istockphoto.com/vectors/smart-city-landscape-city-centre-with-many-building-airplane-is-in-vector-id1152829426',
    address: 'Some address 124, 43565 Some City',
    description: 'This is a second meetup'
  },
];

const HomePage = (props) => {
  console.log(props);
  return (
    <MeetupsList meetups={props.meetups} />
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
  
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
