import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import informal from "../images/informal.jpg"


import *  as motion from "motion/react-client"
import { useState } from "react";

const firstName = "Sergio Rodrigo"
const lastName = "Cárdenas Rivera"

const icosSize = "1.5em";

const Main = () =>{  
  
  const socialNetworks = [
    {
      label : "LinkedIn",
      link: "https://www.linkedin.com/in/srodrigo23/",
      icon: <FaLinkedin size={icosSize}/>
    },{
      label : "GitHub",
      link: "https://github.com/srodrigo23",
      icon: <FaGithub size={icosSize}/>
    }, {
      label : "Instagram",
      link: "https://www.instagram.com/srodrigo23/",
      icon: <FaInstagram size={icosSize}/>
    },
    {
      label : "Facebook",
      link: "https://www.facebook.com/sergiorodrigoc/",
      icon: <FaFacebook size={icosSize}/>
    }
  ];
  const presentation = "Hi, I’m a passionate and dedicated Junior Developer with a solid foundation in web, mobile development and programming. I bring a blend of technical skills, creativity, and problem-solving abilities to any team. Eager to apply my coding expertise and collaborative spirit. I am committed to continuous learning and growth within the tech industry.";

  const additionalDescription = "My hands-on experience with modern programming languages, frameworks, and tools has equipped me with the knowledge to contribute effectively to dynamic projects.";
  
  const [downloadStatus, setDownloadStatus] = useState("");

  // const downloadCV = async ()=>{
  //   try {
      
  //     const response = await axios.get("/api/download", {
  //       responseType: "blob", // Important for binary data
  //     });

  //     // Extract filename from content-disposition header
  //     const contentDisposition = response.headers["content-disposition"];
  //     const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
  //     const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

  //     // Create a temporary anchor element to trigger the download
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     // Setting filename received in response
  //     link.setAttribute("download", fileName);
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  //     setDownloadStatus("Downloaded");
  //   } catch (error) {
  //       console.error("Error downloading file:", error);
  //       setDownloadStatus("Error downloading");
  //   }
  // }
  // flex justify-center items-center
  return(
    <>
      <div className="h-screen flex justify-center items-center">

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center bg-gray-700 p-10 rounded-lg shadow-lg hover:bg-black hover:transition-shadow duration-300"
          
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-2/5 mb-4 md:mr-5 lg:mb-5 justify-center items-center">
            <Image 
              src={informal}
              alt="Profile Picture"
              // width={240}
              className="rounded-full w-64 object-cover shadow-lg"
            />
          </div>
          <div className="w-3/5">
            <div className="font-bold text-white text-center md:text-left">
              <p className="text-4xl md:text-6xl">{firstName}</p>
              {/* <p className="text-3xl">{secondName}</p> */}
              <p className="text-2xl md:text-5xl">{lastName}</p>

              <div>
                <ul className="flex text-white mt-5">
                  {
                    socialNetworks.map((sn, i)=>(
                      <li key={i} className="p-2 hover:shadow-lg">
                        <Link href={sn.link} target="_blank">{sn.icon}</Link>
                      </li>))
                  }
                </ul>
            </div>
            </div>
            
          </div>
          {/* <p className="text-sm pl-20 pr-20 pt-10 pb-10 italic">
            {presentation}
          </p> */}

          {/* <div className="flex justify-center"> */}
            {/* <button 
              className="pl-4 pr-4 pt-3 pb-3 rounded-lg bg-red-600 shadow-lg hover:bg-red-700 flex text-white font-bold text-sm"
              onClick={downloadCV}
            > <DownloadIcon/>  Download CV</button> */}
          {/* </div>  */}
        </motion.div>
      </div>
    </>
  )
};

export default Main;