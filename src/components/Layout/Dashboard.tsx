import React from "react";
import { userInfos } from "../../utils/authUtils";
import { Route, Routes } from "react-router-dom";
import Etudiant from "../../pages/Etudiant";
import Admin from "../../pages/Admin";
import Enseignant from "../../pages/Enseignant";
import Page404 from "../../pages/Page404";
import Qualificatif from "../../pages/Admin/qualificatif";
import Question from "../../pages/Admin/question";
import { ListContextProvider } from "../../context/listContext";
import { QualificatifContextProvider } from "../../context/qualificatifContext";
import { QuestionContextProvider } from "../../context/questionContext";
import RubriquePage from "../../pages/Admin/rubriques";
import { RubriqueContextProvider } from "../../context/rubriqueContext";
import { RubriqueComposeContextProvider } from "../../context/rubriqueComposeContext";
import RubriqueComposePage from "../../pages/Admin/rubriquesCompose";
import { ROLE } from "../../constants";
import RubriqueCompose from "../RubriqueComposeView";
import MyTable from "../../pages/Enseignant/RubriqueList";
import { RubriqueEnseignantContextProvider } from "../../context/rubriqueEnseignantContext";

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
                    <QuestionContextProvider>
                    <RubriqueContextProvider>
                        <RubriqueComposeContextProvider>
                            <RubriqueEnseignantContextProvider>
                    
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
                                    path="/questions"
                                    element={<Question />}
                                />
                               
                                <Route
                                    path="/rubrique"
                                    element={<RubriquePage />}
                                />
                                 <Route
                                    path="/essai"
                                    element={<RubriqueCompose />}
                                />
                                 <Route
                                    path="/rubriquecompose"
                                    element={<RubriqueComposePage />}
                                />
                                 <Route
                                    path="/table"
                                    element={<MyTable />}
                                />
                            </>
                        )}
                        {/* //METTRE TOUTES LES PAGES ENSEIGNANT ICI */}

                        {role === ROLE.enseigannt && (
                            <Route path="/enseignant" element={<Enseignant />} />
                        )}

                        <Route path="/404" element={<Page404 />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    </RubriqueEnseignantContextProvider>
                    </RubriqueComposeContextProvider>
                   
                    </RubriqueContextProvider>
                    </QuestionContextProvider>
                </QualificatifContextProvider>
            </ListContextProvider>
        </div>
    );
};
export default Dashboard;
