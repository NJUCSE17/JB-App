import axios from 'axios';
import { Alert, AsyncStorage } from 'react-native';
import { Constants } from 'expo';
import { stringify } from 'qs';
import { Base64 } from 'js-base64';

import * as Config from './config';

const instance = axios.create({
  baseURL: Config.baseURL,
  timeout: Config.timeout,
  headers: {
    'Accept': 'application/json'
  }
});

const _getToken = async () => {
  const token_string = await AsyncStorage.getItem('token');
  return JSON.parse(token_string);
}

const _handleError = (error) => {
  let { response } = error;
  if (response) {
    console.log("HTTP request failed: " + response.status);
    console.log(response.data);
    throw { 
      status: response.status,
      message: response.data.message
    };
  } else {
    throw error;
  }
}

export const login = async (username, password) => {
  const params = {
    grant_type: 'password',
    client_id: Config.clientID,
    client_secret: Base64.decode(Config.clientSecret),
    username: username,
    password: password
  };
  await instance.post('/oauth/token', stringify(params))
    .then(async (res) => {
      console.log("Login succeeded as " + username);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('token', JSON.stringify(res.data));
    }).catch((error) => _handleError(error));
}

export const getAssignments = async () => {
  const token = await _getToken();
  return await instance.get('/api/assignments', {
      headers: { 'Authorization': token.token_type + " " + token.access_token }
    }).then(async (res) => {
      const { assignments } = res.data;
      if (assignments) {
        console.log("Fetched assignments from server.");
        await AsyncStorage.setItem('assignments', JSON.stringify(assignments));
        return assignments;
      } else {
        throw { message: 'Bad data.' };
      }
    }).catch((error) => _handleError(error));
}