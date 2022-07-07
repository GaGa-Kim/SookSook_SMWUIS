import styled from "styled-components";
const Box=styled.div`
  width:100%;
  height:300px;
  background-color:#C1DAFF;
`;
function BigBox({children}){
    return(
        <Box>{children}</Box>
    );
}
export default BigBox;