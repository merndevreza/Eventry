import DetailsInfo from "./DetailsInfo";
import DetailsMap from "./DetailsMap";

const DetailsBody = () => {
   return (
      <section className="container">
         <div className="grid grid-cols-5 gap-12 my-12">
            <DetailsInfo/>
            <DetailsMap/>
         </div>
      </section>
   );
};

export default DetailsBody;