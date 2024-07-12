import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

interface FAQType {
  question: string;
  answer: string;
}

interface Props {
  items: FAQType[];
}

const FAQ = ({ items }: Props) => {
  return (
    <Box borderRadius="lg" w="full" p={4}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {items.map((item, i: number) => {
          return (
            <AccordionItem key={`faq_${i}`}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default FAQ;
