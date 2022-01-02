import React from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { auth } from '../firebase';

import './SignIn.css';


function SignIn() {
  function handleInClick() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  }

  return (
    <div className="signIn">
      <main className="form-signin">
          <img
            className="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleInClick}
          >
            Sign in with Google
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </main>
    </div>
  );
}

export default SignIn;