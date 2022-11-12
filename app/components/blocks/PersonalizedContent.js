import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { getCookie } from "react-use-cookie";

const PersonalizedContent = ({ blok }) => {
  const user_type = getCookie("user_type") || "";
  const variant = blok.variants.find((v) => v.user_type === user_type);

  return (
    <div {...storyblokEditable(blok)}>
      {variant &&
        variant.content.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};

export default PersonalizedContent;
