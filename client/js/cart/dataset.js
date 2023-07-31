const URL = 'http://localhost:3000/products';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const dataset = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

dataset.get = (url, options) => {
  return dataset({
    url,
    ...options,
  });
};
dataset.post = (url, body, options) => {
  return dataset({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
dataset.delete = (url, options) => {
  return dataset({
    method: 'DELETE',
    url,
    ...options,
  });
};
dataset.put = (url, body, options) => {
  return dataset({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
