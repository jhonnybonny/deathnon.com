import React from "react";
import { validateValue } from "./validateValue";

const mapOverObject = (value) =>
    Object.entries(value).map(([key, value]) => (
        <p key={key} className="searchPage__resultSnippet">
            {key}: {value}
        </p>
    ));

const Source = ({ _source }) => {
    const mappedEntries = React.useMemo(() => {
        return Object.entries(_source).map(([key, value]) => {
            if (validateValue(value)) return "";
            console.log(typeof value);
            if (typeof value === "object") return mapOverObject(value);
            return (
                <p key={key} className="searchPage__resultSnippet">
                    {key}: {value}
                </p>
            );
        });
    }, [_source]);

    return <div>{mappedEntries}</div>;
};

export default Source;
