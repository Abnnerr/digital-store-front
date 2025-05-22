import LoginProvider from "./contexts/LoginContext";
import Paths from "./routes/Paths";

const App = () => {
  return (
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
    </>
  );
}

export default App;