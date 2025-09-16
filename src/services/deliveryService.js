import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Fetches all deliveries from the backend.  Requires authentication.
 */
export const getDeliveries = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('Token não encontrado');
  const response = await fetch(`${API_BASE_URL}/entregas`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Erro ${response.status}`);
  }
  return await response.json();
};