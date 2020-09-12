import React from 'react';
//import logo from '../public/img/logo.png'

class About extends React.Component {
  render() {
    return (
        <div style={{padding:"10px"}}>
        <div style={{border:'solid',"border-width":"1px"}}>
        <h1 style={{"text-align": "center"}}>
            Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <ol>
          <li><strong style={{width: "100px"}}>Nama :</strong> Deni Mukhtar Nurkautsar</li> 
          <li><strong style={{width: "100px"}}>Email:</strong>denim1376@gmail.com</li> 
          <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
          <li><strong style={{width: "100px"}}>Akun Gitlab:</strong>deni1376</li> 
          <li><strong style={{width: "100px"}}>Akun Telegram:</strong>Deni Mukhtar</li> 
        </ol>
       </div>
       </div>
  );
}
}
export default About