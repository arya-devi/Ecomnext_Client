import { mongooseConnect } from "@/Lib/mongoose";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { Product } from "@/models/Product";

export default function CategoriesPage({ mobile, laptop, watch, headset }) {
  return (
    <>
      <Header />
      <Center>
        <Title>Mobiles Phone</Title>
        <ProductsGrid products={mobile} />
        <Title>Laptop</Title>
        <ProductsGrid products={laptop} />
        <Title>Watch</Title>
        <ProductsGrid products={watch} />
        <Title>Headset</Title>
        <ProductsGrid products={headset} />
      </Center>
    </>
  );
}
export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const mobile = products.filter((product) =>
    product.title.toLowerCase().includes("phone")
  );
  const laptop = products.filter((product) =>
    product.title.toLowerCase().includes("laptop")
  );
  const watch = products.filter((product) =>
    product.title.toLowerCase().includes("watch")
  );
  const headset = products.filter((product) =>
    product.title.toLowerCase().includes("headset")
  );
  return {
    props: {
      mobile: JSON.parse(JSON.stringify(mobile)),
      laptop: JSON.parse(JSON.stringify(laptop)),
      watch: JSON.parse(JSON.stringify(watch)),
      headset: JSON.parse(JSON.stringify(headset)),
    },
  };
}
