import Cookies from 'js-cookie';

export const getSession = () => {
    const jwt = Cookies.get('__session');
    //let session;
    /*try{
        if (jwt) {
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            session = JSON.parse(window.atob(base64))
        } 
    } catch(err){
        console.log(err);
    }*/
    return jwt;
}

export const logout = () => {
    Cookies.remove("__session");
}

export const addSession = (token: string) => {
    Cookies.set("__session", token);
}