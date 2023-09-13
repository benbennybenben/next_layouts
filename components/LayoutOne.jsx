import PageHeader from "@/components/PageHeader";
const LayoutOne = ({ children, ...props }) => {
  return (
    <div className={"bg-red-500"}>
      <PageHeader title={props.title} />
      <div>{children}</div>
    </div>
  );
};

export default LayoutOne;
