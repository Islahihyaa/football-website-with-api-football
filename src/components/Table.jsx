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
                console.error("Error fetching data:", error);
            }
        }
        fetchStandings()
    }, [leagueId]);

  return (
      <table className='table-auto border-collapse w-full '>
        <thead className='bg-blue-950 text-white'>
          <tr>
            {tableHeader.map((item) => (
                <th key={item.title} className='p-2 text-xl font-semibold text-center'>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {standings.map((team, index) => (
                <tr key={team.team_id} className='border text-lg text-center'>
                    <td className='p-2'>{index + 1}</td>
                    <td className='p-2 flex items-center gap-2'><img src={team.team_badge} alt="Logo Team" className='w-10 h-10' />{team.team_name}</td>
                    <td className='p-2'>{team.overall_league_payed}</td>
                    <td className='p-2'>{team.overall_league_PTS}</td>
                    <td className='p-2'><span className='bg-[#1CD42E] rounded-full text-white py-2 px-4'>{team.overall_league_W}</span></td>
                    <td className='p-2'><span className='bg-[#B1B1B1] rounded-full text-white py-2 px-4'>{team.overall_league_D}</span></td>
                    <td className='p-2'><span className='bg-[#E55454] rounded-full text-white py-2 px-4'>{team.overall_league_L}</span></td>
                    <td className='p-2'>{team.overall_league_GF}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table