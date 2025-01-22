import Image from "next/image"

const partners = [
  { name: "Cisco", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttZ-BFWy_u0fgLmCwlzL5OKKnOddS9GUh2g&s" },
  { name: "Amazon Web Services", logo: "https://www.padok.fr/hubfs/Website%202021/Illustrations/Aws-padok.png" },
  { name: "Microsoft Azure", logo: "https://swimburger.net/media/0zcpmk1b/azure.jpg" },
  { name: "Google Cloud Platform", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcl6bNz164hBmV0cRsPsc1EOAyZQPiefrRHQ&s" },
  { name: "Oracle Cloud", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kUS0JS4hfbWsqt6bZxKYBFvNyJRyjnCsQQ&s" },
]

export function TechnologyPartners() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Technology Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={80}
                className="max-w-[200px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

