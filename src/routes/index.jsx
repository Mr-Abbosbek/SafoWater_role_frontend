import Yetkazilganlar from "../pages/Buyurtmalar/Yetkazilganlar";
import Omborxona from "../pages/Omborxona/Omborxona";
import Sales from "../pages/Sales/Sales";
import Statistika from "../pages/Statistika/Statistika";
import XodimlarRoute from "../pages/Xodimlar/XodimlarRoute";
import CallCenter from "../pages/Buyurtmalar/Yetkazilganlar";

export const adminRoute = [
  { path: "/omborxona", component: Omborxona },
  { path: "/sales", component: Sales },
  { path: "/xodimlar", component: XodimlarRoute },
  { path: "/statistika", component: Statistika },
];

export const callCenter = [{ path: "/callcenter", component: CallCenter }];

export const deliver = [{ path: "/deliver", component: Yetkazilganlar }];
