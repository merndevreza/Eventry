import DetailsBody from "@/components/Details/DetailsBody";
import DetailsHero from "@/components/Details/DetailsHero";
import { getEventById } from "@/db/queries";

const detailsPage = async({params:{id}}) => {
   const event=await getEventById(id) 
   return (
      <main>
         <DetailsHero event={event}/>
         <DetailsBody event={event}/>
      </main>
   );
};

export default detailsPage;