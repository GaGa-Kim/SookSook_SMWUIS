import "./styles.css";
import React from "react";
import logo from "./logo.png";
import addpage from "./addpage.png";
import { Input, Table, Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";

const Logo = () => {
    return (
        <section className="logo" style={{ display: "flex" }}>
            <img src={logo} alt="logo" />
            <div className="search">
                <Search onSearch={onSearch} enterButton />
            </div>
            <div className="customer" style={{ display: "flex" }}>
                <Top>로그아웃</Top>
                <Top>고객센터</Top>
            </div>
        </section>
    );
};

const Top = (props) => {
    return <h2 className="topright">{props.children}</h2>;
};

const Block = () => {
    return (
        <section>
            <button className="newstudy">스터디 개설</button>
        </section>
    );
};
const columns = [
    {
        title: <div className="studyname">스터디 명</div>,
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>
    },

    {
        title: <div>작성자</div>,
        dataIndex: "address",
        key: <div>"address"</div>
    }
];
const menu = (
    <Menu
        selectable
        defaultSelectedKeys={["3"]}
        items={[
            { key: "1", label: "경영학부" },
            { key: "2", label: "IT공학전공" },
            { key: "3", label: "컴퓨터과학전공" },
            { key: "4", label: "경제학과" },
            { key: "5", label: "법학부" },
            { key: "6", label: "소프트웨어융합전공" },
            { key: "7", label: "기초공학부" },
            { key: "8", label: "화공생명공학부" }
        ]}
    />
);
const data = [
    {
        key: "1",
        name: "토익 800점 달성",
        address: "송송"
    },
    {
        key: "2",
        name: "토익 900점 달성",
        address: "나송"
    },
    {
        key: "3",
        name: "토익스피킹 레벨8",
        address: "마송"
    },
    {
        key: "4",
        name: "정보처리기사 자격증",
        address: "라송"
    },
    {
        key: "5",
        name: "중국어 회화 입문",
        address: "바송"
    },
    {
        key: "6",
        name: "자소서 첨삭 스터디",
        address: "아송"
    },
    {
        key: "7",
        name: "면접 준비 스터디",
        address: "자송"
    },
    {
        key: "8",
        name: "중국어 중급 회화",
        address: "차송"
    },
    {
        key: "9",
        name: "교환학생 준비 스터디",
        address: "카송"
    },
    {
        key: "10",
        name: "리액트 프로그래밍 스터디",
        address: "타송"
    },
    {
        key: "11",
        name: "자바스크립트 스터디",
        address: "파송"
    },
    {
        key: "12",
        name: "크롤링 스터디",
        address: "하송"
    }
];

const onSearch = (value) => console.log(value);
const { Search } = Input;

const Add = () => {
    return <img className="add" src={addpage} alt="addpage" />;
};

const App = () => (
    <>
        <Logo />
        <div className="block" style={{ display: "flex" }}>
            <Dropdown overlay={menu}>
                <Space className="dropdown">
                    카테고리
                    <DownOutlined />
                </Space>
            </Dropdown>
            <Block />
        </div>
        <div>
            <Table columns={columns} dataSource={data} />;
            <Add />
        </div>
    </>
);

export default App;
