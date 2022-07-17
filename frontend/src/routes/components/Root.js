import styled from "styled-components";
const Box=styled.div`
  display:flex;
  flex-direction:column;
`;
function Root({children,...rest}){
    return(
    <Box {...rest}>{children}</Box>
    );
}
export default Root;