import { highlight } from "./highlight";

export const handleClick = (value, setActive, ) => {
  switch (value) {
    case "calendar":
      highlight("calendar", setActive);
      break;
    case "clubs":
      highlight("clubs", setActive);
      break;
    case "assignments":
      highlight("assignments", setActive);

      break;
    case "exams":
      highlight("exams", setActive);

      break;
    case "dashboard":
      highlight("dashboard", setActive);
      break;
    default:
      break;
  }
};
