import LayoutOne from "@/components/LayoutOne";

const About = () => {
  return (
    <LayoutOne title="This is the title prop passed to the layout component">
      <h2 className="text-2xl font-bold">This is the About page</h2>
      <p>Eiusmod fugiat lorem sit adipiscing eiusmod exercitation</p>
    </LayoutOne>
  );
};

export default About;
