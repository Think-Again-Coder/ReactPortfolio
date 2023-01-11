import './index.scss';

import ProjectImage from "../../../Assets/Images"; 

const ProjectsPage = () => {
  return (
    <div>
      <h1>My Developer Projects:</h1>
      <ProjectImage src="project1.png" class="Project 1" />
      <ProjectImage src="project2.png" class="Project 2" />
      <ProjectImage src="project3.png" class="Project 3" />
      <ProjectImage src="project4.png" class="Project 4" />
      <ProjectImage src="project5.png" class="Project 5" />
      <ProjectImage src="project6.png" class="Project 6" />
    </div>
  );
};

export default ProjectsPage;