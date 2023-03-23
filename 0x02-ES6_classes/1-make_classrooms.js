import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [];
  for (const val of [19, 20, 34]) {
    const classRoom = new ClassRoom(val);
    classes.push(classRoom);
  }
  return classes;
}
