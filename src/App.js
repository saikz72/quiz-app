import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/home/HomePage';
import LoginPage from './components/pages/login/LoginPage';
import ProfilePage from './components/pages/profile/ProfilePage';
import QuizPage from './components/pages/quiz/QuizPage';
import Result from './components/pages/result/Result';
import SingupPage from './components/pages/singup/SingupPage';
import PrivateRoute from './components/routing/PrivateRoute';
import { AuthProvider } from './context-api/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/singup" component={SingupPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/quiz" component={QuizPage} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
