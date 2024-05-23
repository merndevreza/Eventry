import Image from "next/image";
import ActionButtons from "../ActionButtons";
import EventSummary from "../EventSummary";

const DetailsHero = ({ event }) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={event?.imageUrl}
          alt="Event 1"
          className="h-[450px] mx-auto"
          width={1200}
          height={450}
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event?.name}</h1>
          <EventSummary event={event} />
        </div>

        <ActionButtons
          eventId={event?.id}
          interested_ids={event?.interested_ids}
          going_ids={event?.going_ids}
          alignRight={true}
        />
      </div>
    </section>
  );
};

export default DetailsHero;
