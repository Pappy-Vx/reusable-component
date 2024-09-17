import {
  DialogComponent,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./DialogComponent";
import { Cross2Icon } from "@radix-ui/react-icons";

const DialogExample = () => {
  return (
    <div>
      <h1>Dialog Example</h1>
      <DialogComponent>
        <DialogTrigger asChild>
          <button >Edit profile</button>
        </DialogTrigger>
        <DialogOverlay  />
        <DialogContent >
          <DialogTitle >Edit profile</DialogTitle>
          <DialogDescription >
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <DialogClose asChild>
              <button className="Button green">Save changes</button>
            </DialogClose>
          </div>
          <DialogClose asChild>
            <button className="CancelButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </DialogClose>
        </DialogContent>
      </DialogComponent>
    </div>
  );
};

export default DialogExample;
