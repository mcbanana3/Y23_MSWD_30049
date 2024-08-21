import React, { useState } from 'react';

const Schedule = () => {
  const [filterText, setFilterText] = useState('');
  const [data, setData] = useState([
    { Day: 'Monday', Hours: '1-2', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Tuesday', Hours: '5-6', Course: 'AOOP', Room: 'C117', LTPS: 'S' },
    { Day: 'Wednesday', Hours: '3-4', Course: 'Linux', Room: 'C524', LTPS: 'L' },
    { Day: 'Thursday', Hours: '7-8', Course: 'AIML', Room: 'M108', LTPS: 'T' },
    { Day: 'Friday', Hours: '10-11', Course: 'SIL', Room: 'SAC', LTPS: 'S' },
    { Day: 'Saturday', Hours: '1-2', Course: 'DAA', Room: 'C011', LTPS: 'L' },
    // Add more data items as needed
  ]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by course"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {data
          .filter(item => item.Day.toLowerCase().includes(filterText.toLowerCase()))
          .map(filteredItem => (
            <li key={`${filteredItem.Day}-${filteredItem.Hours}`}>
              {filteredItem.Day} - {filteredItem.Hours} - {filteredItem.Course} - {filteredItem.Room} - {filteredItem.LTPS}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Schedule;
