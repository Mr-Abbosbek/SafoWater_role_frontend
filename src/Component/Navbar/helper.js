import { IconButton } from "@material-ui/core";

import WarehouseIcon from "@mui/icons-material/Warehouse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";

export const adminLink = [
  {
    id: 1,
    title: "Omborxona",
    link: "/omborxona",
    icon: (
      <IconButton>
        <WarehouseIcon />
      </IconButton>
    ),
  },
  {
    id: 2,
    title: "Sotuv bo'limi",
    link: "/sales",
    icon: (
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    ),
  },
  {
    id: 3,
    title: "Xodimlar bo'limi",
    link: "/xodimlar",
    icon: (
      <IconButton>
        <GroupIcon />
      </IconButton>
    ),
  },
  {
    id: 4,
    title: "Statistika",
    link: "/statistika",
    icon: (
      <IconButton>
        <BarChartIcon />
      </IconButton>
    ),
  },
];

export const callCenterLink = [
  {
    id: 1,
    title: "Call Center",
    link: "/",
    icon: (
      <IconButton>
        <WarehouseIcon />
      </IconButton>
    ),
  },
];

export const deliverLink = [
  {
    id: 1,
    title: "Yetkazmalar",
    link: "/",
    icon: (
      <IconButton>
        <WarehouseIcon />
      </IconButton>
    ),
  },
];
