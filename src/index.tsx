import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/theme";
import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'
import { ErrorBoundary } from "app/providers/ErrorBoundary/ErrorBoundary";
import { StoreProvider } from "app/providers/store";

render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root')
)