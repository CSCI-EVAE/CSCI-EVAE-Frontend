export const hasRole = (requiredRole: string): boolean => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role && user.role===requiredRole;
};
export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwtToken");
    return !!token; // Returns true if token exists, false otherwise
};
export const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
};

export const userInfos = () => {
    const token = localStorage.getItem("jwtToken");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

 if (user && token) {
    return {
        token: token,
        prenom: user.prenom,
        nom: user.nom,
        role: user.role,
    };
        }else {return {
            token: 'token',
                prenom: '',
                nom: '',
                role: ''
        }}
};
