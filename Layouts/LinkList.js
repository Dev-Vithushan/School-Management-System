import SingleLink from "../Components/SingleLink";

export default function LinkList() {
  return (
    <div>
      <SingleLink name="Home" link="/" />
      {/* <SingleLink name="Courses" link="/courses" /> */}
      <SingleLink name="Staff Details" link="/staff" />
      <SingleLink name="Chat" link="/chat" />
      <SingleLink name="Updated News" link="/news" />
    </div>
  );
}
