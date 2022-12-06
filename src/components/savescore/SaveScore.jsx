import { Fragment, useState } from 'react';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAuth } from '../../context-api/AuthContext';

function SaveScore({ category, score, setError, resetGame }) {
  const [playerName, setPlayerName] = useState('');
  const { currentUser, docId } = useAuth();

  const saveScore = async (e) => {
    e.preventDefault();

    // if (!playerName || !category || !score) return;
    if (!score) return;

    try {
      const userRef = collection(db, 'user');
      const q = query(userRef, where('email', '==', currentUser.email));
      const querySnapShot = await getDocs(q);

      for (const docRef of querySnapShot.docs) {
        await setDoc(doc(db, 'user', docRef.id), { score }, { merge: true });
      }
    } catch (e) {
      console.log(e);
      setError('🙁 Error saving player score.');
    }

    resetGame();
  };

  return (
    <form className="score-form" onSubmit={saveScore}>
      {score ? (
        <Fragment>
          {/* <h3>You got a score! 🙌</h3>
          <p>Enter your name below to save your score.</p>
          <input
            type="text"
            value={playerName}
            placeholder="Enter your name"
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Save
          </button>
          <span>or</span> */}
          <h3>You got a score! 🙌</h3>
          <p>Click save to update your score in the leaderboard</p>
          <button className="btn" type="submit">
            Save
          </button>
        </Fragment>
      ) : (
        <h3>You didn&apos;t get a score! 😥</h3>
      )}

      <button className="btn" type="button" onClick={() => resetGame()}>
        Back to Leaderboard
      </button>
    </form>
  );
}

export default SaveScore;
