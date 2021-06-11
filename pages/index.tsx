import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {


const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Htag tag={"h1"}>Popka</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Pipka</P>

      <Tag color={"green"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit et,
      </Tag>

      <Rating rating={rating} setRating={setRating} isEditable={true}/>
    </>
  );
}
