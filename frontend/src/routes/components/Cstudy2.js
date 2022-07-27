import "../../css/board1.css";
import { Link } from 'react-router-dom';

const Cstudy2 = () => {
    return (
        <section>
            <button className="newstudy">
                <Link to="/openstudy2">스터디 개설</Link></button>
        </section>
    );
};

export default Cstudy2;
