import React from 'react';
import { Header, Table } from '../components';
import { LogoIndonesia } from '../data/dummy';

const IndonesiaLeague = () => {
  
  const leagueId = 194;

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
        <Header img={LogoIndonesia} category="League" title="Indonesia"/>
        <Table leagueId={leagueId}/>
    </div>
  )
}

export default IndonesiaLeague;