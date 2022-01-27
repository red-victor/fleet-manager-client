import CarList from "./list/CarList";
import { useState, useEffect } from "react"
import agent from "../../api/agent";
import AddCarModal from "./modal/AddCarModal";
import CarSearchInput from "./list/CarSearchInput";
import CarFilterButton from "./list/CarFilterButton";
import AddCarButton from "./list/AddCarButton";

const CarListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
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
                                <CarFilterButton />
                                <AddCarButton handleShowAddCarModal={handleShowAddCarModal} />
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
        </div>
    );
}

export default CarListPage;