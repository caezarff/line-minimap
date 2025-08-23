import LineMinimap from "@/components/line-minimap";

export default function Home() {
  return (
    <main className="relative bg-neutral-900">
      <div
        className="max-w-3xl mx-auto px-8 max-md:px-6 max-sm:px-4"
        style={{ paddingTop: "28vh" }}
      >
        <article className="mb-16">
          <div className="flex items-center mb-6 max-sm:mb-4">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
              DE
            </div> */}
            <div>
              <div className="text-sm font-medium text-white">
                Julius Caezar
              </div>
              <div className="text-xs text-gray-400">dev_</div>
            </div>
          </div>

          <h1 className="text-xl font-bold text-white mb-6 max-sm:mb-4">
            The Art of Building Robust & Beautiful Applications
          </h1>

          <div className="prose prose-base max-md:prose-sm max-sm:text-sm text-gray-200 space-y-4 max-sm:space-y-4">
            <p>
              In today's digital landscape, the role of a design engineer has
              become increasingly crucial. We sit at the intersection of
              aesthetics and functionality, crafting applications that are not
              only visually stunning but also robust and performant.
            </p>
            <p>
              The modern user expects seamless experiences—interfaces that feel
              intuitive, load instantly, and work flawlessly across all devices.
              This demands a deep understanding of both design principles and
              engineering constraints.
            </p>
            <p>
              Minimalism isn't just a design trend; it's a philosophy that
              drives better user experiences. By removing unnecessary elements
              and focusing on what truly matters, we create applications that
              are both beautiful and highly functional.
            </p>

            <div className="flex justify-center my-8 max-sm:my-6">
              <div className="text-gray-500 text-lg">**</div>
            </div>

            <h1 className="text-xl max-md:text-xl max-sm:text-lg font-bold text-white mb-4 max-sm:mb-3 mt-8">
              The Foundation of Robust Applications
            </h1>

            <p>
              Building robust applications starts with solid architecture
              decisions. Every component, every interaction, and every animation
              must serve a purpose. We carefully consider performance
              implications, accessibility requirements, and scalability from day
              one.
            </p>
            <p>
              Modern tooling allows us to iterate quickly while maintaining high
              quality standards. TypeScript provides type safety, component
              libraries ensure consistency, and automated testing gives us
              confidence in our deployments.
            </p>
            <p>
              The best applications feel effortless to use because enormous
              effort went into making them simple. This paradox drives our daily
              work—we embrace complexity in our code so users never have to
              experience it.
            </p>

            <div className="flex justify-center my-8 max-sm:my-6">
              <div className="text-gray-500 text-lg">**</div>
            </div>

            <h1 className="text-xl max-md:text-xl max-sm:text-lg font-bold text-white mb-4 max-sm:mb-3 mt-8">
              Crafting Minimalist Experiences
            </h1>

            <p>
              True minimalism in digital products isn't about removing
              features—it's about presenting complexity in digestible, elegant
              ways. Every pixel serves a purpose, every interaction feels
              natural, and every transition guides the user's attention.
            </p>
            <p>
              We obsess over details that users might never consciously notice:
              the perfect spacing between elements, the subtle shadows that
              create depth, the micro-interactions that provide feedback. These
              details compound to create experiences that feel magical.
            </p>
            <p>
              The goal is to create applications so intuitive that they become
              invisible—tools that amplify human capability without drawing
              attention to themselves. This is the art of design engineering:
              making the complex feel simple.
            </p>
          </div>
        </article>

        <div className="text-center text-gray-400 my-8">**</div>

        <article className="mb-16 max-sm:mb-12">
          <h1 className="text-xl font-bold text-gray-200 mb-6 max-sm:mb-4">
            The Future of Design Engineering
          </h1>
          <div className="prose prose-lg max-md:prose-base max-sm:prose-sm text-gray-200 space-y-6 max-sm:space-y-4">
            <p>
              As we look ahead, the role of design engineers will continue to
              evolve. The convergence of AI, machine learning, and design tools
              is opening new possibilities for creating intelligent, adaptive
              interfaces that respond to user behavior in real-time.
            </p>
            <p>
              The future belongs to those who can seamlessly blend technical
              expertise with design sensibility, creating applications that are
              not just functional, but truly delightful to use. This is the
              essence of modern design engineering.
            </p>
          </div>
        </article>

        <footer className="mt-16 max-sm:mt-12 pb-8 max-sm:pb-6">
          <div className="flex justify-between items-center py-6 border-t border-neutral-800">
            <div className="flex items-center text-neutral-400 hover:text-white transition-colors cursor-pointer">
              <div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div className="text-xs text-neutral-500">Prev</div>
                </div>
                <div className="text-sm font-medium mt-1">Developing Taste</div>
              </div>
            </div>

            <div className="flex items-center text-neutral-400 hover:text-white transition-colors cursor-pointer">
              <div className="text-right">
                <div className="flex items-center justify-end">
                  <div className="text-xs text-neutral-500">Next</div>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="text-sm font-medium mt-1">
                  Animating in Public
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <LineMinimap />
    </main>
  );
}
