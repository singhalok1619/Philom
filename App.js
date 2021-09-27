import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {PersonAddIcon, CpuIcon, StopIcon, UploadIcon, BugIcon, PersonFillIcon, PeopleIcon, ToolsIcon, LawIcon, DownloadIcon  } from '@primer/octicons-react';



// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';






 function App() {


  const data = [
    { name: 'Pending', value: 30 },
    { name: 'Completed', value: 30 },
    { name: 'Ongoing', value: 40 },
    
  ];
  const COLORS = ['#33d4a3', '#09394d', '#0f9299',];




  return (<> 
      
      


  <div><h6 className='admin'><PersonFillIcon size={24} />Admin Name</h6><h5 className='name'>Philom</h5>
  <nav className='navbar'>
    <ul>
      <li><PersonAddIcon size={16} />Teams</li>  
      <li><CpuIcon size={16} />Dashboard</li>
      <li><StopIcon size={16} />Issues & Expenses</li>
      <li><UploadIcon size={16} />Upload Document</li>
      <li><BugIcon size={16} />Setting</li>
    </ul>
  </nav>
  <div className="download"><button><DownloadIcon size={24} />Download</button></div>
  <div className='dashboard'><h5 className='overview'>Dashboard overview</h5>
  

  <div><div className="issue"><div className="box"><h6 className="project_issue">Project Issue</h6><p className="pending">12 Pending issues</p>
   <table>
     <td className="issue1">issue 1</td>
     <td className="issue2">pending</td>
     <td className="issue3">25 March 2020</td>

    

   </table>
     
  </div></div></div>
       <div className='project'>
      <img className='img' src={process.env.PUBLIC_URL+"/image.png"}/>
       

       <div className='cost'><h6 className='project_cost'>Project Cost</h6>
       <div className='planned'><p className="planned_cost">Planned Cost</p><p className="rupee">20,00,000</p></div>
       <div className='actual'><p className="planned_cost">Actual Cost</p><p className="loss">21,00,000</p></div>
       
       <div class="container">
  <div class="row">
    <div class="col">
       <h6 className="lab"><PeopleIcon size={16} />Labour</h6>
    </div>
    <div class="col">
    <h6 className="lab"><ToolsIcon size={24} />Machine</h6>
    </div>
    <div class="col">
    <h6 className="lab"><LawIcon size={24} />Material</h6>
    </div>
  </div>
</div>
  
  
  
  
<div className="media">

  <div class="row">
  <h6 className="media0">Project Media</h6>
    <div class="col">
    
    <img className='media1' src={process.env.PUBLIC_URL+"/media1.jpg"} width="100" height="80"/>
    </div>
    <div class="col">
    <img className='media2' src={process.env.PUBLIC_URL+"/media2.jpg"} width="100" height="80"/> 
    </div>
    <div class="col">
    <img className='media3' src={process.env.PUBLIC_URL+"/media3.jpg"} width="100" height="80"/>
    </div>
    <div class="col">
    <img className='media4' src={process.env.PUBLIC_URL+"/media4.jpg"} width="100" height="80"/>
    </div>
  </div>

</div>

       </div>
         </div></div>
       </div>
  
  </>
     
  );
}

export default App;