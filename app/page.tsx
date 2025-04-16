import HeroSection from '@/components/hero-section';
import MissionStatsSection from '@/components/mission-stats-section';
import ImageSection from '@/components/image-section';
import ValuesSection from '@/components/values-section';
// import TeamsSection from "@/components/teams-section";
// import PlayersSection from "@/components/players-section";
// import BlogSection from "@/components/blog-section";

export default function HomePage() {
  return (
    <main className="isolate">
      <HeroSection />
      <MissionStatsSection />
      <ImageSection />
      <ValuesSection />
      {/*<TeamsSection />*/}
      {/*<PlayersSection />*/}
      {/*<BlogSection />*/}
    </main>
  );
}
