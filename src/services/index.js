import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://apiv3.apifootball.com/";

export const getStandings = async (leagueId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?action=get_standings&league_id=${leagueId}&APIkey=${API_KEY}`
    );
    return response.data
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

