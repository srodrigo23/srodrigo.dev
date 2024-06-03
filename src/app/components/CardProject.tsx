import Link from "next/link";

interface ProjectData{
  title: string;
  shortDescription:string;
  largeDescription:string;
  techstack:string[];
  repolink:string;
}

const CardProject = (props:ProjectData) => {
  return(
    <div className="shadow-md p-4 hover:shadow-lg rounded-md">
      <span>{props.title}</span>

      <div>{props.shortDescription}</div>
      <div>{props.largeDescription}</div>
      <div> <Link href={props.repolink}></Link></div>
    </div>
  )
}

export default CardProject;