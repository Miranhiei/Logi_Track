import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Retrieves summary metrics for the dashboard such as counts of robots,
 * sensors and deliveries.  Requires a valid JWT.  Returns an object
 * containing numeric properties { robots, sensors, deliveries }.
 */
export const getDashboardMetrics = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('Token não encontrado');
  const response = await fetch(`${API_BASE_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Erro ${response.status}`);
  }
  return await response.json();
};