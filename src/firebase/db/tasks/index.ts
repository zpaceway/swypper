import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from 'src/firebase';
import Task from 'src/interfaces/Task';

const getTasksByUserId = async (userId?: string) => {
  if (!userId) {
    return [] as Task[];
  }
  const tasksCollectionRef = collection(firestore, `users/${userId}/tasks`);
  const tasksQuery = query(
    tasksCollectionRef
    // where('userId', '==', userId)
  );
  const tasksDocs = await getDocs(tasksQuery);

  const tasks: Task[] = [];

  tasksDocs.docs.forEach((task) => {
    tasks.push({
      id: task.id,
      ...(task.data() as Omit<Task, 'id'>),
    });
  });

  return tasks;
};

const updateTask = async (
  userId: string,
  taskId: string,
  data: Partial<Omit<Task, 'id'>>
) => {
  const taskDocRef = doc(firestore, `users/${userId}/tasks`, taskId);
  await updateDoc(taskDocRef, data);
};

const createTask = async (userId: string, task: Omit<Task, 'id'>) => {
  const tasksCollection = collection(firestore, `users/${userId}/tasks`);
  const taskRef = await addDoc(tasksCollection, task);
  return { id: taskRef.id, ...task };
};

export { getTasksByUserId, updateTask, createTask };
