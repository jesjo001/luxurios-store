import { Switch, Route, useParams } from "react-router-dom"

import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import SingleProductPage from "./pages/SingleProductPage"
import Header from "./components/nav/Header"

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/shop/:id" children={<SingleProductPage />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </>

);


export default App;
