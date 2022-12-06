import { doc, query, setDoc, where } from 'firebase/firestore';
import { Fragment, useState } from 'react';
import { useAuth } from '../../context-api/AuthContext';
import { createPlayer } from '../../utils/fauna.helpers';
import { db } from '../../utils/firebase';

function SaveScore({ category, score, setError, resetGame }) {
  const [playerName, setPlayerName] = useState('');

  const saveScore = async (e) => {
    e.preventDefault();

    if (!playerName || !category || !score) return;

    // try {
    //   await createPlayer({ category, name: playerName.trim(), score });
    // } catch (error) {
    //   console.log(error);
    //   setError('🙁 Error saving player score.');
    // }

    resetGame();
  };

  return (
    <form className="score-form" onSubmit={saveScore}>
      {score ? (
        <Fragment>
          <h3>You got a score! 🙌</h3>
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
          <span>or</span>
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
