import type { Meta, StoryObj } from "@storybook/nextjs";
import type { FC, SVGProps } from "react";

import Icon from "./Icon";

// Filled imports
import AddFilled from "@material-design-icons/svg/filled/add.svg";
import RemoveFilled from "@material-design-icons/svg/filled/remove.svg";
import CloseFilled from "@material-design-icons/svg/filled/close.svg";
import CheckFilled from "@material-design-icons/svg/filled/check.svg";
import CheckCircleFilled from "@material-design-icons/svg/filled/check_circle.svg";
import HomeFilled from "@material-design-icons/svg/filled/home.svg";
import SearchFilled from "@material-design-icons/svg/filled/search.svg";
import SettingsFilled from "@material-design-icons/svg/filled/settings.svg";
import FavoriteFilled from "@material-design-icons/svg/filled/favorite.svg";
import StarFilled from "@material-design-icons/svg/filled/star.svg";
import PersonFilled from "@material-design-icons/svg/filled/person.svg";
import InfoFilled from "@material-design-icons/svg/filled/info.svg";
import WarningFilled from "@material-design-icons/svg/filled/warning.svg";
import LightModeFilled from "@material-design-icons/svg/filled/light_mode.svg";
import DarkModeFilled from "@material-design-icons/svg/filled/dark_mode.svg";
import ArrowForwardFilled from "@material-design-icons/svg/filled/arrow_forward.svg";
import ArrowBackFilled from "@material-design-icons/svg/filled/arrow_back.svg";
import MenuFilled from "@material-design-icons/svg/filled/menu.svg";
import NotificationsFilled from "@material-design-icons/svg/filled/notifications.svg";
import EditFilled from "@material-design-icons/svg/filled/edit.svg";

// Round imports
import AddRound from "@material-design-icons/svg/round/add.svg";
import RemoveRound from "@material-design-icons/svg/round/remove.svg";
import CloseRound from "@material-design-icons/svg/round/close.svg";
import CheckRound from "@material-design-icons/svg/round/check.svg";
import CheckCircleRound from "@material-design-icons/svg/round/check_circle.svg";
import HomeRound from "@material-design-icons/svg/round/home.svg";
import SearchRound from "@material-design-icons/svg/round/search.svg";
import SettingsRound from "@material-design-icons/svg/round/settings.svg";
import FavoriteRound from "@material-design-icons/svg/round/favorite.svg";
import StarRound from "@material-design-icons/svg/round/star.svg";
import PersonRound from "@material-design-icons/svg/round/person.svg";
import InfoRound from "@material-design-icons/svg/round/info.svg";
import WarningRound from "@material-design-icons/svg/round/warning.svg";
import LightModeRound from "@material-design-icons/svg/round/light_mode.svg";
import DarkModeRound from "@material-design-icons/svg/round/dark_mode.svg";
import ArrowForwardRound from "@material-design-icons/svg/round/arrow_forward.svg";
import ArrowBackRound from "@material-design-icons/svg/round/arrow_back.svg";
import MenuRound from "@material-design-icons/svg/round/menu.svg";
import NotificationsRound from "@material-design-icons/svg/round/notifications.svg";
import EditRound from "@material-design-icons/svg/round/edit.svg";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

const iconMap: Record<string, { filled: SvgComponent; round: SvgComponent }> = {
  add: { filled: AddFilled, round: AddRound },
  remove: { filled: RemoveFilled, round: RemoveRound },
  close: { filled: CloseFilled, round: CloseRound },
  check: { filled: CheckFilled, round: CheckRound },
  check_circle: { filled: CheckCircleFilled, round: CheckCircleRound },
  home: { filled: HomeFilled, round: HomeRound },
  search: { filled: SearchFilled, round: SearchRound },
  settings: { filled: SettingsFilled, round: SettingsRound },
  favorite: { filled: FavoriteFilled, round: FavoriteRound },
  star: { filled: StarFilled, round: StarRound },
  person: { filled: PersonFilled, round: PersonRound },
  info: { filled: InfoFilled, round: InfoRound },
  warning: { filled: WarningFilled, round: WarningRound },
  light_mode: { filled: LightModeFilled, round: LightModeRound },
  dark_mode: { filled: DarkModeFilled, round: DarkModeRound },
  arrow_forward: { filled: ArrowForwardFilled, round: ArrowForwardRound },
  arrow_back: { filled: ArrowBackFilled, round: ArrowBackRound },
  menu: { filled: MenuFilled, round: MenuRound },
  notifications: { filled: NotificationsFilled, round: NotificationsRound },
  edit: { filled: EditFilled, round: EditRound },
};

type IconStoryArgs = {
  icon: keyof typeof iconMap;
  size: string;
  className?: string;
};

const meta: Meta<IconStoryArgs> = {
  title: "Components/Icon",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders a Material Design icon from the [`@material-design-icons/svg`](https://github.com/marella/material-design-icons) package. " +
          "Pass both a `filledIcon` and `roundIcon` component — the correct variant is auto-selected based on the active theme. " +
          "The `AllIcons` story shows a curated subset of 20 icons. The full package contains 2500+ icons in `filled`, `outlined`, `round`, `sharp`, and `two-tone` variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconMap),
    },
    size: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<IconStoryArgs>;

export default meta;
type Story = StoryObj<IconStoryArgs>;

export const Default: Story = {
  args: {
    icon: "light_mode",
    size: "2rem",
  },
  render: ({ icon, size, className }) => {
    const { filled, round } = iconMap[icon];
    return (
      <Icon
        filledIcon={filled}
        roundIcon={round}
        size={size}
        className={className}
      />
    );
  },
};

export const Small: Story = {
  args: {
    icon: "settings",
    size: "1rem",
  },
  render: ({ icon, size, className }) => {
    const { filled, round } = iconMap[icon];
    return (
      <Icon
        filledIcon={filled}
        roundIcon={round}
        size={size}
        className={className}
      />
    );
  },
};

export const Large: Story = {
  args: {
    icon: "star",
    size: "4rem",
  },
  render: ({ icon, size, className }) => {
    const { filled, round } = iconMap[icon];
    return (
      <Icon
        filledIcon={filled}
        roundIcon={round}
        size={size}
        className={className}
      />
    );
  },
};

export const IconSelection: Story = {
  args: {
    icon: "home",
    size: "2rem",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A curated subset of 20 icons. Browse all 2500+ icons at [marella/material-design-icons](https://github.com/marella/material-design-icons).",
      },
    },
  },
  render: ({ size }) => (
    <div className="flex flex-wrap gap-4 max-w-lg">
      {Object.entries(iconMap).map(([name, { filled, round }]) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon filledIcon={filled} roundIcon={round} size={size} />
          <span className="text-xs text-center">{name}</span>
        </div>
      ))}
    </div>
  ),
};
