import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";

const properties = [
  {
    id: 6,
    title: "Land on sale At Lele",
    price: "Rs. 1,00,000 per Anna",
    image: "/images/lele-land-1.jpg", // use public folder or import
    status: "Sale",
  },
  {
    id: 7,
    title: "Land on sale At Imadol",
    price: "Rs. 1,20,000 per Anna",
    image: "/images/imadol-land.jpg",
    status: "Sale",
  },
  // add more as needed
];

export default function RecentlyListedProperties() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <h1 className="text-3xl font-bold underline text-center mb-6">
        Recently Listed Properties
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative"
          >
            <span className="absolute top-2 left-2 bg-red-600 text-white font-semibold px-2 py-1 rounded">
              {property.status}
            </span>

            <Link href={`/property/${property.id}`}>
              <Image
                className="rounded-t-lg w-full h-48 object-cover"
                src={property.image}
                alt={property.title}
                width={400}
                height={250}
              />
            </Link>

            <div className="p-5">
              <Link href={`/property/${property.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {property.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {property.price}
              </p>
              <Link
                href={`/property/${property.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Sale</span>
            <Link href="#">
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Sale</span>
            <Link href="#">
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
           
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Rent</span>
            <Link href="#">
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

