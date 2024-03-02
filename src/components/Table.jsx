import React, { useEffect, useState } from 'react';
import { getStandings } from '../services';
import { tableHeader } from '../data/dummy';

const Table = ({leagueId}) => {

    const [standings, setStandings] = useState([])

    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const result = await getStandings(leagueId);
                setStandings(result);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        }
        fetchStandings()
    }, [leagueId]);

  return (
      <table className='table-auto border-collapse w-full '>
        <thead className='bg-gray-800 text-white '>
          <tr>
            {tableHeader.map((item) => (
                <th key={item.title} className='p-2'>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {standings.map((team, index) => (
                <tr key={team.team_id} className='border'>
                    <td className='py-2'>{index + 1}</td>
                    <td className='py-2'>{team.team_name}</td>
                    <td className='py-2'>{team.overall_league_payed}</td>
                    <td className='py-2'>{team.overall_league_PTS}</td>
                    <td className='py-2'>{team.overall_league_W}</td>
                    <td className='py-2'>{team.overall_league_D}</td>
                    <td className='py-2'>{team.overall_league_L}</td>
                    <td className='py-2'>{team.overall_league_GF}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table