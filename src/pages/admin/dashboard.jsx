import { Card, Chip, Link } from "@heroui/react";
import PageHeader from "../../components/ui/page-header";
import {
  Users,
  BedDouble,
  CalendarCheck,
  CreditCard,
  XCircle,
  DollarSign,
} from "lucide-react";
import styles from "../../constants/styles";

const StatCard = ({ icon, title, value, linkText, tag }) => {
  return (
    <Card className={`${styles.card} flex flex-col gap-2 p-3`}>
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-md bg-gray-800/40">{icon}</div>
        <Chip color="accent" className="bg-gray-800 rounded-md">
          {tag}
        </Chip>
      </div>

      <div className="text-2xl font-bold text-white">{value}</div>

      <Card.Footer className="flex items-center justify-between gap-2 p-0 mt-1">
        <div className="text-sm text-gray-300 font-medium">{title}</div>
        <Link
          to="#"
          className="no-underline inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-primary/10 text-emerald-500 hover:bg-primary/20 transition"
        >
          {linkText}
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <PageHeader title="Dashboard" subtitle="Today’s system overview" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <StatCard
          icon={<Users className="text-blue-400 size-5" />}
          title="Daily Users"
          value="128"
          linkText="View"
          tag="Users"
        />

        <StatCard
          icon={<BedDouble className="text-green-400 size-5" />}
          title="Available Rooms"
          value="15"
          linkText="View"
          tag="Available"
        />

        <StatCard
          icon={<CalendarCheck className="text-indigo-400 size-5" />}
          title="Booked Today"
          value="35"
          linkText="View"
          tag="Booked"
        />

        <StatCard
          icon={<CreditCard className="text-emerald-400 size-5" />}
          title="Paid"
          value="12"
          linkText="View"
          tag="Paid"
        />

        <StatCard
          icon={<XCircle className="text-red-400 size-5" />}
          title="Unpaid"
          value="6"
          linkText="View"
          tag="Unpaid"
        />

        <StatCard
          icon={<DollarSign className="text-yellow-400 size-5" />}
          title="Revenue Today"
          value="$4,820"
          linkText="Report"
          tag="Collected"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
