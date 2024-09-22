import AccordionExample from "./accordion/AccordionExample";
import AlertDialogExample from "./alertdialog/AlertDialogExample";
import AvatarExample from "./avatar/AvatarExample";
import CollapsibleExam from "./collapsible/CollapsibleExam";
import CounterExample from "./counter/CounterExample";
import DialogExample from "./dialog/DialogExample";
import DropdownMenuExam from "./dropdownmenu/DropdownMenuExam";
import FormExample from "./form/FormExample";
import MenuBarExam from "./menubar/MenuBarExam";
import ToastifyExamp from "./toastify/ToastifyExamp";

const AllComponents = () => {
  return (
    <div>
      <MenuBarExam />
      <DropdownMenuExam />
      <AccordionExample />
      <AlertDialogExample />
      <AvatarExample />
      <CounterExample />
      <CollapsibleExam />
      <DialogExample />
      <FormExample />
      <ToastifyExamp />
    </div>
  );
};

export default AllComponents;
