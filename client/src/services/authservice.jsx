import store from "../redux/store.jsx";
import { Userlogin, Userregister } from "../redux/features/auth/authAction.jsx";


export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!role || !email || !password) {
           return alert("Please fill all fields");
        }
        
        store.dispatch(Userlogin({ email, password, role })); 
    } catch (error) {
        console.log("Login Error:", error);
    }
};

export const handleRegister = (e, name, email, password, role, organization, hospital, website, address) => {
    e.preventDefault();
    try {
        if (!role || !email || !password || !name) {
            return alert("Please fill all fields");
        }
        console.log("Registering...");
        store.dispatch(Userregister({ name, email, password, role, organization, hospital, website, address }));
        
    } catch (error) {
        console.error("Register Error:", error);
    }
};

