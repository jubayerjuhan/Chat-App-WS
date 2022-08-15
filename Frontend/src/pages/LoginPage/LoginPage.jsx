import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { firebaseInitialize } from "../../firebaseconfig.js";
import "./LoginPage.scss";
const LoginPage = () => {
  const navigate = useNavigate();

  firebaseInitialize();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // redux dispatcher
  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "USER_LOGIN", payload: user });
        navigate("/chat");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="buttonWrapper">
        <button onClick={handleLogin}>Hello Login Here</button>
      </div>
    </div>
  );
};

export default LoginPage;
