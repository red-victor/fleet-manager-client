import CarList from "./list/CarList";
import { useState, useEffect } from "react"
import agent from "../../api/agent";
import AddCarModal from "./modal/AddCarModal";
import CarSearchInput from "./list/CarSearchInput";
import CarFilterButton from "./list/CarFilterButton";
import AddCarButton from "./list/AddCarButton";
import UploadFileModal from "../../layout/appComponents/UploadFileModal";
import PaginationComponent from "../../layout/appComponents/PaginationComponent";
import ExportCarsButton from "./list/ExportCarsButton";
import useRoles from "../../hooks/useRoles";
import { useHistory } from "react-router-dom";

const CarListPage = () => {
    const role = useRoles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [showAddCarModal, setShowAddCarModal] = useState(false);
    const [showUploadExcelModal, setShowUploadExcelModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tableData, setTableData] = useState({
        cars: null,
        currentPage: 1,
        totalPages: 10,
        searchTerm: "",       
    });

    useEffect(() => {
        if (role !== "Admin") history.push("/");
    }, [])


    const handleShowAddCarModal = () => setShowAddCarModal(prevState => setShowAddCarModal(!prevState));

    const handleShowUploadExcelModal = () => setShowUploadExcelModal(prevState => setShowUploadExcelModal(!prevState));

    useEffect(() => {
        getData();
    }, [])

    async function getData(page=1) {
        setIsLoading(true);
        const data = await agent.Cars.GetByPage(page);
        console.log(data.items)
        setTableData(prevState => {
            return {
                ...prevState,
                cars: data.items,
                totalPages: data.totalPages,
                currentPage: data.currentPage
            }
        })
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

    const searchCar = async (page=1) => {        
        setIsLoading(true);
        if (tableData.searchTerm.trim() === "") {
            await getData(page);
            setIsLoading(false);
        }
        else {
            agent.Cars.Search(tableData.searchTerm, page)
                .then(data => setTableData(prevState => {
                    return {
                        ...prevState,
                        cars: data.items,
                        totalPages: data.totalPages,
                        currentPage: data.currentPage
                    }
                }))
                .catch(e => console.log(e))
                .finally(() => setIsLoading(false));
        }
    }

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
    }

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl" >
            <div className="content flex-row-fluid" id="kt_content">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <CarSearchInput tableData={tableData} isLoading={isLoading} searchCar={searchCar} setSearchTerm={val=>setTableData(prevData=>{return {...prevData, searchTerm: val}})} />
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-subscription-table-toolbar="base" >
                                <CarFilterButton />
                                <ExportCarsButton />
                                <AddCarButton handleShowAddCarModal={handleShowAddCarModal} />

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
                            </div>
                        </div>
                    </div>
                    <CarList cars={tableData.cars} isLoading={isLoading} />
                    <PaginationComponent
                            style={{display: "flex", alignItems:"center", justifyContent:"center", marginBottom: 50}} 
                            totalPages={tableData.totalPages}
                            currentPage={tableData.currentPage}
                            onPageChange={(page) => {
                                searchCar(page);
                                window.scroll(0, 150)
                            }}
                        />
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