import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      // Make the request
      const {data} = await axios(url, {
        headers : {
          Accept: 'application/json',
        },
      });
      console.log(data.joke);
      // Render data using useState
      setJoke(data.joke);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
