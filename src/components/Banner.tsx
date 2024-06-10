const Banner = () => {
  return (
    <div className="container mt-32">
        <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
            <div className="h-[200px] md:h-[260px] bg-[url(/bg-1.png)] bg-cover
            bg-center rounded-xl p-8 md:p-16">
                <p className="text-topHeadingSecondary text-xl font-medium">
                    Promoção R$119,00 em todas as lojas 
                </p>
                <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">
                    Smarthphone BLU S91 Pro 2024
                </h2>
                <a href="#" className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium">
                    Compre Agora
                </a>
            </div>
            <div className="h-[260px] bg-[url(/bg-2.png)] bg-right bg-no-repeat rounded-xl 
            hidden lg:block"></div>
        </div>
    </div>
  )
}

export default Banner
