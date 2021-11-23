import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    return isAuthenticated ? <div className="authInfo">
        <img className="authImage" src={user.picture} width={30} />
        <span className="authName">{user.name}</span>
        <button className="btn-round danger" onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}><i className="fa fa-times" aria-hidden="true"></i></button>
    </div> : <button className="btn-round" onClick={() => loginWithRedirect()}><i className="fa fa-sign-in" aria-hidden="true"></i></button>

};

export default LoginButton;