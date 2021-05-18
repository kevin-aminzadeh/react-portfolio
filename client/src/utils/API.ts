import axios from 'axios';

export default {
  sendForm: (formData: any) => {
    return axios.post('/api/mail', formData);
  },
};
