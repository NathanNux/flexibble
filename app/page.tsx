import { LoadMore, Posts, Categories } from "@/components";


export default function Home() {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      <Posts />
      <LoadMore />
    </section>
  );
}
