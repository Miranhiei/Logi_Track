import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Retrieves all users from the backend.  Requires a valid JWT in storage.
 * Returns an array of user objects or throws an error on failure.
 */
export const getUsers = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('Token não encontrado');
  const response = await fetch(`${API_BASE_URL}/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Erro ${response.status}`);
  }
  return await response.json();
};

/**
 * Creates a new user.  Requires an admin token.  Password is optional.
 * Returns the created user object.
 * @param {object} userData
 */
export const createUser = async (userData) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('Token não encontrado');
  const response = await fetch(`${API_BASE_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Erro ${response.status}`);
  }
  return await response.json();
};