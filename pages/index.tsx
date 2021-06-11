import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
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
      <Tag color={"red"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit et,
       
      </Tag>
    </>
  );
}
