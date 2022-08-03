import "../css/board1.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Table } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy from "./components/Cstudy.js";
import Root from "./components/Root";
import axios from "axios";

const Select = styled.select`
    width: 140px;
    height: 32px;
    transition: 0.5s;
    border-color:#c1daff;
    font-size: 19.5px;
    background-color: transparent;
    white-space: nowrap;
    font-family: "DoHyeon";
    font-weight: bold;
`;

const Board1 = () => {
    const [data, setData] = useState("");
    const [setDpt] = React.useState("");

    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/list?lecture=true")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const onChangeDpt = (dpt) => {
        setDpt(dpt.target.value);

    };
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/department?department=${dpt}")
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
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/enterboard/${data[index].id}`}
                    state={{ boardId: data[index].id }}
                >
                    {text}
                </Link>
            ),
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "nickname",
            key: "nickname",
        },
    ];

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <div className="block">
                <Select onChange={onChangeDpt}>
                    <option value="문과대학">문과대학</option>
                    <option value="이과대학">이과대학</option>
                    <option>공과대학</option>
                    <option>생활과학대학</option>
                    <option>법과대학</option>
                    <option>경상대학</option>
                    <option>음악대학</option>
                    <option>약학대학</option>
                    <option>미술대학</option>
                    <option>기초교양대학</option>
                    <option>글로벌서비스학부</option>
                    <option>영어영문학부</option>
                    <option>미디어학부</option>
                </Select>
                <Cstudy />
            </div>
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </Root>
    );
};

export default Board1;
