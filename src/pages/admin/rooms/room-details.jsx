import { ArrowLeft, Check, Pencil, Plus, Trash, X } from "lucide-react";
import PageHeader from "../../../components/ui/page-header";
import { Chip, EmptyState, Separator } from "@heroui/react";

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
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="h-max flex flex-col gap-5 items-center flex-1 py-8 w-full border border-gray-700 rounded-md">
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
              {room.status}
            </Chip>
          </div>
        </div>
        <div className="h-max flex items-center p-3 flex-2 py-5 w-full border border-gray-700 rounded-md">
          <div className="w-full flex flex-col items-center gap-5 p-3">
            <div className="w-full flex items-center justify-center bg-gray-800/20 py-1 px-3 rounded-md">
              <h1 className="text-normal font-extralight">
                Aditional Information
              </h1>
            </div>
            <div className="w-full flex items-center gap-5">
              <div className="flex flex-1 flex-col gap-5">
                <div className="w-full flex items-center justify-center bg-gray-800/20 py-1 px-3 rounded-md">
                  <h1 className="text-sm font-extralight">Amenities</h1>
                </div>
                <div className="w-full flex flex-col items-center gap-3">
                  {Object.entries(room.amenities).map(
                    ([amenity, value], index) => (
                      <div
                        key={index}
                        className="w-full flex items-center border-b border-gray-800/30 py-1"
                      >
                        <div className="flex items-center gap-1">
                          {value ? (
                            <Check size={15} className="text-emerald-500" />
                          ) : (
                            <X size={15} className="text-red-500" />
                          )}
                          <h1 className="text-sm font-normal">{amenity}</h1>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="w-full flex items-center justify-center bg-gray-800/20 py-1 px-3 rounded-md">
                  <h1 className="text-sm font-extralight">Description</h1>
                </div>
                <p className="text-sm font-extralight text-gray-300">
                  {room.description}
                </p>

                <div className="w-full mt-5 flex items-center justify-center bg-amber-800 py-1 px-3 rounded-md">
                  <h1 className="text-sm font-extralight">Actions</h1>
                </div>
                <div className="w-full flex items-center gap-3">
                  <div className="w-full flex items-center gap-2 justify-center bg-cyan-800 py-1 px-3 rounded-md">
                    <Pencil size={15} />
                    <p className="text-xs font-extralight">Edit Room</p>
                  </div>
                  <div className="w-full flex items-center gap-2 justify-center bg-red-800 py-1 px-3 rounded-md">
                    <Trash size={15} />
                    <p className="text-xs font-extralight">Remove Room</p>
                  </div>
                </div>
              </div>
              <Separator orientation="vertical" className="bg-gray-800" />
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-full flex items-center justify-center bg-gray-800/20 py-1 px-3 rounded-md">
                    <h1 className="text-sm font-extralight">Uploaded Files</h1>
                  </div>
                  <div className="w-full flex items-center justify-center bg-emerald-500 gap-1 py-1 px-3 rounded-md">
                    <Plus size={15} />
                    <h1 className="text-sm font-extralight">Upload Files</h1>
                  </div>
                </div>

                {room.images && room.images.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {room.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-full flex items-center justify-between border-b border-gray-800/30 py-1"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={image.path}
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                          />
                          <span className="text-xs text-gray-300">
                            Image {index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1 py-5 border border-gray-700 rounded-md">
                    <EmptyState />
                    <p className="text-sm font-extralight">
                      Please upload files
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
