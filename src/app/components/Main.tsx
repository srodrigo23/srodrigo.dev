import Link from "next/link";

import InstagramIcon from "../icons/Instagram";
import GitHubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";

const Main = () =>{

  const name = "Sergio Rodrigo"
  const lastName = "Cárdenas Rivera"
  const icosWidth = "30"
  const socialNetworks = [
    {
      label : "LinkedIn",
      link: "https://www.linkedin.com/in/srodrigo23/",
      icon: <LinkedInIcon width={icosWidth}/>
    },{
      label : "GitHub",
      link: "https://github.com/srodrigo23",
      icon: <GitHubIcon width={icosWidth}/>
    }, {
      label : "Instagram",
      link: "https://www.instagram.com/srodrigo23/",
      icon: <InstagramIcon width={icosWidth}/>
    }
  ];
  const presentation = "Hi, I’m a passionate and dedicated Junior Developer with a solid foundation in web development and programming. I bring a blend of technical skills, creativity, and problem-solving abilities to any team. Eager to apply my coding expertise and collaborative spirit. I am committed to continuous learning and growth within the tech industry.";

  const additionalDescription = "My hands-on experience with modern programming languages, frameworks, and tools has equipped me with the knowledge to contribute effectively to dynamic projects.";

  return(
    <>
      <div className="container mx-auto flex justify-center">
        <div className="w-3/5">
          <div>
            <p className="font-bold text-6xl text-center">{name}</p>
            <p className="font-bold text-4xl text-center">{lastName}</p>
          </div>
          <div>
            <ul className="flex justify-center">
              {
                socialNetworks.map((sn)=>(<li className="p-1"><Link href={sn.link} target="_blank">{sn.icon}</Link></li>))
              }
            </ul>
          </div>
          
          <p className="text-sm p-10 italic">
            {presentation}
          </p>

          <div className="text-center">
            <button>Projects</button>
          </div>
        </div>
        
        
      </div>
    </>
  )
};

export default Main;