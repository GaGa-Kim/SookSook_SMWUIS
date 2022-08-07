import "../css/share.css";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link,useNavigate } from 'react-router-dom';
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
            <button className="newstudy" style={{ marginLeft: "0px" }}>
                <Link to="/setboard_share">글 작성하기</Link></button>
        </section>
    );
};

const Share = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    const getData=async ()=>{
        for (let i = 0; i < id.length; i++) {
            axios.get(`http://localhost:8080/studyPost/info?id=${id[i]}`)
                .then((response) => {
                    if (data.some((element) => element.id === id[i]) === false) {
                        const temp = data.concat(response.data);
                        setData(temp);
                    }
                });
        }
    }
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=%EC%9E%90%EB%A3%8C%20%EA%B3%B5%EC%9C%A0%20%EA%B2%8C%EC%8B%9C%EA%B8%80")
            .then((response) => {
                setId(response.data);
            });
        getData();
        }, [getData]);
        
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
                    to={`/detailshare/${id[index]}`}
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

export default Share;


