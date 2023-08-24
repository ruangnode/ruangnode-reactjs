import Card from '../../components/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project Image" />
      </div>
      <h4>{project.title}</h4>
      <p>Staked Token : {project.total}</p>
      <div className="portfolio__project-cta">
        <a href={project.health} className="btn sm" target="_blank" rel="noopner noreferrer">
          Health Check
        </a>
        <a href={project.explorer} className="btn sm primary" target="_blank" rel="noopner noreferrer">
          Explorer
        </a>
      </div>
    </Card>
  );
};

export default Project;