import axios from "axios";
import "../css/private.css";
import GlobalStyle from "./components/GlobalStyle";
import React, { useState } from "react";
import { Table } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";
import Logo from "./components/Logo.js";
import "../fonts/Font.css";
import plus from "../images/plus.png";

const PlusImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right:15px;
    &:hover {
        width: 27px;
        height: 27px;
    }
`;

const Piein = (props) => {
    return <h1 className="ptitle">{props.children}</h1>;
};

const spcolumns = [
    {
        title: "이름",
        dataIndex: "name",
        key: "name",
        width: 50,
    },
    {
        title: "글",
        dataIndex: "post",
        key: "post",
        width: 80,
    },
    {
        title: "댓글",
        dataIndex: "comment",
        key: "comment",
        width: 80,
    },
];

const Private = () => {
    const { key } = useParams();
    const [spdata, setSpdata] = React.useState([]);
    const [piedata, setPiedata] = React.useState([]);
    const [memberInfo, setMememberInfo] = useState([]);
    const [schedule, setSchedule] = useState(["[8/22] 1주차 과제 제출하기"]);
    const location = useLocation().key;
    //멤버정보
    React.useEffect(() => {
        axios.get(`studyMember?studyBoardId=${key}`).then((response) => {
            setMememberInfo(response.data);
        });
        axios.get(`https://sooksook.herokuapp.com/studySchedules/all?studyBoardId=${key}`).then((response) => {
            setSchedule(response.data);
        });
    }, []);

    //참여율 데이터
    for (let i = 0; i < memberInfo.length; i++) {
        if (
            spdata.some((element) => element.userId === memberInfo[i].id) ===
            false
        ) {
            let temp = spdata.concat({
                userId: memberInfo[i].id,
                name: memberInfo[i].nickname,
                post: memberInfo[i].posts,
                comment: memberInfo[i].comments,
            });
            setSpdata(temp);
            let pieTemp = piedata.concat({
                title: memberInfo[i].nickname,
                value: memberInfo[i].posts + memberInfo[i].comments,
                color: "#" + (0xbfbfaf + i * 16)
            })
            setPiedata(pieTemp);
        }
    }
    //게시글
    const getId = async () => {
        const response = await axios.get(
            "https://sooksook.herokuapp.com/studyPosts/category?category=%EA%B0%95%EC%9D%98%20%EC%8A%A4%ED%84%B0%EB%94%94%20%EA%B2%8C%EC%8B%9C%EA%B8%80"
        );
        setId(() => response.data);
    };

    const getData = () => {
        (id || []).reduce((prev, cur) => {
            return prev.then(async () => {
                await axios
                    .get(
                        `https://sooksook.herokuapp.com/studyPost/info?id=${cur}`
                    )
                    .then((res) => {
                        setData((prev) => [...prev, res.data]);
                    });
            });
        }, Promise.resolve());
    };
    const { state } = useLocation();
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    React.useEffect(() => {
        getId();

        console.log(location);
    }, [location]);

    React.useEffect(() => {
        getData();
    }, [id]);
    const columns = [
        {
            title: <div className="studyname">게시글</div>,
            dataIndex: "title",
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/detailboard/${id[index]}`}
                    state={{ boardId: id[index] }}
                >
                    {text}
                </Link>
            ),
        },

        {
            title: <div>작성자</div>,
            dataIndex: "nickname",
            key: "nickname",
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                fontFamily: "DoHyeon",
                overflowX: "hidden",
                overflowY: "hidden",
            }}
        >
            <GlobalStyle />
            <Logo />
            <section
                className="block"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <div>
                    <button className="upcome">다가오는 스터디 일정</button>
                    <button className="qrbutton" style={{ marginRight: "0px" }}>
                        {schedule}
                    </button>

                </div>
                <div>
                    <PlusImg src={plus}></PlusImg>
                    <button className="prbutton">
                        <Link to="/membergrade">스터디 종료</Link>
                    </button>
                    <button className="prbutton">
                        <Link to="/setboard_private" state={{ boardId: key }}>
                            글 작성하기
                        </Link>
                    </button>
                </div>
            </section>
            <section className="chart">
                <Piein>스터디 참여율</Piein>
                <div className="hp">
                    <Table
                        className="spchart"
                        columns={spcolumns}
                        dataSource={spdata}
                        pagination={false}
                    />
                    <div className="pie" style={{ fontSize: "10px" }}>
                        <PieChart
                            data={piedata}
                            label={({ dataEntry }) => dataEntry.title}
                        />
                    </div>
                </div>
            </section>
            <section style={{ width: "100%" }}>
                <Table columns={columns} dataSource={data} />
            </section>
        </div>
    );
};

export default Private;
