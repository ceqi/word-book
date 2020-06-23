import React, { useState } from 'react'

const Search: React.FC<{}> = () => {
    const [toSearch, setSearch] = useState("")

    return <>
        <form onSubmit={(e: React.ChangeEvent<{}>) => {
            e.preventDefault()
            alert(toSearch)
        }}>
            <label> search: </label>
            <input
                type='search'
                name="search"
                multiple
                placeholder='type in words to search, however many you like'
                value={toSearch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    </>

}

export default Search