import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../components/BannerHeader.css";
import { Preloader } from "../../components/Preloader";
import Search from "../../components/Search";
import logo from "../../img/logo.svg";
import { getSearchQuery } from "../getSearchQuery";
import "./SearchPage.css";
import Source from "./Source";

const fetchData = async (globalInput) => {
    if (!getSearchQuery(globalInput)) return null;
    return await axios.get(getSearchQuery(globalInput)).then((response) => response.data);
};

function SearchPage({ globalInput, setGlobalInput }) {
    const { data, isLoading, error } = useQuery(
        ["search", globalInput],
        () => fetchData(globalInput),
        { skip: !globalInput, refetchOnWindowFocus: false }
    );
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link className="searchPage__logo" to="/">
                    <p style={{ display: "flex", alignItems: "center" }}>
                        <img style={{ maxWidth: "35px", marginRight: "10px" }} src={logo} />
                        Dea<span style={{ color: "#FFF" }}>th</span>non
                        <span style={{ color: "#e3ff73" }}>.</span>com
                    </p>
                </Link>

                <div className="searchPage__headerBody">
                    <Search
                        hideButtons
                        initialValue={globalInput}
                        setGlobalInput={setGlobalInput}
                    />
                </div>
            </div>
            {isLoading && (
                <div className="searchPage__results">
                    <div className="searchPage__resultCount">
                        <Preloader />
                    </div>
                </div>
            )}

            {(error || !getSearchQuery(globalInput)) && (
                <div className="searchPage__results">
                    <div className="searchPage__resultCount">
                        Your request string is invalid! Please enter a valid request string
                    </div>
                </div>
            )}
            {globalInput && data && data.hits && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data.hits.hits.length} results for {globalInput}
                    </p>
                    <div className="results">
                        {data.hits.hits.map((hit) => (
                            <div key={hit._id} className="searchPage__result">
                                <a className="searchPage__resultTitle" href="#">
                                    <h2>{hit._index}</h2>
                                </a>
                                <Source _source={hit._source} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
