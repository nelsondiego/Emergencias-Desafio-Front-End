import axios from "axios"
import moment, { Moment } from "moment";

import { Nasa } from "@/@types/nasa";
import { config } from "./config";

export const getDailyPictures = async (month:Moment): Promise<Nasa[]> => {

  const startDate = month.startOf('month').format('YYYY-MM-DD');
  const endDate = month.endOf('month').isBefore(moment()) 
    ? month.endOf('month').format('YYYY-MM-DD') 
    : moment().format('YYYY-MM-DD');

  let body:Nasa[] = [];
  try {
    const url = `${config.nasa.url}/planetary/apod?api_key=${config.nasa.token}&start_date=${startDate}&end_date=${endDate}&thumbs=true`
    body = (await axios.get(url)).data
  } catch (error) {
    console.log(error);
  }
  return body;
} 
