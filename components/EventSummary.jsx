const EventSummary = ({ event }) => {
  return (
    <>
      <p className="text-[#9C9C9C] text-base mt-1">{event?.location}</p>
      <div className="text-[#737373] text-sm mt-1">
          <span> {event?.interested_ids.length} Interested</span>
          <span> | </span>
          <span>{event?.going_ids.length} Going</span>
        </div>
    </>
  );
};

export default EventSummary;
