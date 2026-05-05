import PageHeader from "../../../components/ui/page-header";
import {
  Button,
  Card,
  Chip,
  Dropdown,
  Header,
  Input,
  Label,
  Table,
} from "@heroui/react";
import styles from "../../../constants/styles";
import {
  DollarSign,
  Eye,
  Filter,
  Pencil,
  Plus,
  Trash,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import rooms from "../../../constants/rooms";
import RoomDetails from "./room-details";

const ManageRooms = () => {
  const [selected, setSelected] = useState("available");
  const [selectedRoom, setSelectedRoom] = useState();

  const stats = [
    {
      id: 1,
      value: 3,
      prefix: "",
      tag: "available rooms",
    },
    {
      id: 2,
      value: 5,
      prefix: "",
      tag: "booked rooms",
    },
    {
      id: 3,
      value: 2,
      prefix: "",
      tag: "under maintainance",
    },
    {
      id: 4,
      value: 400,
      prefix: <DollarSign size={15} />,
      tag: "total collected",
    },
  ];

  return (
    <div className="flex flex-col gap-3 pb-10">
      {selectedRoom ? (
        <RoomDetails
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          rooms={rooms}
        />
      ) : (
        <div className="flex flex-col gap-3">
          <PageHeader title="Rooms" subtitle="Manage all hotel rooms" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
            {stats.map((stat) => (
              <Card
                key={stat.id}
                className={`${styles.card} flex flex-col gap-5 p-3`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center text-2xl font-bold text-white">
                    {stat.prefix}
                    {stat.value}
                  </div>
                  <TrendingUp size={15} className="text-emerald-500" />
                </div>

                <Card.Footer className="flex items-center justify-end gap-2 p-0 mt-1">
                  <Chip
                    color="accent"
                    className={
                      stat.tag != "under maintainance"
                        ? "bg-gray-800 rounded-md text-emerald-500 capitalize"
                        : "bg-amber-800 rounded-md text-white capitalize"
                    }
                  >
                    {stat.tag}
                  </Chip>
                </Card.Footer>
              </Card>
            ))}
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-md p-3 text-gray-100">
            <div className="w-full flex gap-3 p-4 items-center justify-between">
              <div className="w-full flex gap-3 items-center">
                <Input
                  aria-label="Name"
                  className={`${styles.input} w-full hidden lg:flex max-w-1/2`}
                  placeholder="Search..."
                />
                <Dropdown>
                  <Button
                    aria-label="Menu"
                    className="rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Filter size={24} />
                  </Button>
                  <Dropdown.Popover className="min-w-[256px] bg-gray-800 rounded-md border border-gray-700 text-gray-100">
                    <Dropdown.Menu
                      selectedKeys={selected}
                      selectionMode="single"
                      onSelectionChange={setSelected}
                    >
                      <Dropdown.Section>
                        <Header>Select a filter</Header>
                        <Dropdown.Item
                          id="available"
                          textValue="Available"
                          className="text-gray-100 hover:bg-gray-700 rounded-md flex items-center gap-2 py-2 transition-colors"
                        >
                          <Dropdown.ItemIndicator />
                          <Label className="text-gray-100">Available</Label>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="booked"
                          textValue="Booked"
                          className="text-gray-100 hover:bg-gray-700 rounded-md flex items-center gap-2 py-2 transition-colors"
                        >
                          <Dropdown.ItemIndicator />
                          <Label className="text-gray-100">Booked</Label>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="maintainance"
                          textValue="Maintainance"
                          className="text-gray-100 hover:bg-gray-700 rounded-md flex items-center gap-2 py-2 transition-colors"
                        >
                          <Dropdown.ItemIndicator />
                          <Label className="text-gray-100">Maintainance</Label>
                        </Dropdown.Item>
                      </Dropdown.Section>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </div>
              <Button className={`${styles.button}`}>
                <Plus size={18} />
                Add Rooms
              </Button>
            </div>
            <Table className="bg-transparent text-gray-100">
              <Table.ResizableContainer className="scrollbar-hide">
                <Table.Content
                  aria-label="Rooms table"
                  className="min-w-175 bg-transparent"
                >
                  <Table.Header className="bg-gray-800/70 text-gray-300">
                    <Table.Column id="room_number" minWidth={120}>
                      Room No
                      <Table.ColumnResizer />
                    </Table.Column>

                    <Table.Column id="room_type" minWidth={180}>
                      Room Type
                      <Table.ColumnResizer />
                    </Table.Column>

                    <Table.Column id="price" minWidth={120}>
                      Price / Night
                    </Table.Column>

                    <Table.Column id="status" minWidth={120}>
                      Status
                    </Table.Column>
                    <Table.Column isRowHeader minWidth={130} className="">
                      Actions
                    </Table.Column>
                  </Table.Header>

                  <Table.Body>
                    {rooms.map((room) => (
                      <Table.Row key={room.id}>
                        <Table.Cell>{room.room_number}</Table.Cell>
                        <Table.Cell>{room.room_type}</Table.Cell>
                        <Table.Cell>${room.price_per_night}</Table.Cell>
                        <Table.Cell>
                          <Chip color="success" size="sm" variant="soft">
                            {room.status}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center gap-1">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="secondary"
                              className="bg-gray-700 px-3"
                              onClick={() => setSelectedRoom(room.id)}
                            >
                              <Eye size={15} />
                            </Button>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="primary"
                              className="px-3"
                            >
                              <Pencil size={15} />
                            </Button>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="danger-soft"
                              className="px-3"
                            >
                              <Trash size={15} />
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ResizableContainer>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRooms;
