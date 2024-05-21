import EventsList from "@/components/Home/EventsList";
import SearchHeader from "@/components/Home/SearchHeader";

export default function Home() {
  return (
    <main className="py-8">
      <section className="container">
        <SearchHeader/>
        <EventsList/>
      </section>
    </main>
  );
}
