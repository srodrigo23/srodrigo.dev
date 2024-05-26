import Link from "next/link";

const Navbar = ()=>{
  // const routes = [
  //   {
  //     label:'Projects', 
  //     route:'/projects'
  //   }, {
  //     label:'Experience', 
  //     route:'/experience'
  //   }, {
  //     label:'Involvementes', 
  //     route:'/involvementes'
  //   }
  // ];
  return(

    <div>
      <div className="flex flex-row-reverse m-6">
        <button className="pl-6 pr-6 pt-3 pb-3 rounded-lg bg-cyan-400 shadow-md hover:bg-cyan-500">Contact Me!</button>
      </div>
    </div>
    
    // <nav className="" role="navigation" aria-label="main navigation">
    //   <div className="flex">
    //     <Link className="text-xl" href={'/'}> <span className="">Sergio Rodrigo </span></Link>
    //   </div>
    //   <div className="flex items-stretch">
    //     <ul className="">
    //       {
    //         // routes.map((route)=><li><Link href={route.route}>{route.label}</Link></li>)
    //       }
    //     </ul>
    //     <button>Contact Me!</button>
    //   </div>
    // </nav>
  )
}

export default Navbar;