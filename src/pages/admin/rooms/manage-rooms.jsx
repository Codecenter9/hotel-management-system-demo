import PageHeader from "../../../components/ui/page-header";
import {
  Button,
  Chip,
  Dropdown,
  Header,
  Input,
  Label,
  Table,
} from "@heroui/react";
import styles from "../../../constants/styles";
import { Eye, Filter, Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";

const ManageRooms = () => {
  const [selected, setSelected] = useState("available");

  return (
    <div className="flex flex-col gap-3">
      <PageHeader title="Rooms" subtitle="Manage all hotel rooms" />

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
              <Dropdown.Popover className="min-w-[256px] bg-gray-800 border border-gray-700 text-gray-100">
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

                <Table.Column id="floor" minWidth={100}>
                  Floor
                  <Table.ColumnResizer />
                </Table.Column>

                <Table.Column id="price" minWidth={120}>
                  Price / Night
                </Table.Column>

                <Table.Column id="status" minWidth={120}>
                  Status
                </Table.Column>
                <Table.Column className="text-end">Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>101</Table.Cell>
                  <Table.Cell>Deluxe Room</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>$33</Table.Cell>
                  <Table.Cell>
                    <Chip color="success" size="sm" variant="soft">
                      Available
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        <Eye size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="primary">
                        <Pencil size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger-soft">
                        <Trash size={15} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>102</Table.Cell>
                  <Table.Cell>Standard Room</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>$25</Table.Cell>
                  <Table.Cell>
                    <Chip color="accent" size="sm" variant="soft">
                      Booked
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        <Eye size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="primary">
                        <Pencil size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger-soft">
                        <Trash size={15} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>201</Table.Cell>
                  <Table.Cell>Executive Room</Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>$45</Table.Cell>
                  <Table.Cell>
                    <Chip color="success" size="sm" variant="soft">
                      Available
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        <Eye size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="primary">
                        <Pencil size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger-soft">
                        <Trash size={15} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>202</Table.Cell>
                  <Table.Cell>Family Room</Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>$60</Table.Cell>
                  <Table.Cell>
                    <Chip color="warning" size="sm" variant="soft">
                      Maintenance
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        <Eye size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="primary">
                        <Pencil size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger-soft">
                        <Trash size={15} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>301</Table.Cell>
                  <Table.Cell>Presidential Suite</Table.Cell>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>$120</Table.Cell>
                  <Table.Cell>
                    <Chip color="success" size="sm" variant="soft">
                      Available
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        <Eye size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="primary">
                        <Pencil size={15} />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger-soft">
                        <Trash size={15} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ResizableContainer>
        </Table>
      </div>
    </div>
  );
};

export default ManageRooms;
