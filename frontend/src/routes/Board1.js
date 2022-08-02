import "../css/board1.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy from "./components/Cstudy.js";
import Drop1 from "./components/Drop1.js";
import Root from './components/Root';
import axios from "axios";

const Board1 = () => {
    const [setNickname] = useState("");
    const [setTitle] = useState("");
    const [data, setData] = useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/list?lecture=true")
            .then((response) => {
                setData(response.data)
                setNickname(response.data.nickname)
                setTitle(response.data.title)
            });
    }, []);
    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "key",
            render: (text, { key }) => <Link to={`/enterboard/${key}`} state={{ key: key }}>{text}</Link>
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "nickname",
            key: "key"
        }
    ];

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <div className="block">
                <Drop1 />
                <Cstudy />
            </div>
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </Root>
    )
};

export default Board1;
