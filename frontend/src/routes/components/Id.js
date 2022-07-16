import "antd/dist/antd.css";
import { Form, Input } from "antd";

const Id = () => {
    return (
        <Form.Item
            name="Username"
            label="ID"
            rules={[{ required: true, message: "아이디를 입력해 주세요" }]}
        >
            <Input />
        </Form.Item>
    );
};

export default Id;