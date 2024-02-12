import React, {ReactElement} from 'react';
import { hasRole } from '../utils/authUtils';



const ROLE_COMPONENTS: { [key: string]: ReactElement } = {
    'ADMIN': <h2>Admin Dashboard</h2>,
    'ENSEIGNANT': <h2>Enseignant Dashboard</h2>,
    'ETUDIANT': <h2>Etudiant Dashboard</h2>,
};

const Dashboard: React.FC = () => {
    const role = Object.keys(ROLE_COMPONENTS).find(hasRole);

    if (!role) {
        return <div>You do not have access to the dashboard.</div>;
    }

    return (
        <div>
           
            {ROLE_COMPONENTS[role]}
            {/* Role-specific components and information */}
        </div>
    );
};
export default Dashboard;
