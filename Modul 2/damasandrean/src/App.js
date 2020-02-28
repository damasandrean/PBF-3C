import React from 'react';
import logo from './logo.svg';
import './App.css';

function Biodata() {
  return (

    <center>
      <div>
        <h3>Biodata</h3>
        <br></br>
        <img src={logo} alt="logo" className="roundedcircel" width="350" />
      </div>
      <br>
      </br>
      <div>
        <h3>Nama    : DAMAS ANDREAN NUR WICAKSONO</h3>
        <br></br>
        <h3>Nim     : 1741720178</h3>
        <br></br>
        <h3>Kelas   :TI-3C </h3>
        <br></br>
        <h3>Alamat : Perum Bumi Asri</h3>
      </div>
    </center>
  )
}

export default Biodata;