import axios from "axios";

const API_KEY = 'a6215fed68358666ef5e9d57a375f2a2f6fd193b777959a30d8ed4caeac99506';
const BASE_URL = 'https://apiv3.apifootball.com/';

const getCompetitions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?action=get_leagues&country_id=6&APIkey=${API_KEY}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  };
  
  export default {
    getCompetitions,
  };;
