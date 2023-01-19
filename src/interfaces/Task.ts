import { Timestamp } from 'firebase/firestore';

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  checked: boolean;
  type: string;
  createdAt: Timestamp;
}
export default Task;
