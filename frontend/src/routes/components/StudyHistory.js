import styled from "styled-components";
import List from "./List";
import ListText from "./ListText";
import Badge from "./Badge";
import star from "../../images/star.png";

const StarImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`;

const StudyHistory = () => {
    const RandomColor = () => {
        return "#" + Math.round(Math.random() * 0xffffff).toString(16);
    };
    const studyHistoryList = [
        { name: "IT기기구조", progress: false, badge: <></>, star: null },
        {
            name: "웹 프로그래밍 기초",
            progress: true,
            badge: <Badge></Badge>,
            star: 4.7,
        },
    ];
    return studyHistoryList.map((history, index) => {
        if (history.progress === false) {
            return(
            <List key={index}>
                <ListText  style={{flexShrink:1}}>{history.name}</ListText>
                <ListText>진행중</ListText>
            </List>
            );
        } else {
            return(
            <List key={index}>
                <ListText  style={{flexBasis:"600px" ,flexShrink:0}}>
                    {history.name}
                    <Badge rnd={RandomColor} mgLeft="50px">
                        과제 제출이 빨라요
                    </Badge>
                    <Badge rnd={RandomColor} mgLeft="50px">
                        성실해요
                    </Badge>
                </ListText>
                <ListText>
                    <StarImg src={star} />
                    {history.star}/5
                </ListText>
            </List>
            );
        }
    }
    );
};


export default StudyHistory;