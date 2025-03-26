import { Rocket } from "lucide-react";

const ProductItemBlock = ({product}) => {

  return (
    <div className='flex flex-col justify-between'>
      <div>

      <div className="h-[250px] flex justify-center items-center overflow-hidden">
          <img src={product.image_url} alt="Sneakers" className="rounded-xl h-full w-full object-cover"/>
        </div>
        <p className='text-[20px] mt-3'>{product.title}</p>
        <p className='text-[12px] text-[#FFFFFF60] my-1'>{product.description}</p>
        <div className="flex gap-3 items-center">
          <p className={`bg-yellow text-[24px] font-bold tracking-tighter bg-yellow-400 text-black mb-1 ${product.discount_price ? '' : 'hidden'}`}>${product.discount_price}</p>
          <p className={`font-bold tracking-tighter ${product.discount_price ? 'line-through text-[20px]' : ' text-[24px]'}`}>${Math.round(product.price)}</p>
        </div>
      </div>
      <div className='flex justify-between mt-1 mb-3'>
        <div className='rounded-md bg-[#FFFFFF15] p-1 w-[fit-content]'>
          <p className='text-[14px]'>{product.sold_count} sold</p>
        </div>
        <div className='rounded-md bg-[#FFFFFF15] px-2 py-1 w-[fit-content] flex items-center justify-center cursor-pointer relative'>
            <Rocket size={16} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default ProductItemBlock
