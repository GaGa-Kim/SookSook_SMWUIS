import "../css/private.css";
import GlobalStyle from "./components/GlobalStyle";
import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { PieChart } from "react-minimal-pie-chart";
import Logo from "./components/Logo.js";
import "../fonts/Font.css";

const Block = () => {
    return (
        <section>
            <button className="upcome">다가오는 스터디 일정</button>
            <button className="qrbutton">[7/21] 3주차 과제 제출</button>
            <button className="prbutton">
                <Link to="/mypage">스터디 종료</Link>
            </button>
            <button className="prbutton">
                <Link to="/setboard_private">글 작성하기</Link>
            </button>
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

const member = ["가송", "나송", "다송"];
const Private = () => {
    const data = [
        { key: 1, title: "스터디 규칙", name: "가송" },
        { key: 2, title: "과제제출", name: "나송" },
    ]; /*데이터받아오기*/
    const columns = [
        {
            title: <div className="studyname">게시글</div>,
            dataIndex: "title",
            key: "key",
            render: (text, { key }) => <Link to={`/detailboard/${key}`} state={{ key: key }}>{text}</Link>,
        },

        {
            title: <div>작성자</div>,
            dataIndex: "name",
            key: <div>"name"</div>,
        },
    ];
    const [spdata, setSpdata] = React.useState([]);
    const [piedata, setPiedata] = React.useState([]);

    let post = 0;
    let comment = 0;
    React.useEffect(() => {
        let initialSpdata = [];
        let initialPiedata = [];
        for (let i = 0; i < member.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (member[i] === data[j].name) {
                    post++;
                }
            }
            initialSpdata.push({
                key: i,
                name: member[i],
                post: post,
                comment: comment,
            });
            if (data.length !== 0 && (post + comment) !== 0) {

                initialPiedata.push({

                    title: member[i],
                    value: post + comment,
                    color: "#" + (0xbfbfaf + i * 16),
                });
            }
            post = 0;
        }
        setPiedata(initialPiedata);
        setSpdata(initialSpdata);
    }, [data]);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                fontFamily: "DoHyeon",
            }}
        >
            <GlobalStyle />
            <Logo />
            <section className="block">
                <Block />
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
