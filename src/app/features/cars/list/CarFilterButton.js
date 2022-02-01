import FilterIcon from "../../../layout/appComponents/icons/FilterIcon";

const CarFilterButton = () => {
    return (
        <button
            type="button"
            className="btn btn-primary me-3"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
        >
            <FilterIcon />
            Filter
        </button>
    )
}

export default CarFilterButton;