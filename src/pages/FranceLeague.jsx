import React from 'react';
import { Header, PlayersCard, Table } from '../components';
import { LogoPrancis } from '../data/dummy';

const FranceLeague = () => {
  
  const leagueId = 168;

  return (
    <div className='flex'>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-3/5'>
        <Header img={LogoPrancis} category="League" title="Prancis"/>
        <Table leagueId={leagueId}/>
      </div>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-2/5'>
        <Header category="Top" title="Score"/>
        <PlayersCard leagueId={leagueId}/>
      </div>
    </div>
  )
}

export default FranceLeague;