import Layout from "../components/core/Layout";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page() {
  let story = useLoaderData();
  story = useStoryblokState(story, {
    version: "draft",
    resolve_links: "url",
  });

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  slug = slug.endsWith("/") ? slug.slice(0, -1) : slug;

  let sbParams = {
    version: "draft",
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return json(data?.story);
};
