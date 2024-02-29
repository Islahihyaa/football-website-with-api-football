import React, { useEffect, useState } from 'react'
import competitionService from '../services/competition'

const Competition = () => {
    const [competition, setCompetition] = useState([]);

    useEffect(() => {
        const fetchCompetition = async () => {
            try {
              const result = await competitionService.getCompetitions();
              setCompetition(result);
            } catch (error) {
              // Handle error jika diperlukan
            }
          };
          fetchCompetition();
        }, []);
    
    
  return (
    <div>
    <h1>Supported Countries</h1>
    <ul>
    </ul>
  </div>
  )
}

export default Competition