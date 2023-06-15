import React, { useState } from "react";
import "./one-subject.scss";

const Subject = (props) => {
        const [activeState, setActiveState] = useState(false);
        return (<div>
        <button className="subject" onClick={() => setActiveState((activeState) => !activeState)}>
            <div className="text_container_subject">{props.subject_name}</div>
            <div className={`color_subject ${props.subject_type}`}></div>
        </button>
        <div className={`description ${activeState ? 'active_discription' : ''}`}>
            <div className="description_top">{props.title_subject}</div>
            <ul className="description_bottom">
                <li>{props.teatcher_name}</li>
                <li>{props.time_count}</li>
                <li>{props.author_courses}</li>
            </ul>
        </div>
    </div>
    );
};

export default Subject;