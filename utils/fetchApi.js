import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6784f1e9afmsh837955dce65ecb1p18fdf8jsn21fcd3082e8f'
    }
  })
  return data;
}
