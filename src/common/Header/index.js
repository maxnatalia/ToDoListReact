import { Wrapper, Button, StyledHeader } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { changeLanguage, selectLanguage } from "../languageSlice";
import descriptions from "../descriptions";

const Header = ({ title }) => {
    const isDarkTheme = useSelector(selectDarkTheme);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <StyledHeader>
                {title}
            </StyledHeader>
            <div>
                {Object.keys(descriptions).map((key) => (
                    <Button
                        lang
                        key={key}
                        value={key}
                        onClick={() => dispatch(changeLanguage(key))}
                    >{key}
                    </Button>
                ))}
            </div>
            <Button onClick={() => dispatch(toggleTheme())}>
                {isDarkTheme ? descriptions[language].themeLight : descriptions[language].themeDark}
            </Button>
        </Wrapper>
    )
};

export default Header;