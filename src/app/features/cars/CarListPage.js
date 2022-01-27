import CarList from "./list/CarList";
import { useState, useEffect } from "react"
import agent from "../../api/agent";
import AddCarModal from "./modal/AddCarModal";
<<<<<<< HEAD
import CarSearchInput from "./list/CarSearchInput";
import CarFilterButton from "./list/CarFilterButton";
import AddCarButton from "./list/AddCarButton";
=======
import UploadFileModal from "../../layout/appComponents/UploadFileModal";
>>>>>>> 1ab565cb6cdcd2f5677cf3bdcfd42f2c67e0f7a0

const CarListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cars, setCars] = useState(null);
    const [showAddCarModal, setShowAddCarModal] = useState(false);
    const [showUploadExcelModal, setShowUploadExcelModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShowAddCarModal = () => setShowAddCarModal(prevState => setShowAddCarModal(!prevState));

    const handleShowUploadExcelModal = () => setShowUploadExcelModal(prevState => setShowUploadExcelModal(!prevState));

    useEffect(() => {
        getData();
    }, [setCars])

    async function getData() {
        setIsLoading(true);
        const data = await agent.Cars.GetAll();
        setCars(data);
        setIsLoading(false);
    }

    const addCar = formValues => {
        setIsSubmitting(true);
        agent.Cars.Add({ car: formValues })
            .then(() => {
                getData();
                setShowAddCarModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

<<<<<<< HEAD
    const searchCar = name => {        
        if (name.trim() === "") {
            getData();
            return;
        }
        
        setIsLoading(true);
        agent.Cars.Search(name)
            .then(cars => setCars(cars))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
=======
    const uploadFile = formData => {
        setIsSubmitting(true);
        console.log(formData.get('File'));
        agent.Files.UploadCarExcel({ file: formData })
            .then(() => {
                getData();
                setShowUploadExcelModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
>>>>>>> 1ab565cb6cdcd2f5677cf3bdcfd42f2c67e0f7a0
    }

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl" >
            <div className="content flex-row-fluid" id="kt_content">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <CarSearchInput isLoading={isLoading} searchCar={searchCar} />
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-subscription-table-toolbar="base" >
<<<<<<< HEAD
                                <CarFilterButton />
                                <AddCarButton handleShowAddCarModal={handleShowAddCarModal} />
=======
                                <button
                                    type="button"
                                    className="btn btn-light-primary me-3"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    <span className="svg-icon svg-icon-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    Filter
                                </button>
                                <button
                                    className="btn btn-primary er fs-6 px-8 py-4"
                                    onClick={handleShowAddCarModal}
                                >
                                    <span className="svg-icon svg-icon-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <rect
                                                opacity="0.5"
                                                x="11.364"
                                                y="20.364"
                                                width={16}
                                                height={2}
                                                rx={1}
                                                transform="rotate(-90 11.364 20.364)"
                                                fill="black"
                                            />
                                            <rect
                                                x="4.36396"
                                                y="11.364"
                                                width={16}
                                                height={2}
                                                rx={1}
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    Add Car
                                </button>

                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={handleShowUploadExcelModal}
                                    style={{ marginLeft: "9px" }}>
                                    <span className="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z" fill="black" />
                                            <path d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM16 11.6L12.7 8.29999C12.3 7.89999 11.7 7.89999 11.3 8.29999L8 11.6H11V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H16Z" fill="black" />
                                            <path opacity="0.3" d="M11 11.6V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H11Z" fill="black" />
                                        </svg>
                                    </span>
                                    Upload Excel
                                </button>

>>>>>>> 1ab565cb6cdcd2f5677cf3bdcfd42f2c67e0f7a0
                            </div>
                        </div>
                    </div>
                    <CarList cars={cars} isLoading={isLoading} />
                </div>
            </div>

            {showAddCarModal &&
                <AddCarModal
                    closeModal={handleShowAddCarModal}
                    addCar={addCar}
                    isSubmitting={isSubmitting}
                />
            }

            {showUploadExcelModal &&
                <UploadFileModal
                    closeModal={handleShowUploadExcelModal}
                    uploadFile={uploadFile}
                    isSubmitting={isSubmitting}
                    title={"Upload Car List Excel"}
                />
            }
        </div>
    );
}

export default CarListPage;