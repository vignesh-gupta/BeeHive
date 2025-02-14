import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircle, PackageCheck, Headphones } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Guaranteed Quality", // from lucide-react
    Icon: CheckCircle,
    description:
      "Every product on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "Instant Delivery",
    Icon: PackageCheck, // from lucide-react
    description:
      "Get your digital assests delivered to your with in 2 hours or get it for free if we fail to do so ",
  },
  {
    name: "Excellent Customer Support", // from lucide-react
    Icon: Headphones,
    description:
      "Having problem buying assests or facing problem returning it? our 24x7 customer support is at your disposal ",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-[18vh] mx-auto text-center flex flex-col items-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-blue-600">BeeHive, </span>
            buzzing with deals, blooming with savings.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to BeeHive. Relax and shop with confidence every assests is
            verified to meet our top-notch standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className={buttonVariants({ className: "hover:bg-gray-900" })}
            >
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Brand new"
        />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-900">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full text-lg bg-gray-100 text-blue-600">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-blue-600">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-300">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
