import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
} from './DropdownMenuComponent';
import { HamburgerMenuIcon, Cross2Icon, DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
const DropdownMenuExam = () => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');
    const [open, setOpen] = useState(false)
  
    return (

      <div>
        <h1>Dropdown Menu Example</h1>
  
        <DropdownMenuRoot open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="menuButton"  >

            {/* Toggle icon based on dropdown state */}
            {open ?  <Cross2Icon /> :  <HamburgerMenuIcon />}
        </DropdownMenuTrigger>
  
          <DropdownMenuContent className="DropdownMenuContent">
            <DropdownMenuItem className="DropdownMenuItem">
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenuItem>
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            <DropdownMenuItem className="DropdownMenuItem">
              New Window <div className="RightSlot">⌘+N</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="DropdownMenuItem" disabled>
              New Private Window <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenuItem>
  
            <DropdownMenuSub className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
              <DropdownMenuItem className="DropdownMenuItem">
                Save Page As… <div className="RightSlot">⌘+S</div>
              </DropdownMenuItem>
            </DropdownMenuSub>
  
            <DropdownMenuCheckboxItem className="DropdownMenuCheckboxItem" checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
              Show Bookmarks <div className="RightSlot">⌘+B</div>
            </DropdownMenuCheckboxItem>
  
            <DropdownMenuCheckboxItem className="DropdownMenuCheckboxItem" checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
            </DropdownMenuCheckboxItem>
  
            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenuRadioItem className="DropdownMenuRadioItem" value="pedro">
                <DotFilledIcon />
                Pedro Duarte
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="DropdownMenuRadioItem" value="colm">
                <DotFilledIcon />
                Colm Tuite
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>
    );
};

export default DropdownMenuExam;
