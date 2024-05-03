import CommentSection from "@/component/CommentSection";
import NavBar from "@/component/NavBar";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiDotsThree, PiDotsThreeCircle } from "react-icons/pi";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogItem = () => {
  const markdown = `
  ![Image Alt Text](https://picsum.photos/1000/300)


  
  In the vast expanse of the universe, where stars twinkle like distant diamonds and galaxies spiral in cosmic dances, lies the realm of deep space—an infinite canvas waiting to be explored. Join me on an extraordinary journey as we embark on a quest to unravel the mysteries hidden within the darkest corners of the cosmos.
  

  
  Billions of years ago, in a cataclysmic event known as the Big Bang, the universe burst into existence from a singularity smaller than an atom. In the blink of an eye, space and time unfurled like an endless tapestry, giving birth to galaxies, stars, and planets.
  
  
  Humanity has always been drawn to the unknown, driven by an insatiable curiosity to discover what lies beyond our terrestrial shores. With advancements in technology, we've ventured farther than ever before, sending probes to explore distant planets and telescopes to peer into the depths of space.
  
  ## The Search for Extraterrestrial Life
  
  One of the most tantalizing questions we face is whether we are alone in the universe. The discovery of exoplanets—worlds orbiting distant stars—has fueled speculation about the existence of extraterrestrial life. From the icy moons of Jupiter to the methane seas of Titan, scientists are scouring the cosmos for signs of alien existence.
  
  ## Unraveling Black Holes
  
  Among the most enigmatic entities in the universe are black holes—regions of space where gravity is so intense that nothing, not even light, can escape. These cosmic behemoths devour everything in their path, warping space and time in ways that defy comprehension. Yet, they may hold the key to unlocking the secrets of the universe's birth and ultimate fate.
  
  ## The Mysteries of Dark Matter and Dark Energy
  
  Despite our best efforts, much of the universe remains shrouded in darkness. Dark matter, an invisible substance that outweighs ordinary matter by a factor of five, binds galaxies together in invisible tendrils. Meanwhile, dark energy, a mysterious force driving the universe's accelerated expansion, defies explanation.
  
  ## Conclusion: A Cosmic Odyssey
  
  As we gaze upon the twinkling stars that adorn the night sky, we are reminded of our place in the cosmos—tiny specks adrift in an ocean of galaxies. Yet, with each discovery, we inch closer to unlocking the universe's deepest secrets. So let us continue our cosmic odyssey, guided by the light of curiosity and the spirit of exploration.
  
  
  Join the conversation and share your thoughts on the wonders of deep space!
  
`;
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-4xl text-bold mb-8">
          Common side effects of not drinking
        </h1>
        <p className="text-muted text-2xl">
          By rejecting alcohol, you reject something very human, an extra limb
          that we have collectively grown to deal with reality and with each
          other. Getting around without it is not painless
        </p>
        <div className="flex gap-6 items-center my-8">
          <img src="https://picsum.photos/60" className="rounded-full" />
          <div className="flex flex-col">
            <p className="text-muted">Hansel Rai </p>
            <p className="text-muted">500 upvote - 600 downvote</p>
          </div>
        </div>
        {/* End profile  */}
        <hr />
        <div className="my-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-md px-2">Technology</div>
            <div>90 upvote</div>
            <div>44 downvote</div>
          </div>
          <div className="flex items-center gap-4">
            <CiBookmarkPlus className="text-2xl" />
            <PiDotsThreeCircle className="text-2xl" />
            <PiDotsThree className="text-2xl" />
          </div>
        </div>
        <hr />
        {/* end action bar  */}
        <div className="text-xl leading-relaxed md mt-8 mb-12">
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
        <CommentSection />
      </div>
    </>
  );
};

export default BlogItem;
