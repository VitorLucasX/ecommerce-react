import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
    {
        icon: <TbTruckDelivery  className="text-4xl"/>,
        title: "Entrega grátis",
        desc: "Pedidos de todos os itens"
    },
    {
        icon: <RiRefund2Fill  className="text-4xl"/>,
        title: "Devolução e Reembolso",
        desc: ""
    },
    {
        icon: <TbDiscount  className="text-4xl"/>,
        title: "Desconto para membros",
        desc: "Sob encomenda acima de R$99,90",
    },
    {
        icon: <MdSupportAgent className="text-4xl"/>,
        title: "Suporte 24h",
        desc: "Contate-nos 24 horas por dia",
    },
];

const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {
            data.map((item) => (
                <FeatureCard key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                />
            ))}
    </div>
  )
}

export default Feature
