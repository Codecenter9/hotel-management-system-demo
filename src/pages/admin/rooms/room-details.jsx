import { ArrowLeft } from "lucide-react";
import PageHeader from "../../../components/ui/page-header";

const RoomDetails = ({ rooms, selectedRoom, setSelectedRoom }) => {
  const room = rooms.find((r) => (r.id = selectedRoom));
  if (!room) {
    alert("room not found");
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-5">
        <div
          onClick={() => setSelectedRoom()}
          className="p-1 rounded-full border cursor-pointer border-gray-700 hover:border-gray-500 transition-all duration-300"
        >
          <ArrowLeft size={24} className="text-gray-500" />
        </div>
        <PageHeader
          title={"Room " + room.room_number}
          subtitle="See all details about this room"
          noBorder
        />
      </div>
      <h1>selected room is {room.room_number}</h1>
    </div>
  );
};

export default RoomDetails;
