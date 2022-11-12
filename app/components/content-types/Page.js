import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      <h1 className="text-4xl mt-[30px] font-bold text-center">{blok.name}</h1>
      <div>
        {blok.body
          ? blok.body.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))
          : null}
      </div>
    </main>
  );
};

export default Page;
