import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../axios/custom';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      // authFetch is our URL with Headers
      // We have to set only the rest of the URL that we want
      const resp1 = await authFetch('/react-store-products');
      const resp2 = await axios(randomUserUrl);
      // resp2 will have default headers
      // resp1 will have only the default the we set on global and custom instance
    } catch (error) {
      console.log(error.resp1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
