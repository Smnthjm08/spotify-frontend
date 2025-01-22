import useFeatured from "@/hooks/use-featured";
import FeaturedSkeleton from "../skeletons/featured-skeleton";

export const FEATURED = "featured";

export default function FeaturedCard() {
  const { featuredSongs, isLoading, isError } = useFeatured();

  console.log("featuredSongs", featuredSongs);

  if (isLoading) return (
    <>
    <FeaturedSkeleton />
    </>
  )

  if (isError) return <div>Error...</div>;

  return (
    <div>
      <div>Featured</div>
    </div>
  );
}
