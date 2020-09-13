import React from 'react';
import './about.css'

class About extends React.Component {
  render() {
    return (
        <div style={{padding:"10px", paddingTop:"100px",}}>
        <div style={{border:'solid',"border-width":"1px",backgroundColor:'white', width:'50%',}}>
        <h1 style={{"text-align": "center"}}>
            Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <ol>
          <div><strong style={{width: "100px"}}>Nama :</strong> Deni Mukhtar Nurkautsar</div> 
          <div><strong style={{width: "100px"}}>Email:</strong>denim1376@gmail.com</div> 
          <div><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</div>
          <div><strong style={{width: "100px"}}>Akun Gitlab:</strong>deni1376</div> 
          <div><strong style={{width: "100px"}}>Akun Telegram:</strong>Deni Mukhtar</div> 
        </ol>
       </div>
       </div>
  );
}
}
export default About