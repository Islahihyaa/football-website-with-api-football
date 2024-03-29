import React from 'react';
import { Header, PlayersCard, Table } from '../components';
import {LogoInggris} from "../data/dummy"

const EnglishLeague = () => {
  
  const leagueId = 152;

  return (
    <div className='flex'>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-3/5'>
        <Header img={LogoInggris} category="League" title="Inggris"/>
        <Table leagueId={leagueId}/>
      </div>
      <div className='mx-4 my-16 p-2 md:p-10 bg-white rounded-xl w-2/5'>
        <Header category="Top" title="Score"/>
        <PlayersCard leagueId={leagueId}/>
      </div>
    </div>
  )
}

export default EnglishLeague;