import CarList from "./list/CarList";
import { useState, useEffect } from "react"
import agent from "../../api/agent";
import AddCarModal from "./modal/AddCarModal";

const CarListPage = () => {
    const [cars, setCars] = useState(null);
    const [showAddCarModal, setShowAddCarModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShowAddCarModal = () => {
        setShowAddCarModal(prevState => setShowAddCarModal(!prevState));
    }

    useEffect(() => {
        getData();
    }, [setCars])

    async function getData() {
        const data = await agent.Cars.GetAll();
        setCars(data);
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

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl" >
            <div className="content flex-row-fluid" id="kt_content">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <div className="d-flex align-items-center position-relative my-1">
                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" >
                                        <rect
                                            opacity="0.5"
                                            x="17.0365"
                                            y="15.1223"
                                            width="8.15546"
                                            height={2}
                                            rx={1}
                                            transform="rotate(45 17.0365 15.1223)"
                                            fill="black"
                                        />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    data-kt-subscription-table-filter="search"
                                    className="form-control form-control-solid w-250px ps-14"
                                    placeholder="Search Cars"
                                />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-subscription-table-toolbar="base" >
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
                            </div>
                        </div>
                    </div>
                    <CarList cars={cars} />
                </div>
            </div>

            {showAddCarModal &&
                <AddCarModal
                    closeModal={handleShowAddCarModal}
                    addCar={addCar}
                    isSubmitting={isSubmitting}
                />
            }
        </div>
    );
}

export default CarListPage;