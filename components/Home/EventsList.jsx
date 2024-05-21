import EventCard from "./EventCard";

const EventsList = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
         <EventCard/>
         <EventCard/>
         <EventCard/>
         <EventCard/>
      </div>
   );
};

export default EventsList;