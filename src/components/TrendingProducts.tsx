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
    {
        id: 7,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming headphone",
        price: "1199.00"
    },
]

const TrendingProducts = () => {
  return (
    <div className="container mt-32">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Produtos em Alta</h2>
            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                <div className="text-black cursor-pointer">Novos</div>
                <div className="cursor-pointer">Destaques</div>
                <div className="cursor-pointer">Mais vendidos</div>
            </div>
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

export default TrendingProducts
