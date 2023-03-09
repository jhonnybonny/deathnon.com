import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search({ initialValue = "", setGlobalInput }) {
    const [inputValue, setInputValue] = React.useState(initialValue);
    const navigate = useNavigate();

    const search = (e) => {
        if (!inputValue) return;
        if (e.key === "Enter") {
            setGlobalInput(inputValue);
            navigate("/search");
        }
    };

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => e.preventDefault();

    const onClick = () => {
        setGlobalInput(inputValue);
        navigate("/search");
    };

    return (
        <form className="search" onSubmit={onSubmit}>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" onClick={onClick} />
                <input value={inputValue} onChange={onChange} onKeyDown={search} />
            </div>
        </form>
    );
}

export default Search;
