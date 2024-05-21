import DetailsInfo from "./DetailsInfo";
import DetailsMap from "./DetailsMap";

const DetailsBody = ({event}) => {
   return (
      <section className="container">
         <div className="grid grid-cols-5 gap-12 my-12">
            <DetailsInfo details={event?.details} swags={event?.swags}/>
            <DetailsMap location={event?.location}/>
         </div>
      </section>
   );
};

export default DetailsBody;