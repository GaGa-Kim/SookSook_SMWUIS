import { Input } from 'antd';
const { TextArea } = Input;

const InputArea=(item)=>{
    return(
    <TextArea rows={4} placeholder={item.area}/>
    );
}

export default InputArea;