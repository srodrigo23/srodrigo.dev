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
  const mail = 'rodrigosergio93@gmail.com'
  return(

    <div className="bg-black">
      <div className="flex flex-row-reverse p-6 items-center">
        
        <a className="pl-6 pr-6 pt-3 pb-3 rounded-lg bg-cyan-400 shadow-md hover:bg-cyan-500" href={`mailto:${mail}`}>Contact Me!</a>
        <ul>
          <li className="mr-6 text-white"><Link href="#projects">Projects</Link></li>
        </ul>
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