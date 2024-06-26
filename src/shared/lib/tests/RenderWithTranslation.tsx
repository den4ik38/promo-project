import { render } from "@testing-library/react";
import { ReactNode } from "react";
import i18n from "../../config/i18n/i18nForTests";
import { I18nextProvider } from "react-i18next";
import React from 'react';

export function RenderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    )
}