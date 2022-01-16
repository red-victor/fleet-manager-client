import ProfileDetails from "./ProfileDetails";

const MyProfileTab = (props) => {
    const { user } = props;

    return (
        <>
            <ProfileDetails user={user} />
        </>
    );
}

export default MyProfileTab;