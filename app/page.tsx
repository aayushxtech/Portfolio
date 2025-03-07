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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsOverview />
          </div>
        </section>
      </div>
    </main>
  );
}
