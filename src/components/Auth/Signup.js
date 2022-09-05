import { setupAuthentication } from './AuthSetup';
import "../../styles/forms.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function SignUpCompoent() {
  const handleAuthentication = () => {
    setupAuthentication(signInWithPopup, auth, provider, GoogleAuthProvider);
  };
  return (
    <div className="_component">
      <div className="box">
        <div className="content">
          <div className="logo"></div>
        </div>
        <div className="btm-3">
          <div className="btm-content">
            <h2>Welcome to Docit</h2>
            <p>Simple file recovery tool, for your work & personal stuff</p>
          </div>
        </div>
        <div className="btn-elem">
          <div className="googleBtn" onClick={handleAuthentication}>
            <div className="icon">
              <img src="/google.png" alt="google logo" />
            </div>
            <h2>Signup with Google</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpCompoent;


