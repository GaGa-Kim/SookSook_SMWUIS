import "antd/dist/antd.css";
import "../../css/board1.css";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
    <Menu
        selectable
        defaultSelectedKeys={["3"]}
        items={[
            { key: "1", label: "문과대학" },
            { key: "2", label: "이과대학" },
            { key: "3", label: "공과대학" },
            { key: "4", label: "생활과학대학" },
            { key: "5", label: "사회과학대학" },
            { key: "6", label: "법과대학" },
            { key: "7", label: "경상대학" },
            { key: "8", label: "음악대학" },
            { key: "9", label: "약학대학" },
            { key: "10", label: "미술대학" },
            { key: "11", label: "기초교양대학" },
            { key: "12", label: "글로벌서비스학부" },
            { key: "13", label: "영어영문학부" },
            { key: "14", label: "미디어학부" }
        ]}
    />
);

const Drop1 = () => {
    return (
        <Dropdown overlay={menu}>
            <Space className="dropdown1">
                학부
                <DownOutlined />
            </Space>
        </Dropdown>
    );
};

export default Drop1;
