import React, { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

function Portfolio({ projectList }) {
  const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (event) => {
    const select = event.target.textContent;
    
    if (select === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(item => item.category === select)
      );
    }
    setSelected(select);
  }

  return (
    <div className='container'>
      <Toolbar 
        filters={filterButtonList}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='gallery'>
        <ProjectList projects={filteredListProjects} /> 
      </div>
    </div>
    );
}

export default Portfolio;