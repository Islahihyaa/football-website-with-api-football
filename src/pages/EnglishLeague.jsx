import React, { useEffect, useState } from 'react';
import { getStandings } from '../services';
import { Header, Table } from '../components';

const EnglishLeague = () => {
    const leagueId = 152;
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
        <Header category="League" title="English"/>
        <Table leagueId={leagueId}/>
    </div>
  )
}

export default EnglishLeague