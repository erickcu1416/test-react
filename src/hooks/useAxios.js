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

export default useAxios;
