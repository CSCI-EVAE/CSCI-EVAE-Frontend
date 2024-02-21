import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, userInfos } from "../../utils/authUtils";
import {
    Button,
    Typography,
    Toolbar,
    AppBar,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import ButtonComponent from "../common/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from '../../images/echoSim.png'
const Header: React.FC = () => {
    let navigate = useNavigate();

    
    const [open, setOpen] = useState(false); // État pour contrôler l'ouverture de la boîte de dialogue

    const isAuth = isAuthenticated();
    const [prenom, setPrenom] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (isAuth) {
            setPrenom(userInfos().prenom);
            setRole(userInfos().role);
        }
    }, [isAuth]);

    const handleLogout = () => {
        setOpen(true); // Ouvrir la boîte de dialogue pour confirmation
    };

    const handleLogoutConfirmed = () => {
        setOpen(false);
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const handleCancelLogout = () => {
        setOpen(false); // Fermer la boîte de dialogue de confirmation
    };

    const handleLogin = () => {
        navigate("/login");
    };

    

    return (
        <>
            <AppBar
                position="static"
                sx={{backgroundColor : "#bec3d4"}}
                >
                <Toolbar>
                    <Box mb={2}>
                        <img
                            src={logo}
                            alt="Logo"
                            width="80"
                            style={{"marginBottom":"-40px"}}
                        />
                    </Box>
                    {isAuth ? (
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: "center" }}
                        >
                          
                            Bienvenue {prenom}
                            
                            <br />
                            <span style={{ fontSize: "small", color: "blue" }}>
                                {role}
                            </span>
                        </Typography>
                    ) : (
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            
                        </Typography>
                    )}
                    {isAuth ? (
                        <ButtonComponent
                            variant="contained"
                            icon={<LogoutIcon />}
                            text="Déconnexion"
                            onClick={handleLogout}
                        />
                    ) : (
                        <ButtonComponent
                            variant="contained"
                            icon={<LoginIcon />}
                            text=" Connexion"
                            onClick={handleLogin}
                        />
                    )}
                </Toolbar>
                {/* <Sidebar /> */}
            </AppBar>
            <Dialog open={open} onClose={handleCancelLogout}>
                <DialogTitle>Confirmation de déconnexion</DialogTitle>
                <DialogContent>
                    Êtes-vous sûr de vouloir vous déconnecter ?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogoutConfirmed} color="primary">
                        Oui
                    </Button>
                    <Button
                        onClick={handleCancelLogout}
                        color="primary"
                        autoFocus
                    >
                        Non
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Header;
