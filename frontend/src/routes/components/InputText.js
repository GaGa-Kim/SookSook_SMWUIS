import styled from "styled-components";
import { Input } from "antd";


const InputText = (item) => {
    return (
  
            <Input placeholder={item.text} style={{"background-color":item.bg, "border-radius":"70px"}}/>
     
    );
}
export default InputText;
