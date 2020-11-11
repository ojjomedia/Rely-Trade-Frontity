import React from 'react';
import { connect, styled } from 'frontity';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ state }) => {
    const { primary } = state.theme.colors;
    return (
        <>
          <SearchBox>
            <FormControl
            type="search"
            placeholder="Search for items..."
            name="search"
            className="mr-sm-2 search-form"
            />
            <InputGroup.Append>
                <FaSearch color={primary} />
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