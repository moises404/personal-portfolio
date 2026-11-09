const MyTags = (props) => {
  return (
    <div className=" border px-4 rounded-full hover:text-blue-300 hover:border-blue-300 select-none">
      {props.icon}
      <span> {props.role}</span>
    </div>
  );
};

export default MyTags;
