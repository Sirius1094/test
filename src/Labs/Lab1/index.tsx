import Forms from "./forms";
import Headings from "./headings";
import Images from "./images";
import Lists from "./lists";
import Paragraph from "./paragraphs";
import Tables from "./table";

export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <Headings />
        <Paragraph />
        <Lists />
        <Tables />
        <Images />
        <Forms />
        <h4>Anchor tag</h4>
        Please&nbsp;
        <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
        &nbsp;to get dummy text<br/>

      </div>
    );
}
  