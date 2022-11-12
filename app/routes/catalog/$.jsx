import Layout from "../../components/core/Layout";
import Catalog from "../../components/blocks/Catalog";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getStoryblokApi } from "@storyblok/react";
import { getCookie, setCookie } from "react-use-cookie";

export default function Page() {
  let { products, category } = useLoaderData();

  if (!getCookie("user_type") && category) {
    setCookie("user_type", category);
  }

  return (
    <Layout>
      <main>
        <h1 className="text-4xl mt-[30px] font-bold text-center">{category}</h1>
        <div>
          <Catalog products={products} />
        </div>
      </main>
    </Layout>
  );
}

export const loader = async ({ params }) => {
  let category = params["*"] ?? "";
  category = category.endsWith("/") ? category.slice(0, -1) : category;

  let filter_query = {
    component: {
      in: "product",
    },
  };

  if (category) {
    filter_query.category = {
      in: category,
    };
  }

  let sbParams = {
    version: "draft",
    resolve_links: "url",
    filter_query: filter_query,
  };

  const storyblokApi = getStoryblokApi();
  const products = await storyblokApi.getAll("cdn/stories", sbParams);

  return json({ products: products, category: category });
};
