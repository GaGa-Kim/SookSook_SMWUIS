import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MyPage from './routes/MyPage';
import OpenStudy from './routes/OpenStudy';
import SetBoard from './routes/SetBoard';
import Setting from './routes/Setting';
import EnterBoard from './routes/EnterBoard';
import MemberGrade from './routes/MemberGrade';
import Board1 from './routes/Board1';
import Board2 from './routes/Board2';
import Private from './routes/Private';
import Login from './routes/Login';
import Join from './routes/Join';
import Share from './routes/Share';
import Qaboard from './routes/Qaboard';

function App() {
  return (
    <Router>
      <Routes>{/*한번에 하나의 Route를 렌더링하기 위함*/}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/enterboard" element={<EnterBoard />}></Route>
        <Route path="/openstudy" element={<OpenStudy />}></Route>
        <Route path="/setboard" element={<SetBoard />}></Route>
        <Route path="/membergrade" element={<MemberGrade />}></Route>
        <Route path="/setboard" element={<SetBoard />}></Route>
        <Route path="/board1" element={<Board1 />}></Route>
        <Route path="/board2" element={<Board2 />}></Route>
        <Route path="/private" element={<Private />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/qaboard" element={<Qaboard />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;