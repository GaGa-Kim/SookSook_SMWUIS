import "../css/share.css";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import Logo from "./components/Logo.js";

const Shareblock = () => {
    return (
        <section className="block">
            <button className="share">판매/나눔 게시판</button>
            <Cwrite />
        </section>
    );
};

const Cwrite = () => {
    return (
        <section>
            <button className="newstudy" style={{ marginLeft: "0px" }}>
                <Link to="/setboard_sell">글 작성하기</Link></button>
        </section>
    );
};

const Sell = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=%ED%8C%90%EB%A7%A4%2F%EB%82%98%EB%88%94%20%EA%B2%8C%EC%8B%9C%EA%B8%80")
            .then((response) => {
                setId(response.data);
            });

        for (let i = 0; i < id.length; i++) {
            axios.get(`http://localhost:8080/studyPost/info?id=${id[i]}`)
                .then((response) => {
                    if (data.some((element) => element.id === id[i]) === false) {
                        const temp = data.concat(response.data);
                        setData(temp);
                    }
                });
        }
    }, [id]);
    data.sort((a, b) => {
        return a.id - b.id;
    });


    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/detailsell/${id[index]}`}
                    state={{ boardId: id[index] }}
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
        <>
            <GlobalStyle />
            <Logo />
            <Shareblock />
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </>
    )
};

export default Sell;
