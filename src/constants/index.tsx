import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AllOutIcon from '@mui/icons-material/AllOut';
import AltRouteIcon from '@mui/icons-material/AltRoute';
export const ROLE = {
    admin: "ADM",
    enseigannt: "ENS",
    etudiant: "ETU",
};

export const LIST_ACTIONS = {
    create: "CREATE",
    add: "ADD",
    read: "READ",
    update: "UPDATE",
    delete: "DELETE",
};

export const QUALIFICATIF_COLUMNS = [
    { id: "minimal", label: "minimal" },
    { id: "maximal", label: "maximal" },
];

export const Question_COLUMNS = [
    { id: "intitule", label: "intitule" },
    { id: "minimal", label: "minimal" },
    { id: "maximal", label: "maximal" }
];

export const RUBRIQUE_COLUMNS = [
    { id: "designation", label: "designation" },
    //{ id: "ordre", label: "ordre" }
    
];

export const TYPE_STANDARD ={
    question_standard : "QUS",
    rubrique_standard : "RBS"
}


interface Dashboard {
    id: number;
    icon: React.ReactElement;
    title: string;
    link: string;
}

export const ADMIN_DASHBOARD: Dashboard[] = [
    {
        id: 1,
        icon: <WidgetsIcon />,
        title: "Menu",
        link: "/dashboard/admin",
    },
    {
        id: 2,
        icon: <LiveHelpIcon />,
        title: "Questions",
        link: "/dashboard/questions",
    },
    {
        id: 3,
        icon: <AltRouteIcon />,
        title: "Qualificatifs",
        link: "/dashboard/qualificatif",
    },
    {
        id: 4,
        icon: <AllOutIcon />,
        title: "Rubriques",
        link: "/dashboard/rubrique",
    },
    {
        id: 5,
        icon: <AccountTreeIcon />,
        title: "Rubriques Composées",
        link: "/dashboard/rubriquecompose",
    },
    {
        id: 6,
        icon: <LiveHelpIcon />,
        title: "Essai",
        link: "/dashboard/essai",
    },
];
