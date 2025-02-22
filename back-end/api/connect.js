import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://gabrielpetuco:a7hUSU6chlaBEFzs@spotifycluster.bz8e9.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyCluster";

const client = new MongoClient(URI);

export const db = client.db("spotifyDataBase");
