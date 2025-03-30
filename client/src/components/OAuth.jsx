import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signINSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false); // State to track signing-in status

  const handleGoogleClick = async () => {
    if (isSigningIn) return; // Prevent multiple requests
    setIsSigningIn(true); // Set signing-in state

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signINSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('Could not sign in with Google', error);
    } finally {
      setIsSigningIn(false); // Reset signing-in state
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      disabled={isSigningIn} // Disable button during sign-in
      className={`p-3 rounded-lg uppercase hover:opacity-95 ${
        isSigningIn ? 'bg-gray-400' : 'bg-red-700 text-white'
      }`}
    >
      {isSigningIn ? 'Signing in...' : 'Continue with Google'}
    </button>
  );
}
