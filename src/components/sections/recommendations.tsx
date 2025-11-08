import Image from "next/image"
import recommendations from "@/data/recommendations"
import { Card, CardContent } from "@/components/ui/card"
import { FaStar, FaQuoteLeft } from "react-icons/fa"

function Recommendations() {
  return (
    <section
      id="recommendations"
      className="py-20 px-4 bg-neutral-50"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <FaStar className="h-8 w-8 text-neutral-700" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">
              Recommendations
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            What colleagues and collaborators have to say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((recommendation, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <CardContent className="p-6 space-y-6 flex flex-col h-full">
                {/* Quote Icon and Date */}
                <div className="flex items-start justify-between flex-shrink-0">
                  <FaQuoteLeft className="h-6 w-6 text-neutral-300" />
                  <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {recommendation.receivedOn}
                  </span>
                </div>

                {/* Recommendation Text - grows to fill available space */}
                <div className="flex-grow">
                  <p className="text-neutral-700 leading-relaxed text-sm md:text-base line-clamp-[12]">
                    &quot;{recommendation.text}&quot;
                  </p>
                </div>

                {/* Author Info - fixed height section */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 flex-shrink-0">
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-neutral-200 bg-neutral-100">
                    <Image
                      src={recommendation.image}
                      alt={recommendation.name}
                      fill
                      className="object-cover object-center"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-950 text-sm truncate">
                      {recommendation.name}
                    </p>
                    <p className="text-xs text-neutral-600 truncate">
                      {recommendation.position}
                    </p>
                    <p className="text-xs text-neutral-500 truncate">
                      {recommendation.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations
