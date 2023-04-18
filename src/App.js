
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/home";


const App = () => {
  return (
    <Route>
      <Route path="/" component={Home} exact />
    </Route>
  );
};


export default App;
// export default chỉ gọi đc một fun
