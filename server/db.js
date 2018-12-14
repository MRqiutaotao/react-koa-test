import monk from "monk";
const url = "localhost:27017/student";
export const db = monk(url);
