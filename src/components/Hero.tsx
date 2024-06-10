const Hero = () => {
  return (
    <div className="bg-[#e3edf6] mt-4">
        <div className="container grid md:grid-cols-2 py-8">
            <div className="flex items-center">
                <div className="max-w-[450px] space-y-4">
                <p className="text-topHeadingSecondary">
                    Compre por <span className="font-bold">R$5299,00</span>
                </p>
                <h2 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                    A melhor coleção de notebooks 2024
                </h2>
                <h3 className="text-2xl font-['Oregano,cursive']">
                    Oferta exclusiva <span className="text-red-600">-10%</span> off
                    essa semana
                </h3>

                <a href="#" className="inline-block bg-white rounded-md px-6 
                py-3 hover:bg-accent hover:text-white">
                    Compre agora
                </a>
                </div>
            </div>
            <div>
                <img className="ml-auto" src="hero.png" alt="hero image" />
            </div>
        </div>
    </div>
  )
}

export default Hero
