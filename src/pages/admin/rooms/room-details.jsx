import { ArrowLeft, Check } from "lucide-react";
import PageHeader from "../../../components/ui/page-header";
import { Chip } from "@heroui/react";

const RoomDetails = ({ rooms, selectedRoom, setSelectedRoom }) => {
  const room = rooms.find((r) => r.id === selectedRoom);

  if (!room) {
    alert("room not found");
  }

  const basicInfos = [
    {
      label: "Room Type",
      value: room.room_type,
    },
    {
      label: "Floor Number",
      value: room.floor_number,
    },
    {
      label: "Room Number",
      value: room.room_number,
    },
    {
      label: "Price/Night",
      value: room.price_per_night,
    },
    {
      label: "Capacity",
      value: room.capacity,
    },
    {
      label: "Beds",
      value: room.beds,
    },
  ];
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
      <div className="w-full flex items-center flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 items-center flex-1 py-8 w-full border border-gray-700 rounded-md">
          <div className="w-full flex items-center justify-between gap-1">
            <hr className="flex-1 border-gray-700" />
            <div className="flex items-center justify-center h-20 w-20 p-1 rounded-full border border-gray-700 bg-gray-800/50">
              <div className="flex items-center justify-center h-full w-full rounded-full border border-gray-700 bg-gray-900">
                <h1 className="text-3xl font-semibold">{room.room_number}</h1>
              </div>
            </div>
            <hr className="flex-1 border-gray-700" />
          </div>
          <div className="w-full flex flex-col items-center gap-5 p-3">
            <div className="w-full flex items-center justify-center bg-gray-800/20 py-1 px-3 rounded-md">
              <h1 className="text-sm font-extralight">Basic Information</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              {basicInfos.map((info, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between border-b border-gray-800/30 py-1"
                >
                  <div className="flex items-center gap-1">
                    <Check size={15} className="text-emerald-500" />
                    <h1 className="text-sm font-normal">{info.label}</h1>
                  </div>
                  <h1 className="flex text-sm font-normal">{info.value}</h1>
                </div>
              ))}
            </div>
            <Chip
              color={`${
                room.status === "available"
                  ? "success"
                  : room.status === "booked"
                    ? "accent"
                    : "warning"
              }`}
              size="sm"
              variant="soft"
              className="flex items-center justify-center w-full py-1 rounded-md capitalize"
            >
              {" "}
              {room.status}
            </Chip>
          </div>
        </div>
        <div className="flex items-center p-3 flex-2 w-full border border-gray-700 rounded-md">
          box 2
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
