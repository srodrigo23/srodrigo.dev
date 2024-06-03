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
    <div>
      <span>{props.title}</span>

      <div>{props.shortDescription}</div>
      <div>{props.largeDescription}</div>
      <div> <Link href={props.repolink}></Link></div>
    </div>
  )
}

export default CardProject;