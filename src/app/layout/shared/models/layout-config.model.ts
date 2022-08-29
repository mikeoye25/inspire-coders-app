import { LayoutColor, LayoutType, LayoutWidth, MenuPositions, SideBarSize, SideBarTheme, TopbarTheme } from "../config/layout.model";

export interface LayoutConfig {
    layoutColor: LayoutColor;
    layoutType: LayoutType;
    layoutSize: LayoutWidth;
    leftbarPosition: MenuPositions;
    leftbarColor: SideBarTheme;
    leftbarSize: SideBarSize;
    showSidebarUserInfo: boolean;
    topbarColor: TopbarTheme;
}