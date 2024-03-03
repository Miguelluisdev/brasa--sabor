import LoginComponent from "../components/Login/LoginComponent"
import bg from "../assets/proximo-do-delicioso-churrasco-mexicano.jpg"

const Login = () => {
  return (
    <div style={{backgroundImage: `url('${bg}')`, backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)'}}>
      <LoginComponent/>
    </div>
  )  
}

export default Login
