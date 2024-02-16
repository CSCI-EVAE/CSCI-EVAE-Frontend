import React from "react";
import { userInfos } from "../utils/authUtils";
import { Route, Routes } from "react-router-dom";
import Etudiant from "../pages/Etudiant";
import Admin from "../pages/Admin";
import Enseignant from "../pages/Enseignant";
import Page404 from "./Page404";
import Qualificatif from "../pages/Admin/qualificatif";
import { ListContextProvider } from "../context/listContext";
import { QualificatifContextProvider } from "../context/qualificatifContext";
import RubriquePage from "../pages/Admin/rubriques";
import { RubriqueContextProvider } from "../context/rubriqueContext";
import Tab from "../composants/List/essai";
import { RubriqueComposeContextProvider } from "../context/rubriqueComposeContext";
import RubriqueComposePage from "../pages/Admin/rubriquesCompose";
import { ROLE } from "../constants";

const Dashboard: React.FC = () => {
    // const role = Object.keys(ROLE_COMPONENTS).find(hasRole);
    const role = userInfos().role;
    if (!role) {
        return <Page404 />;
    }

    return (
        <div>
            <ListContextProvider>
                <QualificatifContextProvider>
                    <RubriqueContextProvider>
                        <RubriqueComposeContextProvider>
                    
                    <Routes>
                        {/* //METTRE TOUTES LES PAGES ETUDIANTS ICI */}

                        {role === ROLE.etudiant && (
                            <Route path="/etudiant" element={<Etudiant />} />
                        )}
                        {/* //METTRE TOUTES LES PAGES ADMIN ICI */}

                        {role === ROLE.admin && (
                            <>
                                <Route path="/admin" element={<Admin />} />
                                <Route
                                    path="/qualificatif"
                                    element={<Qualificatif />}
                                />
                                <Route
                                    path="/rubrique"
                                    element={<RubriquePage />}
                                />
                                 <Route
                                    path="/essai"
                                    element={<Tab />}
                                />
                                 <Route
                                    path="/rubriquecompose"
                                    element={<RubriqueComposePage />}
                                />
                            </>
                        )}
                        {/* //METTRE TOUTES LES PAGES ENSEIGNANT ICI */}

                        {role === ROLE.etudiant && (
                            <Route path="/etudiant" element={<Enseignant />} />
                        )}

                        <Route path="/404" element={<Page404 />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    </RubriqueComposeContextProvider>
                    </RubriqueContextProvider>
                </QualificatifContextProvider>
            </ListContextProvider>
        </div>
    );
};
export default Dashboard;
