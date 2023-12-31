const AuthGuard = ({children}) => {

  const token = localStorage.getItem("token");
  
    if (token) { 
        return children
    } else {
        window.location.href = "/login";
    }
}

export default AuthGuard