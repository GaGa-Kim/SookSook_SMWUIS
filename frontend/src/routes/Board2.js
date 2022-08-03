import "../css/board2.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy2 from "./components/Cstudy2.js";
import Root from './components/Root';
import axios from "axios";

const Select = styled.select`
    width: 100px;
    height: 32px;
    transition: 0.5s;
    border-color:#c1daff;
    font-size: 19.5px;
    background-color: transparent;
    white-space: nowrap;
    font-family: "DoHyeon";
    font-weight: bold;
`;

const Board2 = () => {
    const [data, setData] = useState("");
    const [setCategory] = React.useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/list?lecture=false")
            .then((response) => {
                setData(response.data);
            });
    }, []);
    const onChangeCategory = (category) => {
        setCategory(category.target.value);

    };
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyBoards/category?category=${category}")
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
                <Select onChange={onChangeCategory}>
                    <option>토익/토플</option>
                    <option>면접</option>
                    <option>자소서</option>
                    <option>코딩</option>
                    <option>어학자격증</option>
                    <option>LEET</option>
                    <option>공무원시험</option>
                    <option>해외유학</option>
                    <option>취미언어</option>
                    <option>전문자격증</option>
                </Select>
                <Cstudy2 />
            </div>
            <section className="table">
                <Table columns={columns} dataSource={data} />
            </section>
        </Root>)
};

export default Board2;
