import "../css/board2.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy2 from "./components/Cstudy2.js";
import Drop2 from "./components/Drop2.js";
import Root from './components/Root';
import axios from "axios";

const Board2 = () => {
    const [data, setData] = useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/list?lecture=false")
            .then((response) => {
                setData(response.data);
            });
    }, []);



    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/enterboard2/${data[index].id}`}
                    state={{ boardId: data[index].id }}
                >
                    {text}
                </Link>
            ),
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
                <Drop2 />
                <Cstudy2 />
            </div>
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </Root>)
};

export default Board2;
