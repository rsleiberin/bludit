
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="Search-bar w-96 flex p-1 rounded"
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
            </label>
            <input 
                className="rounded w-96"
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Bludit"
                name="s"
            />
            <button type="submit"></button>
        </form>
    );
};

export default SearchBar;