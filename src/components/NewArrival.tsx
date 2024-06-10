import ProductCard from "./ProductCard"

const products = [
    {
        id: 0,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 1,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 2,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 3,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 4,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 5,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
    {
        id: 6,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
]

const NewArrival = () => {
  return (
    <div className="container mt-32">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Produtos Novos</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {
                products.map((item) => (
                    <ProductCard key={item.id}
                    id={item.id}
                    img={item.img}
                    category={item.category}
                    title={item.title}
                    price={item.price} />
                ))}
        </div>
    </div>
  )
}

export default NewArrival
