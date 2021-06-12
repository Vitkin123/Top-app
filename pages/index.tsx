import React, { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import {withLayout } from "../layout/Layout";

function Home(): JSX.Element {


const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Htag tag={"h1"}>First</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Second</P>

      <Tag color={"green"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit et,
      </Tag>

      <Rating rating={rating} setRating={setRating} isEditable={true}/>
    </>
  );
}

export default withLayout(Home);
