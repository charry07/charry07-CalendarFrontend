interface RootObject {
  message: string;
  events: Event[];
}
interface User {
  uid: string;
  name: string;
  email: string;
}

export interface EventSchema {
  title: string;
  notes: string;
  start: string;
  end: string;
  user: User;
  id: string;
}
