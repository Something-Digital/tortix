import ky from 'ky';

const API_ENDPOINTS = [
  {
    name: 'get_vendors',
    method: 'get',
    url: 'vendors',
    options: {},
  },
  {
    name: 'get_filters',
    method: 'get',
    url: 'filters',
    options: {},
  },
];

const options = {
  prefixUrl: 'http://localhost:3000/api',
};

const api = ky.create(options);

API_ENDPOINTS.forEach((endpoint) => {
  api[endpoint.name] = async () => {
    try {
      const parsed = await ky[endpoint.method](
        endpoint.url,
        {
          ...options,
          ...endpoint.options,
        },
      ).json();
      return parsed;
    } catch (err) {
      return err;
    }
  };
});

export default api;
