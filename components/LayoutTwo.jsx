import PageHeader from "@/components/PageHeader";
const LayoutTwo = ({ children, ...props }) => {
  return (
    <div className={"bg-purple-400"}>
      <PageHeader title={props.title} />
      <div>{children}</div>
    </div>
  );
};

export default LayoutTwo;
