import { render } from "@testing-library/react";
import { ReactNode } from "react";
import i18n from "../../config/i18n/i18nForTests";
import { I18nextProvider } from "react-i18next";
import React from 'react';
import { MemoryRouter } from "react-router-dom";

export interface RenderComponentRoutes {
  route?: string
}

export function RenderComponent(component: ReactNode, options: RenderComponentRoutes = {}) {
    const {route = '/'} = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}