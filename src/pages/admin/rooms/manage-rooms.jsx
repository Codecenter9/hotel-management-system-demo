import PageHeader from "../../../components/ui/page-header";
import {
  Button,
  Card,
  Chip,
  Dropdown,
  Header,
  Input,
  Label,
  Pagination,
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
import { useMemo, useState } from "react";
import rooms from "../../../constants/rooms";
import RoomDetails from "./room-details";

const stats = [
  {
    id: 1,
    value: rooms.filter((room) => room.status === "available").length,
    prefix: "",
    tag: "available rooms",
  },
  {
    id: 2,
    value: rooms.filter((room) => room.status === "booked").length,
    prefix: "",
    tag: "booked rooms",
  },
  {
    id: 3,
    value: rooms.filter((room) => room.status === "maintenance").length,
    prefix: "",
    tag: "under maintenance",
  },
  {
    id: 4,
    value: 4000 + "+",
    prefix: <DollarSign size={15} />,
    tag: "total collected",
  },
];

const ROWS_PER_PAGE = 10;
const ManageRooms = () => {
  const [selected, setSelected] = useState("available");
  const [selectedRoom, setSelectedRoom] = useState();

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(rooms.length / ROWS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return rooms.slice(start, start + ROWS_PER_PAGE);
  }, [page]);
  const start = (page - 1) * ROWS_PER_PAGE + 1;
  const end = Math.min(page * ROWS_PER_PAGE, rooms.length);

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
                    color={`${
                      stat.tag === "under maintenance"
                        ? "warning"
                        : stat.tag === "booked rooms"
                          ? "accent"
                          : "success"
                    }`}
                    size="sm"
                    variant="soft"
                    className="px-1 rounded-md capitalize"
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
                    className={`${styles.button}`}
                    variant="tertiary"
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
              <Button className={`${styles.button}`} variant="tertiary">
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
                    {paginatedItems.map((room, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>{room.room_number}</Table.Cell>
                        <Table.Cell>{room.room_type}</Table.Cell>
                        <Table.Cell>${room.price_per_night}</Table.Cell>
                        <Table.Cell>
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
                            className="px-1 rounded-md capitalize"
                          >
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
              <Table.Footer>
                <Pagination size="sm">
                  <Pagination.Summary className="text-gray-300">
                    {start} to {end} of {rooms.length} results
                  </Pagination.Summary>

                  <Pagination.Content className="flex items-center gap-2">
                    <Pagination.Item>
                      <Pagination.Previous
                        className="text-gray-100 bg-gray-800 hover:bg-gray-700 px-2 rounded-md transition"
                        isDisabled={page === 1}
                        onPress={() => setPage((p) => Math.max(1, p - 1))}
                      >
                        <Pagination.PreviousIcon />
                        Prev
                      </Pagination.Previous>
                    </Pagination.Item>

                    {pages.map((p) => (
                      <Pagination.Item key={p}>
                        <Pagination.Link
                          isActive={p === page}
                          onPress={() => setPage(p)}
                          className={`
                            px-3 py-1 rounded-full transition
                            ${
                              p === page
                                ? "bg-gray-700 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                            }
                          `}
                        >
                          {p}
                        </Pagination.Link>
                      </Pagination.Item>
                    ))}

                    <Pagination.Item>
                      <Pagination.Next
                        className="text-gray-100 bg-gray-800 hover:bg-gray-700 px-2 rounded-md transition"
                        isDisabled={page === totalPages}
                        onPress={() =>
                          setPage((p) => Math.min(totalPages, p + 1))
                        }
                      >
                        Next
                        <Pagination.NextIcon />
                      </Pagination.Next>
                    </Pagination.Item>
                  </Pagination.Content>
                </Pagination>
              </Table.Footer>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRooms;
