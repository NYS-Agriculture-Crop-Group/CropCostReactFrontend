import {getSession, addSession} from '../../context/session';

const APIURL = "/api/users";

export const userApiLogin = async (email: string, password: string) => {
    //const session = getSession();
    const response = await fetch(`${APIURL}`+"/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                email: email,
                password: password
            }
        })
    })
    let res_json = await response.json();
    if(response.status > 300){
        console.log(res_json);
        return false;
    }
    else{
        //this call succeeded should have returned jwt so store it
        const user = res_json.user;
        const user_session = user.token;
        addSession(user_session);
        console.log(`Got token ${user_session}`);
        return true;
    }
}

export const userApiCreateUser = async (email: string, password: string, name: string) => {
    //const session = getSession();
    const response = await fetch(`${APIURL}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                email: email,
                password: password,
                name: name
            }
        })
    })
    let res_json = await response.json();
    if(response.status > 300){
        console.log(res_json);
        return false;
    }
    else{
        //this call succeeded should have returned jwt so store it
        const user = res_json.user;
        const user_session = user.token;
        addSession(user_session);
        console.log(`Got token ${user_session}`);
        return true;
    }
}