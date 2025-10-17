import AXIOS from 'axios';

import { ENV } from '@/config';

export const axios = AXIOS.create({
  baseURL: ENV.API_BASE_URL,
});
