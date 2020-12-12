import BaseService from './baseService';
// import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post('http://167.99.78.155:8080/api/login', {
    username,
    password,
  });
};

export default { login };