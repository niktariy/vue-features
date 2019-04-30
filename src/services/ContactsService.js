import Api from '@/services/api';

export default {
  postData(params) {
    return Api().post(`/requiest${params}`);
  },
};
