import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description} = data;

    const client = await MongoClient.connect('mongodb+srv://david_user:david_user@cluster0.qumco.mongodb.net/meetups?retryWrites=true&w=majority');
    console.log(client);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
