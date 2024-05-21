import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
import EventSummary from "../EventSummary";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl}
        alt={event?.name}
        className="w-full"
        width={400}
        height={200}
      />

      <div className="p-3">
        <Link href={`/details/${event?.id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <EventSummary event={event} />
        <ActionButtons />
      </div>
    </div>
  );
};

export default EventCard;
