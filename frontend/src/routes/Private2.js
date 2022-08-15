import axios from "axios";
import "../css/private.css";
import GlobalStyle from "./components/GlobalStyle";
import React, { useState } from "react";
import { Table } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import { PieChart } from "react-minimal-pie-chart";
import Logo from "./components/Logo.js";
import "../fonts/Font.css";

const Block = () => {
    const { key } = useParams();

    return (
        <section
            className="block"
            style={{ display: "flex", justifyContent: "space-between" }}
        >
            <div>
                <button className="upcome">스터디 비밀게시판</button>
            </div>
            <div>
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
    );
};

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

const Private2 = () => {
    const { key } = useParams();
    const [spdata, setSpdata] = React.useState([]);
    const [piedata, setPiedata] = React.useState([]);
    const [memberInfo, setMememberInfo] = useState([]);
    const location = useLocation().key;
    //멤버정보
    React.useEffect(() => {
        axios.get(`/studyMember?studyBoardId=${key}`).then((response) => {
            setMememberInfo(response.data);
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
                color: "#" + (0xbfbfaf + i * 16),
            });
            setPiedata(pieTemp);
        }
    }
    //게시글
    const getId = async () => {
        const response = await axios.get(
            "https://sooksook.herokuapp.com/studyPosts/category?category=%EA%B0%95%EC%9D%98%20%EC%99%B8%20%EC%8A%A4%ED%84%B0%EB%94%94%20%EA%B2%8C%EC%8B%9C%EA%B8%80"
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
                    to={`/detailboard2/${id[index]}`}
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
            <Block />
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

export default Private2;
