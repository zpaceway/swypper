import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firestore } from 'src/firebase';
import TodoItem from 'src/interfaces/TodoItem';

const getTodoItemsByUserId = async (userId?: string) => {
  if (!userId) {
    return [] as TodoItem[];
  }
  const todoItemsCollectionRef = collection(
    firestore,
    `users/${userId}/todoItems`
  );
  const todoItemsQuery = query(
    todoItemsCollectionRef
    // where('userId', '==', userId)
  );
  const todoItemsDocs = await getDocs(todoItemsQuery);

  const todoItems: TodoItem[] = [];

  todoItemsDocs.docs.forEach((todoItem) => {
    todoItems.push({
      id: todoItem.id,
      ...(todoItem.data() as Omit<TodoItem, 'id'>),
    });
  });

  return todoItems;
};

const updateTodoItem = async (
  userId: string,
  todoItemId: string,
  data: Partial<Omit<TodoItem, 'id'>>
) => {
  const todoItemDocRef = doc(
    firestore,
    `users/${userId}/todoItems`,
    todoItemId
  );
  await updateDoc(todoItemDocRef, data);
};

export { getTodoItemsByUserId, updateTodoItem };
