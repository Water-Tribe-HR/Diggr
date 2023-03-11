/* eslint-disable react/jsx-indent-props */
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import dogImage from '../assets/dog.jpg';
import useUserContext from '../hooks/useUserContext';
import AuthForm from '../components/AuthForm/AuthForm';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const { loggedIn, setLoggedIn } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.push('/discover');
    }
  }, [loggedIn]); // didn't we remove this due to an loading error?

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setLoggedIn(false);
      history.push('/login'); // wasn't here before, necessary now?
    } else {
      oktaAuth
        .getUser()
        .then((info) => {
          setLoggedIn(true);
          history.push('/discover');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState, oktaAuth, loggedIn]);

  return (
    <div className="flex h-screen w-screen">
      <div className="relative w-[600px]">
        <Link
          to="/"
          className="absolute top-4 left-4 border border-0 px-12 py-2 bg-[#8d5426] rounded text-white"
        >
          Diggr
        </Link>
        <img className="w-full h-full" src={dogImage} alt="dog-image" />
      </div>
      <div
        className="flex flex-col space-y-5 px-12 items-center justify-center"
        style={{ width: `--webkit-calc(100% - 600px)` }}
      >
        <h3 className="text-2xl text-center text-[#bb7c7c] font-medium my-3">Create An Account</h3>
        <AuthForm action="signup" />
        <p className="text-center text-[#bb7c7c]">
          Already Have An Account? &nbsp;
          <Link to="/login" className="font-bold text-success">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
