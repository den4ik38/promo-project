import { FunctionComponent, SVGAttributes } from "react";
import AboutSvg from 'shared/assets/about-svg.svg';
import MainSvg from 'shared/assets/main-svg.svg';
import ProfileSvg from 'shared/assets/profile-20-20.svg';
import { RoutePath } from "shared/config/router/routeConfig";

export type SidebaritemType = {
  path: string;
  text: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebaritemType[] = [
    {
        path: RoutePath.main,
        text: "main",
        icon: MainSvg
    },
    {
        path: RoutePath.about,
        text: "about",
        icon: AboutSvg
    },
    {
        path: RoutePath.profile,
        text: "Profile",
        icon: ProfileSvg,
        authOnly: true
    }
]