import AssignUserCard from "./AssignUserCard";
import CarUserInfo from "./CarUserInfo";

const CarUser = (props) => {
    const {user, handleDissociateUser, showModal} = props;

    if (user) return <CarUserInfo user={user} handleDissociateUser={handleDissociateUser} /> ;

    return <AssignUserCard showModal={showModal} />
}
 
export default CarUser;