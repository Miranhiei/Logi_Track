import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Fetches all sensors from the backend.  Requires a valid JWT.
 */
export const getSensors = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('Token não encontrado');
  const response = await fetch(`${API_BASE_URL}/sensores`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Erro ${response.status}`);
  }
  return await response.json();
};