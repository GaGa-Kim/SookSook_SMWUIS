import "../../css/board1.css";
import { Link } from 'react-router-dom';

const Cstudy = () => {
    return (
        <section>
            <button className="newstudy">
                <Link to="/openstudy">스터디 개설</Link></button>
        </section>
    );
};

export default Cstudy;
