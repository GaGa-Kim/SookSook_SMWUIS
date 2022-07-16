import "antd/dist/antd.css";
import "./board2.css";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
    <Menu
        selectable
        defaultSelectedKeys={["3"]}
        items={[
            { key: "1", label: "토익/토플" },
            { key: "2", label: "면접" },
            { key: "3", label: "자소서" },
            { key: "4", label: "코딩" },
            { key: "5", label: "어학자격증" },
            { key: "6", label: "LEET" },
            { key: "7", label: "공무원시험" },
            { key: "8", label: "해외유학" },
            { key: "9", label: "취미언어" },
            { key: "10", label: "전문자격증" }
        ]}
    />
);

const Drop2 = () => {
    return (
        <Dropdown overlay={menu}>
            <Space className="dropdown">
                카테고리
                <DownOutlined />
            </Space>
        </Dropdown>
    );
};

export default Drop2;
