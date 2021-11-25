import jwt from "jsonwebtoken"

const checkLoggedTokenExpiration = () => {
    const token = localStorage.getItem("token")
    const secret = "teste"
    let tokenValidation
    try {
        tokenValidation = jwt.verify(token, secret)
        const tokenExpiration = tokenValidation.exp * 1000    
    
        const logged = Date.now() >= tokenExpiration ? false : true
        console.log(logged)
        return logged
    } catch (err) {console.error(err)}

}

export default checkLoggedTokenExpiration
