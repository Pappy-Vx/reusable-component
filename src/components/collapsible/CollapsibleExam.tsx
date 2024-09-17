import { useState } from "react";
import {
  CollapsibleComponent,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./CollapsibleComponent";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

const CollapsibleExam = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Collapsible Example</h1>
      <CollapsibleComponent open={open} onOpenChange={setOpen}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "white" }}>
            Click the icon to read more ...
          </span>
          <CollapsibleTrigger asChild>
            <button className="IconButton">
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <div style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            quia.
          </div>
        </CollapsibleContent>
      </CollapsibleComponent>
    </div>
  );
};

export default CollapsibleExam;
