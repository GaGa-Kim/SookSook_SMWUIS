import "./board1.css";
import React from "react";
import addpage from "./addpage.png";
import { Table, Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import Logo from "./Logo.js";

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
        name: "웹프로그래밍 기초",
        address: "송송"
    },
    {
        key: "2",
        name: "데이터사이언스 개론",
        address: "나송"
    },
    {
        key: "3",
        name: "운영체제",
        address: "마송"
    },
    {
        key: "4",
        name: "객체지향프로그래밍",
        address: "라송"
    },
    {
        key: "5",
        name: "빅데이터 활용 입문",
        address: "바송"
    },
    {
        key: "6",
        name: "선형대수학",
        address: "아송"
    },
    {
        key: "7",
        name: "인공지능과기계학습",
        address: "자송"
    }
];

const Add = () => {
    return <img className="add" src={addpage} alt="addpage" />;
};

const App = () => (
    <>
        <Logo />
        <div className="block" style={{ display: "flex" }}>
            <Dropdown overlay={menu}>
                <Space className="dropdown">
                    학부
                    <DownOutlined />
                </Space>
            </Dropdown>
            <Block />
        </div>
        <section>
            <Table columns={columns} dataSource={data} />;
            <Add />
        </section>
    </>
);

export default App;
