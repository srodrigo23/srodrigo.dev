import Link from "next/link";

import InstagramIcon from "../icons/Instagram";
import GitHubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
import DownloadIcon from "../icons/Download";

import { useState } from "react";
import axios from "axios";

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
  const presentation = "Hi, I’m a passionate and dedicated Junior Developer with a solid foundation in web, mobile development and programming. I bring a blend of technical skills, creativity, and problem-solving abilities to any team. Eager to apply my coding expertise and collaborative spirit. I am committed to continuous learning and growth within the tech industry.";

  const additionalDescription = "My hands-on experience with modern programming languages, frameworks, and tools has equipped me with the knowledge to contribute effectively to dynamic projects.";
  
  const [downloadStatus, setDownloadStatus] = useState("");

  const downloadCV = async ()=>{
    try {
      
      const response = await axios.get("/api/download", {
        responseType: "blob", // Important for binary data
      });

      // Extract filename from content-disposition header
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      // Setting filename received in response
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Downloaded");
    } catch (error) {
        console.error("Error downloading file:", error);
        setDownloadStatus("Error downloading");
    }
  }
  // flex justify-center items-center
  return(
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-3/5">
          <div>
            <p className="font-bold text-6xl text-center">{name}</p>
            <p className="font-bold text-4xl text-center">{lastName}</p>
          </div>
          <div>
            <ul className="flex justify-center">
              {
                socialNetworks.map((sn, i)=>(<li key={i} className="p-1"><Link href={sn.link} target="_blank">{sn.icon}</Link></li>))
              }
            </ul>
          </div>
          
          <p className="text-sm pl-20 pr-20 pt-10 pb-10 italic">
            {presentation}
          </p>

          <div className="flex justify-center">
            <button 
              className="pl-4 pr-4 pt-3 pb-3 rounded-lg bg-red-600 shadow-lg hover:bg-red-700 flex text-white font-bold text-sm"
              onClick={downloadCV}
            > <DownloadIcon/>  Download CV</button>
          </div> 
        </div>
      </div>
    </>
  )
};

export default Main;