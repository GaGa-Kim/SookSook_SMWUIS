import{
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";
import Home from "./routes/Home";
import MyPage from './routes/MyPage';
import OpenStudy from './routes/OpenStudy';
function App() {
  return (
   <Router>
    <Switch>{/*한번에 하나의 Route를 렌더링하기 위함*/}
      <Route path="/mypage">
        <MyPage /> 
      </Route>
      <Route path="/openstudy">
        <OpenStudy /> 
      </Route>
      <Route path="/">{/*홈화면으로 갈때*/}
        <Home /> 
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
