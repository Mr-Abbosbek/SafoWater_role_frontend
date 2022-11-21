import CallCenter from "../Component/Pages/CallCenter/SalesCenter";
import Yetkazilganlar from "../Component/Pages/Buyurtmalar/Yetkazilganlar";
import Omborxona from "../Component/Pages/Omborxona/Omborxona";
import Sales from "../Component/Pages/Sales/Sales";
import XodimlarRoute from "../Component/Pages/Xodimlar/XodimlarRoute";
import Statistika from "../Component/Pages/Statistika/Statistika";

export const callcenter = [{ path: "/pages", component: CallCenter }];

export const deliver = [{ path: "/pages", component: Yetkazilganlar }];

export const admin = [
  { path: "/pages", component: Omborxona },
  { path: "/pages/sales", component: Sales },
  { path: "/pages/xodimlar", component: XodimlarRoute },
  { path: "/pages/statistika", component: Statistika },
];
