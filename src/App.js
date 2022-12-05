import { useEffect } from 'react';
import { auth } from './utils/firebase';
import './App.css';
import { useCurrentUser } from './utils/UserProvider';

function App() {
  const context = useCurrentUser();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // update context
        context.setUser(user);
      } else {
        context.setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <div>QUIZ</div>
    </div>
  );
}

export default App;
