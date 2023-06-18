import httpService from './http.service';

const sbercloudService = {
  sendMessage: async (payload: any) => {
    const { data } = await httpService.post('', payload);
    return data;
  },
};

export default sbercloudService;
