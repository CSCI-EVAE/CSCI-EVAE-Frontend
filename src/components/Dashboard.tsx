import React from "react";
import { userInfos } from "../utils/authUtils";
import { Route, Routes } from "react-router-dom";
import Etudiant from "../pages/Etudiant";
import Admin from "../pages/Admin";
import Enseignant from "../pages/Enseignant";
import Page404 from "./Page404";
import Qualificatif from "../pages/Admin/qualificatif";
import Question from "../pages/Admin/question";
import { ListContextProvider } from "../context/listContext";
import { QualificatifContextProvider } from "../context/qualificatifContext";
import { QuestionContextProvider } from "../context/questionContext";

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
                
                    <Routes>
                        {/* //METTRE TOUTES LES PAGES ETUDIANTS ICI */}

                        {role === "ETUDIANT" && (
                            <Route path="/etudiant" element={<Etudiant />} />
                        )}
                        {/* //METTRE TOUTES LES PAGES ADMIN ICI */}

                        {role === "ADMIN" && (
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
                               
                            </>
                        )}
                        {/* //METTRE TOUTES LES PAGES ENSEIGNANT ICI */}

                        {role === "ENSEIGNANT" && (
                            <Route path="/etudiant" element={<Enseignant />} />
                        )}

                        <Route path="/404" element={<Page404 />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    </QuestionContextProvider>
                </QualificatifContextProvider>
            </ListContextProvider>
        </div>
    );
};
export default Dashboard;
