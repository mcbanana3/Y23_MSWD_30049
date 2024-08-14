import React, { useState } from "react";
import FeedBackForm from "./FeedbackForm.js";
import FeedBack from "./FeedBack.js";
import ResponsiveAppBar from "./ResponsiveAppBar.js";

const App = () => {
    <ResponsiveAppBar />

    const [data, setData] = useState([]);

    const addFeedback = (newFeedback) => {
        setData([...data, newFeedback]);
    };

    return (
        <div>
            <FeedBackForm addFeedback={addFeedback}/>
            <FeedBack data={data} />
        </div>
    );
};

export default App;