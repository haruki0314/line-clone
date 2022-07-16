import "./App.css";
import SignIn from "./components/pages/SignIn";
import Line from "./components/pages/Line";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
