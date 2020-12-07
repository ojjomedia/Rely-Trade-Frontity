import React, { useRef } from 'react';
import { connect, styled } from 'frontity';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ state, actions }) => {
    const { searchQuery } = state.source.get(state.router.link);
    const { primary } = state.theme.colors;
    const inputRef = useRef();

    const formatQuery = (query) => query.trim().replace(" ", "+").toLowerCase();

    const OnSubmit = (event) => {
        event.preventDefault();

        const searchString = inputRef.current.value;

        if(searchString.trim().length > 0) {
            actions.router.set(`/?s=${formatQuery(searchString)}`);

            window.scrollTo(0, 0);
        }
    }
    const enterhandle = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();

            const searchString = inputRef.current.value;

            if(searchString.trim().length > 0) {
                actions.router.set(`/?s=${formatQuery(searchString)}`);

                window.scrollTo(0, 0);
            }
        }
    }
    return (
        <>
          <SearchBox>
            <FormControl
            type="search"
            ref={inputRef}
            placeholder="Search for items..."
            defaultValue={searchQuery || ""}
            name="search"
            className="mr-sm-2 search-form"
            onKeyDown={enterhandle}
            onChange={OnSubmit}
            />
            <InputGroup.Append>
                <FaSearch color={primary} onClick={OnSubmit} />
            </InputGroup.Append>
          </SearchBox> 
        </>
    )
}

export default connect(SearchForm);

const SearchBox = styled(InputGroup)`

    & .search-form {
        border-radius: 0px;
    }
    & .input-group-append {
        align-items: center;
    }
    & .form-control {
        font-size: 1.4rem !important;
        height: auto;
        padding: 10px 15px;
    }
    & .form-control:focus {
        border-color: none;
        box-shadow: none;
    }
    & svg {
        margin-left: -40px;
        z-index: 999;
    }
`