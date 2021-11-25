import checkLoggedTokenExpiration from "../utils/checkLoggedTokenExpiration"



function redirectUserIfNotLogged(pathname) {
    
    const checkIfIfUserLogged = checkLoggedTokenExpiration()


    if (!checkIfIfUserLogged) {
        window.location.href = "/login"
    }
    if(pathname === "/interface") redirectUserIfNotLogged()
}

    export default redirectUserIfNotLogged