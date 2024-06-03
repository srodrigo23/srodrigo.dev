import CardProject from "./CardProject"

const ProjectsGallery = () => {

  const techIcons = {
    'js': '',
    'java': '',
    'python':'',
    'tailwind':'',
    'ts':'',
    'android':''
  }

  const projects = [
    {
      id: 1,
      title : "Media Box Player",
      shortDescription : "Media Player Mobile application for stream media content",
      largeDescription : 'Mobile Application for media stream from Dropbox account. It can stream Audio, Video and image, delete and share with DropBox API',
      image : "",
      techStack:['android', 'java'],
      repoLink : ''
    },
    {
      id: 2,
      title : "Video Smart Surveillance System",
      shortDescription : "Survellance System to detect fire, human silhuete, and smoke",
      largeDescription : "Smart video surveilance system to send and alert through whatsapp message and email when detects human siluete, fire and smoke.",
      techStack:['python'],
      repoLink: ''
    }
  ]

  return(
    <div className="h-screen flex justify-center align-middle p-6">
      <div className={`grid grid-cols-${ projects.length === 2?'3':'3'} grid-rows-2 gap-4 w-4/5`}>
        {
          projects.map((project)=>( 
            <CardProject
              key={project.id}
              title={project.title}
              shortDescription={project.shortDescription}
              largeDescription={project.largeDescription}
              techstack={project.techStack}
              repolink={project.repoLink}
            />))
        }
      </div>
    </div>
  )
}

export default ProjectsGallery;

