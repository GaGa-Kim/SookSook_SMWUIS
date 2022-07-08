import styled from "styled-components";
import "../../fonts/Font.css";
const Box=styled.div`
  width:100%;
  height:300px;
  background-color:#C1DAFF;
  position:relative;
  font-family:"Dohyeon";
`;
function BigBox({children}){
    return(
        <Box>{children}</Box>
    );
}
export default BigBox;