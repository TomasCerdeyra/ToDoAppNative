import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks';

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Error al guardar tareas', e);
  }
}

export async function loadTasks() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data != null ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error al cargar tareas', e);
    return [];
  }
}
