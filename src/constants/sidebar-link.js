import {
  LayoutDashboard,
  Bed,
  Calendar,
  Users,
  UserCog,
  CreditCard,
  BarChart3,
  Settings,
  LogIn,
  ShoppingCart,
  User,
  PlusCircle,
  List,
  Grid,
} from "lucide-react";

const sidebarLinks = {
  admin: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Room Management",
      icon: Bed,
      path: "/admin/rooms",
    },
    {
      title: "Bookings",
      icon: Calendar,
      path: "/admin/bookings",
    },
    {
      title: "Customers",
      icon: Users,
      path: "/admin/customers",
    },
    {
      title: "Staff Management",
      icon: UserCog,
       path: "/admin/users",
    },
    {
      title: "Payments",
      icon: CreditCard,
       path: "/admin/payments",
    },
    {
      title: "Reports",
      icon: BarChart3,
       path: "/admin/reports",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ],

  reception: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/reception/dashboard",
    },
    {
      title: "Bookings",
      icon: Calendar,
     path: "/reception/bookings",
    },
    {
      title: "Check-In / Check-Out",
      icon: LogIn,
     path: "/reception/check-in-out",
    },
    {
      title: "Rooms Status",
      icon: Bed,
      path: "/reception/rooms-status",
    },
    {
      title: "Customers",
      icon: Users,
      path: "/reception/customers",
    },
    {
      title: "Payments",
      icon: CreditCard,
      path: "/reception/payments",
    },
  ],

  customer: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/customer/dashboard",
    },
    {
      title: "My Bookings",
      icon: Calendar,
      path: "/customer/bookings",
    },
    {
      title: "Book Room",
      icon: Bed,
      path: "/customer/book-room",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      path: "/customer/orders",
    },
    {
      title: "Profile",
      icon: User,
      path: "/customer/profile",
    },
  ],

  waiter: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/waiter/dashboard",
    },
    {
      title: "Take Order",
      icon: PlusCircle,
      path: "/waiter/orders/create",
    },
    {
      title: "My Orders",
      icon: List,
      path: "/waiter/orders",
    },
    {
      title: "Tables",
      icon: Grid,
      path: "/waiter/tables",
    },
  ],
};

export default sidebarLinks;