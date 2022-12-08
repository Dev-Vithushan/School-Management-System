import Link from "next/link";

export default function SingleLink(props) {
  return (
    <div>
      <Link href={props.link}>
        <p
          style={{
            margin: "0px",
            textAlign: "center",
            fontSize: "22px",
            color: "white",
            cursor: "pointer",
            paddingTop: "15px",
          }}
        >
          {props.name}
        </p>
      </Link>
    </div>
  );
}
