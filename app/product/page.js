import Link from "next/link"
import Image from "next/image"
import MainWrapper from "../../components/main-wrapper"
import productData from "../../data/product.json"
import { ShoppingBag, ExternalLink } from "lucide-react"

export default function Product() {
  return (
    <MainWrapper>
      <section id="product" className="py-20">
        <div className="section-title mb-6 lg:mb-12">
          <p
            className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
            sm:text-7xl sm:-mt-12
            lg:right-auto lg:left-24 lg:text-8xl 
            xl:-mt-16
          ">
            <b>Product</b>
          </p>
          <div
            className="flex flex-wrap gap-6 justify-center items-center
          lg:flex-nowrap lg:justify-between">
            <div className="flex justify-center items-center gap-6">
              <h1
                className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
              sm:text-5xl">
                Product
              </h1>
              <div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-12 xl:gap-x-6 ">
            {productData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white-primary dark:bg-gray-800 border border-white-secondary dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 h-full"
              >
                <div className="relative w-full h-48 sm:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={"/" + item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.categories && item.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white-secondary text-black-secondary dark:bg-gray-700 dark:text-white-primary" // Warna dari span category sebelumnya
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl line-clamp-2 sm:text-2xl font-bold mb-2 text-black-primary dark:text-white-primary flex-grow">
                    {item.title}
                  </h2>
                  {item.description && (
                      <p className="text-sm line-clamp-3 text-black-secondary dark:text-white-secondary mb-4">
                          {item.description}
                      </p>
                  )}
                  <div className="mt-auto flex">
                    {item.priceSale && item.priceSale !== "" ? (
                      <div className="flex flex-col items-baseline mb-4">
                        <span className="text-2xl font-bold text-black-primary dark:text-white-primary">
                          Rp{item.priceSale}
                        </span>
                        {item.price && item.price !== "" && (
                          <s className="text-md text-red-500">
                            Rp{item.price}
                          </s>
                        )}
                      </div>
                    ) : (
                      item.price && item.price !== "" && (
                        <p className="text-2xl font-bold text-red-500 mb-4">
                          Rp{item.price}
                        </p>
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mt-4 justify-center text-sm lg:justify-start lg:text-lg">
                  {item.linkUrl && item.linkUrl.length > 0 && item.linkTitle && item.linkTitle.length > 0 && (
                    item.linkUrl.map((linkUrlItem, linkIndex) => {
                      const title = item.linkTitle[linkIndex];

                      let IconComponent = ShoppingBag;
                      if (title.includes("Preview") || title.includes("Download Sampel")) {
                        IconComponent = ExternalLink;
                      }

                      return (
                        <Link
                          key={linkIndex}
                          href={linkUrlItem}
                          target="_blank"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-primary text-white-primary! hover:bg-blue-secondary transition-colors duration-200 shadow-lg"
                        >
                          <IconComponent className="mr-2 h-5 w-5" />
                          {title}
                        </Link>
                      );
                    })
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}