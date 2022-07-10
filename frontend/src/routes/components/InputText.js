import styled from "styled-components";
import { Input } from "antd";

const Box = styled.div`
    position: relative;
`;
const InputText = (item) => {
    return (
        <Input placeholder={item.text}/>
    );
}
export default InputText;
