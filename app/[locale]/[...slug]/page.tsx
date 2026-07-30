import {
  NotFoundHero,
  NotFoundActions,
  NotFoundSearch,
  PopularProducts,
} from "@/components/not-found";

export default function CatchAllPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] py-16">
      <div className="mx-auto max-w-7xl space-y-14 px-4">
        <NotFoundHero />

        <NotFoundActions />

        <NotFoundSearch />

        <PopularProducts />
      </div>
    </main>
  );
}
