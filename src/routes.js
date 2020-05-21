/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import chat from './Component/Chat/Chat'
var dashRoutes = [
  {
    path: "/chat",
    name: "Dashboard",
    icon: "design_app",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Icons",
    icon: "design_image",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Maps",
    icon: "location_map-big",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "User Profile",
    icon: "users_single-02",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Table List",
    icon: "files_paper",
    component: chat,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: chat,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/chat",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: chat,
    layout: "/admin"
  }
];
export default dashRoutes;
