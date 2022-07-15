import "./styles.css";
import React from "react";
import logo from "./logo.png";
import addpage from "./addpage.png";
import { Input, Table } from "antd";
import "antd/dist/antd.css";

const Logo = () => {
    return (
        <section className="logo" style={{ display: "flex" }}>
            <img src={logo} alt="logo" />
            <div className="search">
                <Search onSearch={onSearch} enterButton />
            </div>
            <div className="customer" style={{ display: "flex" }}>
                <Top>로그아웃</Top>
                <Top>고객센터</Top>
            </div>
        </section>
    );
};

const Top = (props) => {
    return <h2 className="topright">{props.children}</h2>;
};

const Block = () => {
    return (
        <section>
            <button className="share">자료공유 게시판</button>
        </section>
    );
};
const columns = [
    {
        title: <div className="studyname">글 제목</div>,
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>
    },

    {
        title: <div>작성자</div>,
        dataIndex: "address",
        key: <div>"address"</div>
    }
];

const data = [
    {
        key: "1",
        name: "자료 공유 게시판 글1",
        address: "송송"
    },
    {
        key: "2",
        name: "자료 공유 게시판 글2",
        address: "나송"
    },
    {
        key: "3",
        name: "자료 공유 게시판 글4",
        address: "마송"
    },
    {
        key: "4",
        name: "자료 공유 게시판 글5",
        address: "라송"
    },
    {
        key: "5",
        name: "자료 공유 게시판 글6",
        address: "바송"
    },
    {
        key: "6",
        name: "자료 공유 게시판 글7",
        address: "아송"
    }
];

const onSearch = (value) => console.log(value);
const { Search } = Input;

const Add = () => {
    return <img className="add" src={addpage} alt="addpage" />;
};

const App = () => (
    <>
        <Logo />
        <div className="block">
            <Block />
        </div>
        <section>
            <Table columns={columns} dataSource={data} />;
            <Add />
        </section>
    </>
);

export default App;
