import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../TasksList/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../TasksList/searchParameters";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../common/languageSlice";
import descriptions from "../../../../common/descriptions";

const Search = () => {
    const language = useSelector(selectLanguage);
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder={descriptions[language].searchLabelPlaceholder}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}

export default Search;