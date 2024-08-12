import React, { useState } from "react";
import './FeedbackForm.css';

const FeedbackForm = ({ addFeedback }) => {
    const [courseName, setCName] = useState("");
    const [fName, setFName] = useState("");
    const [cSkills, setCSkills] = useState("Good");
    const [remarks, setRemarks] = useState("NA");

    const saveData = (e, setter) => {
        setter(e.target.value);
    };

    const submitFeedback = () => {
        const feedback = {
            courseName,
            fName,
            cSkills,
            remarks
        };

        addFeedback(feedback);

        setCName("");
        setFName("");
        setCSkills("Good");
        setRemarks("NA");
    };

    return (
        <div className="container">
            <h1>Feedback Form</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Course Name:</td>
                        <td><input type="text" value={courseName} onChange={(e) => saveData(e, setCName)} /></td>
                    </tr>
                    <tr>
                        <td>Faculty:</td>
                        <td><input type="text" value={fName} onChange={(e) => saveData(e, setFName)} /></td>
                    </tr>
                    <tr>
                        <td>Communication Skills:</td>
                        <td><input type="text" value={cSkills} onChange={(e) => saveData(e, setCSkills)} /></td>
                    </tr>
                    <tr>
                        <td>Remarks:</td>
                        <td><input type="text" value={remarks} onChange={(e) => saveData(e, setRemarks)} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={submitFeedback}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackForm;