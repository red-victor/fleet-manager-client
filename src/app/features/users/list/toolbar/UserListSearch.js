import { useEffect, useState, isLoading } from "react";
import SearchIcon from "./SearchIcon";

let pageHasJustLoaded = true;

const UserListSearch = ({searchUsers, isLoading}) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = event => {
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        if (pageHasJustLoaded) {
            pageHasJustLoaded = false;
            return;
        }

        const waitBeforeSearch = setTimeout(() => {
            searchUsers(searchValue)
        }, 1000)

        return () => clearTimeout(waitBeforeSearch);
        
    }, [searchValue])


    return (
        <>
            <div className="d-flex align-items-center position-relative my-1">
                {!isLoading && <SearchIcon />}
                {isLoading && <span className="spinner-border spinner-border-sm position-absolute ms-6" />}

                <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search user" value={searchValue} onChange={handleInputChange} />
            </div>
        </>
    );
}

export default UserListSearch;