import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MyPage from './routes/MyPage';
import OpenStudy from './routes/OpenStudy';
import SetBoardPrivate from './routes/SetBoardPrivate';
import Setting from './routes/Setting';
import EnterBoard from './routes/EnterBoard';
import EnterBoard2 from './routes/EnterBoard2';
import MemberGrade from './routes/MemberGrade';
import Board1 from './routes/Board1';
import Board2 from './routes/Board2';
import Private from './routes/Private';
import Login from './routes/Login';
import Join from './routes/Join';
import Share from './routes/Share';
import Qaboard from './routes/Qaboard';
import DetailBoard from './routes/DetailBoard'
import DetailShare from './routes/DetailShare'
import DetailSell from './routes/DetailSell'
import DetailQa from './routes/DetailQa'
import SetBoardQa from './routes/SetBoardQa';
import SetBoardSell from './routes/SetBoardSell';
import SetBoardShare from './routes/SetBoardShare';
import OpenStudy2 from './routes/OpenStudy2';
import Sell from './routes/Sell';


function App() {
  return (
    <Router>
      <Routes>{/*한번에 하나의 Route를 렌더링하기 위함*/}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/enterboard/:key" element={<EnterBoard />}></Route>
        <Route path="/enterboard2/:key" element={<EnterBoard2 />}></Route>
        <Route path="/openstudy" element={<OpenStudy />}></Route>
        <Route path="/openstudy2" element={<OpenStudy2 />}></Route>
        <Route path="/membergrade" element={<MemberGrade />}></Route>git
        <Route path="/setboard_private" element={<SetBoardPrivate />}></Route>
        <Route path="/setboard_qa" element={<SetBoardQa />}></Route>
        <Route path="/setboard_sell" element={<SetBoardSell />}></Route>
        <Route path="/setboard_share" element={<SetBoardShare />}></Route>
        <Route path="/board1" element={<Board1 />}></Route>
        <Route path="/board2" element={<Board2 />}></Route>
        <Route path="/private/:key" element={<Private />}></Route>
        <Route path="/detailboard/:key" element={<DetailBoard />}></Route>
        <Route path="/detailshare/:key" element={<DetailShare />}></Route>
        <Route path="/detailsell/:key" element={<DetailSell />}></Route>
        <Route path="/detailqa/:key" element={<DetailQa />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
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