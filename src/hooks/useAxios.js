import { instance } from '../providers/instance';

function useAxios() {
  return {
    get: instance.get,
    post: instance.post,
    deleteRequest: instance.delete,
    put: instance.put,
    patch: instance.patch
  };
}

export const doGet = async (endpoint, params) => {
  try {
    const response = await instance.get(endpoint, { params });

    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const doPut = async (endpoint, data) => {
  try {
    const response = await instance.put(endpoint, data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const doPatch = async (endpoint, data) => {
  try {
    const response = await instance.patch(endpoint, data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const doPost = async (endpoint, data) => {
  try {
    const response = await instance.post(endpoint, data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const doDelete = async (endpoint, data) => {
  try {
    const response = await instance.delete(endpoint, data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default useAxios;
