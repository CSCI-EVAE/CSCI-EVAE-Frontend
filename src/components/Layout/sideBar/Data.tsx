import { faCalendarDays, faCircleDot, faFileLines, faHouse, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    id: 2,
    name: "layouts",
    path: "/layouts",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
  },
  {
    id: 3,
    name: "calendar",
    path: "/calendar",
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
  },
  {
    id: 4,
    name: "invoice",
    path: "/invoice",
    icon: <FontAwesomeIcon icon={faFileLines} />,
  },
  {
    id: 5,
    name: "users",
    path: "/users",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: 6,
    name: "roles & permissions",
    path: "/roles",
    icon: <FontAwesomeIcon icon={faCircleDot} />,
  },
];
