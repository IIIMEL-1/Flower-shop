import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@redux/slices/themeSlice";
import { useTypedSelector } from "@hooks/useTypedSelector";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useTypedSelector((state) => state.themeSlice.theme);

  useEffect(() => {
    document.body.dataset.theme = "";
    document.body.dataset.theme = `${theme}-theme`;
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return <button onClick={handleToggle}>Toggle Theme</button>;
};

export default ThemeToggleButton;
