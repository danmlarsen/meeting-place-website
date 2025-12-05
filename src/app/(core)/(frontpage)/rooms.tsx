import { type TRoomWithTheme } from "@/types/TRoom";
import RoomList from "./rooms-room-list";

export default function Rooms({ rooms }: { rooms: TRoomWithTheme[] }) {
  return (
    <section aria-labelledby="other-rooms-title">
      <h2 id="other-rooms-title" className="sr-only">
        Other rooms
      </h2>
      <RoomList roomsData={rooms} />
    </section>
  );
}
