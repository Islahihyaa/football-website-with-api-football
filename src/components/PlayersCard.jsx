import React, { useEffect, useState } from 'react'
import { getPlayers } from '../services'
import { tableTopScoreHeader } from '../data/dummy';

const PlayersCard = ({leagueId}) => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const result = await getPlayers(leagueId);
                setPlayers(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPlayers()
    }, [leagueId]);
    
  return (
    <table className='table-auto border-collapse w-full'>
        <thead className='bg-blue-950 text-white'>
        <tr>
            {tableTopScoreHeader.map((item) => (
                <th key={item.title} className='py-2 px-4 text-xl font-semibold text-center'>{item.title}</th>
            ))}
        </tr>
        </thead>
        <tbody>
            {players.map((team, index) => (
                <tr key={team.team_id} className='border text-lg text-center'>
                    <td className='p-2'>{index + 1}</td>
                    <td className='p-2 text-left'>{team.player_name}</td>
                    <td className='p-2 text-left'>{team.team_name}</td>
                    <td className='p-2'><span className='bg-blue-800 rounded-full text-white py-2 px-4'>{team.goals}</span></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default PlayersCard