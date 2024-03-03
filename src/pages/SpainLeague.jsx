import React from 'react';
import { Header, PlayersCard, Table } from '../components';
import { LogoSpanyol } from '../data/dummy';

const SpainLeague = () => {
  
  const leagueId = 302;

  return (
    <div className='flex'>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-3/5'>
        <Header img={LogoSpanyol} category="League" title="Spanyol"/>
        <Table leagueId={leagueId}/>
      </div>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-2/5'>
        <Header category="Top" title="Score"/>
        <PlayersCard leagueId={leagueId}/>
      </div>
    </div>
  )
}

export default SpainLeague;