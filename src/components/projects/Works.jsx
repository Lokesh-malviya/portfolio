import React,{useState,useEffect} from 'react';
import { Projectdata,projectnav } from './Data';
import WorksItem from './Workitems';
const Works = () => {
    const [item,setItem] = useState({name:"all"});
    const [projects,setProjects] = useState([]);
    const [active,setActive] = useState(0);
    useEffect(()=>{
        if(item.name === "all"){
            setProjects(Projectdata);
        }
        else{
            const newProjects =Projectdata.filter((project)=>{
                return (
                    project.category === item.name);
                
            });
            
            setProjects(newProjects);
        }
    },[item]);
    const handleClick = (e,index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    };
  return (
   <div>
        <div className="work__filters">
            {
                projectnav.map((item,index)=>{
                    return (
                        <span onClick={(e)=>{
                            handleClick(e,index);
                        }} 
                        className={`${active === index ? 'active-work' : ''} work__item`}
                        key={index}>{item.name}</span>
                    )
                })
            }
        </div>
        <div className="work__container container grid">
            {projects.map((item)=>{
                return <WorksItem items={item} key={item.id}/>
            })}
        </div>
   </div>

  )
}

export default Works
