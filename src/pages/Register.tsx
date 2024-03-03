import Step1 from "../components/RegisterComponents/Step1"
import bg from "../assets/proximo-do-delicioso-churrasco-mexicano.jpg"

const Register = () => {
  return (
    <div  style={{backgroundImage: `url('${bg}')` ,  backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.412)' }} >
      <Step1/>
    </div>
  )
}

export default Register