import ClipLoader from "react-spinners/ClipLoader";

const ClipLoaderComponent = ({isLoading}) => {
    return (
        <div className="loader">
            <ClipLoader loading={isLoading} color="#009ef7" size={30} />
        </div>
    )
}

export default ClipLoaderComponent;