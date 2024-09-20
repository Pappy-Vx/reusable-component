import AccordionExample from "./accordion/AccordionExample";
import AlertDialogExample from "./alertdialog/AlertDialogExample";
import AvatarExample from "./avatar/AvatarExample";
import CollapsibleExam from "./collapsible/CollapsibleExam";
import DialogExample from "./dialog/DialogExample";
import DropdownMenuExam from "./dropdownmenu/DropdownMenuExam";
import MenuBarExam from "./menubar/MenuBarExam";

const AllComponents = () => {
  return (
    <div>
      <MenuBarExam />
      <DropdownMenuExam />
      <AccordionExample />
      <AlertDialogExample />
      <AvatarExample />
      <CollapsibleExam />
      <DialogExample />
    </div>
  );
};

export default AllComponents;
