import "./qaboard.css";
import React from "react";
import addpage from "./addpage.png";
import { Input, Table } from "antd";
import "antd/dist/antd.css";
import Logo from "./Logo.js";

const Block = () => {
    return (
        <section>
            <button className="qanda">Q & A 게시판</button>
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
        name: "질문 게시판 질문 1",
        address: "송송"
    },
    {
        key: "2",
        name: "질문 게시판 질문 2",
        address: "나송"
    },
    {
        key: "3",
        name: "질문 게시판 질문3",
        address: "마송"
    },
    {
        key: "4",
        name: "질문 게시판 질문4",
        address: "라송"
    },
    {
        key: "5",
        name: "질문 게시판 질문 5",
        address: "바송"
    },
    {
        key: "6",
        name: "질문 게시판 질문 6",
        address: "아송"
    },
    {
        key: "7",
        name: "질문 게시판 질문 7",
        address: "자송"
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
