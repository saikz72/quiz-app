// import { Client, query } from 'faunadb';

import { async } from '@firebase/util';
import { collection, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from '../context-api/AuthContext';
// const client = new Client({ secret: process.env.REACT_APP_FAUNADB });

// const { Collection, Create, Index, Map: FMap, Get, Lambda, Match, Paginate, Var } = query;

// export const createPlayer = async (data) => {
//   return await client.query(Create(Collection('playerScores'), { data }));
// };

// export const getPlayers = async () => {
//   const { data } = await client.query(
//     FMap(Paginate(Match(Index('allPlayerScores'))), Lambda('ref', Get(Var('ref'))))
//   );

//   return data.map((player) => ({ ...player.data, id: player.ref.id }));
// };

export const getPlayers = async () => {
  const querySnapShot = await getDocs(collection(db, 'user'));
  let players = [];
  for (const doc of querySnapShot.docs) {
    players.push(doc.data());
  }

  return players;
};

export const updateScore = async (score) => {
  const { currentUser, docId } = useAuth();
  const userRef = collection(db, 'user');
  const q = query(userRef, where('email', '==', currentUser.email));
  const querySnapShot = await getDocs(q);

  for (const doc of querySnapShot.docs) {
    console.log(doc);
    await setDoc(doc, { score });
  }
};
