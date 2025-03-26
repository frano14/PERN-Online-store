import useProductStore from "../store/useProductStore";
import ProductItemBlock from "./ProductItemBlock"


const SneakersWrapper = ({tag, title}) => {
  const { products } = useProductStore();
  const trendingProducts = products.filter(product => product.tag === tag);
  console.log("Sneakers Wrapper", trendingProducts, tag, title)
  return (
    <div className="py-8 ">
      <div className="flex justify-between items-center pb-4 ">
        <h3 className="text-[26px]">{title}</h3>
        <p className="text-[18px] text-[#FFFFFF60]">See more <span class="arrow">&#8594; </span> </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {trendingProducts.map((product, index) => (
          <ProductItemBlock key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default SneakersWrapper
