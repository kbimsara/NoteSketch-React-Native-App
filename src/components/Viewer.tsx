import React from 'react'
import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger, Button,Center, ChevronDownIcon, ChevronUpIcon, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const Viewer = () => {
    return (
        <GluestackUIProvider config={config}>
            <Accordion marginBottom={20} size="lg" variant="filled" type="single" isCollapsible={true} isDisabled={false}>
                <AccordionItem value="a">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How do I place an order?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            To place an order, simply select the products you want, proceed to
                            checkout, provide shipping and payment information, and finalize
                            your purchase.
                        </AccordionContentText>
                        <Center>
                            <Button>Button</Button>
                        </Center>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </GluestackUIProvider>

    )
}

export default Viewer