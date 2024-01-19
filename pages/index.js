import { mongooseConnect } from "@/Lib/mongoose";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";

export default function HomePage({product}){
  
  return(
    <div>
      <Header/>
      <Featured product={product}/>
    </div>
  )
}
export async function getServerSideProps(){
  const featuredProductId ='65a972ad2897ae035075cd24'
  await mongooseConnect()
  const product = await Product.findById(featuredProductId);
  return{ 
    props: {product: JSON.parse( JSON.stringify(product))},
  }
}