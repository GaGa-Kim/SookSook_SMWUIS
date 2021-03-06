import "../css/share.css";
import React from "react";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";

const Shareblock = () => {
    return (
        <section className="block">
            <button className="share">자료공유 게시판</button>
            <Cwrite />
        </section>
    );
};
const Cwrite = () => {
    return (
        <section>
            <button className="newstudy">
                <Link to="/setboard_share">글 작성하기</Link></button>
        </section>
    );
};
const columns = [
    {
        title: <div className="studyname">스터디 명</div>,
        dataIndex: "title",
        key: "key",
        render: (text, { key }) => <Link to={`/detailshare/${key}`} state={{ key: key }}>{text}</Link>
    },

    {
        title: <div className="user">작성자</div>,
        dataIndex: "name",
        key: <div>"address"</div>
    }
];


const data = [
    {
        key: "1",
        title: "자료 공유 게시판 글1",
        name: "송송"
    },
    {
        key: "2",
        title: "자료 공유 게시판 글2",
        name: "나송"
    },
    {
        key: "3",
        title: "자료 공유 게시판 글3",
        name: "마송"
    },
];

const Share = () => (
    <>
        <GlobalStyle />
        <Logo />
        <Shareblock />
        <section className="table">
            <Table columns={columns} dataSource={data} />;
        </section>
    </>
);

export default Share;
