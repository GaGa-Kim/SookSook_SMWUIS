import "../../css/board1.css";
import addpage from "../../images/addpage.png";
import { NavLink } from "react-router-dom";

const Addpage = () => {
    return (
        <NavLink to="/openstudy">
            <img className="add" src={addpage} alt="addpage" />;</NavLink>)
};

export default Addpage;