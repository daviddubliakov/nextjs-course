import React from 'react';
import { MongoClient } from 'mongodb';

import MeetupsList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <MeetupsList meetups={props.meetups} />
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect('mongodb+srv://david_user:david_user@cluster0.qumco.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
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
