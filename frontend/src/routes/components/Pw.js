import "antd/dist/antd.css";
import { Form, Input } from "antd";

const Pw = () => {
    return (
        <Form.Item
            name="Password"
            label="PW"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
            <Input.Password />
        </Form.Item>
    );
};

export default Pw;