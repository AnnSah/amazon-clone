import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => { //this listener it return us called unsubscribe
      if (authUser) {
        ///the user logged in 

        dispatch({
          type: "SET_USER",
          user: authUser //we are pushing the user ot the data layer and getting back all the data for the user
        })
      } else {
        //the user logged out

        dispatch({
          type: "SET_USER",
          user: null //we are setting it back to null
        });
      }
    });

    console.log(user)

    return () => {
      unsubscribe();
      //any clean up operatinon go in here....
    }
  }, [dispatch, user])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
