import querystring from 'querystring';
import { useParams } from 'react-router-dom';
 
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
 
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
 
  return response.json();
};
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
 
 export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
 console.log("ACCESS_TOKEN", access_token)
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
       Authorization: `Bearer ${access_token}`,
     },
   });
 };

const PARAMS = `5YxebzzreNswbtYC1td4cx&seed_tracks=0Dlm41iXvTsIVsEOce3yX6`;
const GENERES_ENDPOINT_BASE = 'https://api.spotify.com/v1/recommendations?seed_genres=Gospel&seed_artists='
const API_URL = GENERES_ENDPOINT_BASE + PARAMS
 
 export const getGeneres = async () => {
  const { access_token } = await getAccessToken();
 console.log("ACCESS_TOKEN", access_token)
  return fetch(API_URL, {
    headers: {
       Authorization: `Bearer ${access_token}`,
     },
   });
 };

