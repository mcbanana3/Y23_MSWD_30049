import React from "react";

const FeedBack = ({ data }) => {
    return (
        <div>
            <h2>Feedback Summary</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Faculty</th>
                        <th>Communication Skills</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.courseName}</td>
                            <td>{item.fName}</td>
                            <td>{item.cSkills}</td>
                            <td>{item.remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedBack;