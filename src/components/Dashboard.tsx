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
import RubriquePage from "../pages/Admin/rubriques";
import { RubriqueContextProvider } from "../context/rubriqueContext";

const Dashboard: React.FC = () => {
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
                            <Routes>
                                {role === "ETUDIANT" && (
                                    <Route path="/etudiant" element={<Etudiant />} />
                                )}
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
                                        <Route
                                            path="/rubrique"
                                            element={<RubriquePage />}
                                        />
                                    </>
                                )}
                                {role === "ENSEIGNANT" && (
                                    <Route path="/etudiant" element={<Enseignant />} />
                                )}
                                <Route path="/404" element={<Page404 />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </RubriqueContextProvider>
                    </QuestionContextProvider>
                </QualificatifContextProvider>
            </ListContextProvider>
        </div>
    );
};
export default Dashboard;