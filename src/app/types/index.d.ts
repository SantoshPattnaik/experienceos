interface MenuBarCloseContextProps {
    close: boolean;
    setClose: Dispatch<SetStateAction<boolean>>;
}
interface SettingsContextProps {
    render: boolean;
    setRender: Dispatch<SetStateAction<boolean>>;
}