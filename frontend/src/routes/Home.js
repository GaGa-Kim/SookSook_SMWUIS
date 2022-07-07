import styled from "styled-components";
import GlobalStyle from './components/GlobalStyle';
import Root from './components/Root';
import BigBox from './components/BigBox';
import "../fonts/Font.css";
import TitleImg from "../images/title.png";
import study from "../images/study.png";
import study2 from "../images/study2.png";
import sale from "../images/sale.png";
import quest from "../images/quest.png";
import share from "../images/share.png";

const Title=styled.div`
display:flex;
justify-content:center;
margin-top:${(props)=>props.mgTop};
font-size:${(props)=>props.ftSize};
color:#ffffff;
font-family:"Cafe24";
`;
const Img=styled.img`
    width:40px;
    height:40px;
`;
const MenuBox=styled.ul`
    display:flex;
    justify-content:center;
    width:100%;
    heigth:200px;
    margin-top:50px;
   
    
`;
const MenuBoxChild=styled.li`
    display:flex;
    flex-direction:column;
    margin-left:50px;
    margin-right:50px;
    flex-basis:80px;
   
`;
const MenuImg=styled.img`
    width:50px;
    height:50px;
    text-align:center;
    display:block;
    margin:auto;
    
`;
const MenuText=styled.div`
    font-size:15px;
    color:#2558B5;
    margin-top:5px;
    text-align:center;
     font-family:"DoHyeon";
`;
const StudyBox=styled.div`
    display:flex;
    justify-content:center;
    width:auto;
    height:260px;
    margin:40px 20px 40px 20px;
    background-color:#e8eef4;
    border-radius:60px;
`;
const StudyBoxChild=styled.div`
    display:flex;
    flex-direction:column;
    margin:60px 70px 60px;
    justify-content:center;
    align-items:center;
    font-family:"DoHyeon";
    color:#003a71;
    
`;
const StudyListTitle=styled.div`
    font-size:20px;
    text-align:center;
   
`;
const StudyListBox=styled.ul`
    margin-top:5px;
    text-align:left;
   
`;
const StudyList=styled.li`

    font-size:15px;
    text-align:left;
   
`;

function Home(){
    return(
    <Root>
         <GlobalStyle/>
        <BigBox>
            <Title mgTop="110px" ftSize="40px">숙명인들과 함께 쑥쑥 자라나는 공간<Img src={TitleImg}/></Title>
            <Title mgTop="15px" ftSize="20px">숙명인들과 함께 스터디로 자라나보세요</Title>
        </BigBox>
        <MenuBox>
            <MenuBoxChild>
                <MenuImg src={study}/>
                <MenuText>강의 스터디</MenuText>
            </MenuBoxChild>
            <MenuBoxChild>
                <MenuImg src={study2} />
                <MenuText>강의 외 스터디</MenuText>
            </MenuBoxChild>
            <MenuBoxChild>
                <MenuImg src={share}/>
                <MenuText>자료 공유</MenuText>
            </MenuBoxChild>
            <MenuBoxChild>
                <MenuImg src={sale}/>
                <MenuText>판매/나눔</MenuText>
            </MenuBoxChild>
            <MenuBoxChild>
                <MenuImg src={quest}/>
                <MenuText>질문</MenuText>
            </MenuBoxChild>
        </MenuBox>
        <StudyBox>
            <StudyBoxChild>
                <StudyListTitle>인기 스터디</StudyListTitle>
                <StudyListBox>
                    <StudyList>1위:웹 프로그래밍 기초</StudyList>
                </StudyListBox>
            </StudyBoxChild>
            <StudyBoxChild>
                <StudyListTitle>새로운 스터디 NEW!</StudyListTitle>
                <StudyListBox>
                    <StudyList>∘자료구조</StudyList>
                </StudyListBox>
            </StudyBoxChild>
            <StudyBoxChild>
                <StudyListTitle>참여도 높은 스터디</StudyListTitle>
                <StudyListBox>
                    <StudyList>1위:공예 감상</StudyList>
                </StudyListBox>
            </StudyBoxChild>
        </StudyBox>
    </Root>
    );
}
export default Home;