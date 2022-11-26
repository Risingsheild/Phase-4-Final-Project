import {useNavigate} from "react-router-dom"

function Logout(setUser){

    const navigate = useNavigate()


function handleLogout() {
    fetch("/logout", {
        method: 'DELETE',
    }).then(setUser(''))
    .then(navigate("/login"))
}
return(
    <div>
        <button  onSubmit={handleLogout}> Logout </button>
    </div>
)
}
export default Logout