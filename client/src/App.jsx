import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUserThunk } from "./store/slice/user/user.thunk";
import Home from "./pages/home/Home";

function App() {
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  return <div>
   
    </div>;
}

export default App;
