import "./private.css";
import React from "react";
import addpage from "./addpage.png";
import { Table } from "antd";
import "antd/dist/antd.css";
import { PieChart } from "react-minimal-pie-chart";
import Logo from "./Logo.js";

const Block = () => {
    return (
        <section>
            <button className="upcome">다가오는 스터디 일정</button>
            <button className="qrbutton">[7/21] 3주차 과제 제출</button>
            <button className="prbutton">스터디 종료</button>
            <button className="prbutton">글 작성</button>
        </section>
    );
};

const Sp = () => {
    return <Table className="spchart" columns={spcolumns} dataSource={spdata} />;
};

const Add = () => {
    return <img className="add1" src={addpage} alt="addpage" />;
};

const piedata = [
    { title: "one", value: 35, color: "#FFBD3E" },
    { title: "two", value: 45, color: "#56DBAB" },
    { title: "three", value: 20, color: "#FF6C3E" }
];

const columns = [
    {
        title: <div className="studyname">게시글</div>,
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

const Piein = (props) => {
    return <h1 className="ptitle">{props.children}</h1>;
};

const spcolumns = [
    {
        title: "이름",
        dataIndex: "name",
        key: "name",
        width: 50
    },
    {
        title: "글",
        dataIndex: "post",
        key: "post",
        width: 80
    },
    {
        title: "댓글",
        dataIndex: "comment",
        key: "comment",
        width: 80
    }
];

const spdata = [
    {
        key: "1",
        name: "가송",
        post: 5,
        comment: 11
    },
    {
        key: "2",
        name: "나송",
        post: 7,
        comment: 15
    },
    {
        key: "3",
        name: "다송",
        post: 3,
        comment: 7
    }
];

const data = [
    {
        key: "1",
        name: "스터디 규칙",
        address: "가송"
    },
    {
        key: "2",
        name: "1주차 스터디 제출",
        address: "나송"
    },
    {
        key: "3",
        name: "2주차 스터디 제출",
        address: "마송"
    },
    {
        key: "4",
        name: "3주차 스터디 제출",
        address: "라송"
    },
    {
        key: "5",
        name: "예상문제 작성",
        address: "마송"
    }
];

const App = () => (
    <>
        <Logo />
        <section className="block">
            <Block />
        </section>
        <section className="chart">
            <Piein>스터디 참여율</Piein>
            <div className="hp" style={{ display: "flex" }}>
                <Sp />
                <div className="pie">
                    <PieChart data={piedata} label={({ dataEntry }) => dataEntry.value} />
                </div>
            </div>
        </section>
        <section>
            <Table columns={columns} dataSource={data} />;
            <Add />
        </section>
    </>
);

export default App;
