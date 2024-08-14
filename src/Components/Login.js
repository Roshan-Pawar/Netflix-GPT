import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(email.current.value, password.current.value);

    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "#",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // console.log(user);
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
          alt="bg-img"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-4/12 my-24 p-12 mx-auto right-0 left-0 rounded bg-black bg-opacity-80 text-white"
        >
          <div className="mx-4">
            <h1 className="font-bold text-3xl mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                className="p-4 my-3 w-full bg-stone-900 bg-opacity-60 border border-gray-600 border-solid rounded"
                type="text"
                placeholder="Full name"
                autoComplete="name"
              />
            )}
            <input
              ref={email}
              className="p-4 my-3 w-full bg-stone-900 bg-opacity-60 border border-gray-600 border-solid rounded"
              type="text"
              placeholder="Email or mobile number"
              autoComplete="username"
            />
            <input
              ref={password}
              className="p-4 my-3 w-full bg-stone-900 bg-opacity-60 border border-gray-600 border-solid rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            {!isSignInForm && (
              <input
                className="p-4 my-3 w-full bg-stone-900 bg-opacity-60 border border-gray-600 border-solid rounded"
                type="password"
                placeholder="Confirm password"
                autoComplete="current-password"
              />
            )}
            <p className="text-red-600"> {errorMsg} </p>
            <button
              className="p-2 my-6 w-full bg-red-600 rounded hover:bg-red-700"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <h6 className="mb-3 text-center">OR</h6>

            <h1
              className="text-center cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to netflix? Sign up now"
                : "Already a user? sign in now"}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
