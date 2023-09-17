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
        <a href={project.monit} className="btn sm" target="_blank" rel="noopner noreferrer">
          Monit
        </a>
        <a href={project.stake} className="btn sm primary" target="_blank" rel="noopner noreferrer">
          Stake
        </a>
      </div>
    </Card>
  );
};

export default Project;
