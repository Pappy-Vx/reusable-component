import {
    AccordionComponent,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "./AccordionComponent";

const AccordionExample = () => {
  return (
    <div>
        <h1>Accordion Example</h1>
      <AccordionComponent type="single" defaultValue="item-1" collapsible >
        <AccordionItem value="item-1">
          <AccordionTrigger >Accordion title </AccordionTrigger>
          <AccordionContent>
            Accordion body text
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion title 2</AccordionTrigger>
          <AccordionContent>
            Accordion body text 2
          </AccordionContent>
        </AccordionItem>
      </AccordionComponent>
    </div>
  )
}

export default AccordionExample