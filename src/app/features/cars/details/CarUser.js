import AssignUserCard from "./AssignUserCard";
import CarUserInfo from "./CarUserInfo";

const CarUser = (props) => {
    const {user, handleDissociateUser} = props;

    if (user) return <CarUserInfo user={user} handleDissociateUser={handleDissociateUser} /> ;

    return <AssignUserCard />
}
 
export default CarUser;