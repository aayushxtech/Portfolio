import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectsOverview from "@/components/ProjectOverview";

export default function Home() {
  return (
    <main
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 
      overflow-x-hidden selection:bg-blue-500/30 selection:text-white"
    >
      {/* Background Gradient */}
      <div
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
        from-blue-900/20 via-gray-900/0 to-transparent pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative">
        {/* Hero Section - Added pt-20 for mobile and pt-24 for larger screens */}
        <section className="min-h-[100dvh] flex items-center justify-center py-16 sm:py-24 pt-20 sm:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-[100dvh] flex items-center justify-center py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-[100dvh] flex items-center justify-center py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ProjectsOverview />
          </div>
        </section>
      </div>
    </main>
  );
}
