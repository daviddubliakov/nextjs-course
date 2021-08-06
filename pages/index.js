import React, { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupsList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>

        <meta name="description" content="Browse a list of react meetups" />
      </Head>
      <MeetupsList meetups={props.meetups} />
    </Fragment>
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
