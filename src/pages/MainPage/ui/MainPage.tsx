import { BugButton } from "app/providers/ErrorBoundary/BugButton";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('main')

    return (
        <div>
            {t('Main Page')}
            <br/>
            <BugButton />
        </div>
    )
}
export default MainPage;