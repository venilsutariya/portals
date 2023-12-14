"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <div>
            <div className="lg:px-32 mb-5 mt-24 py-5">
                <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent lg:p-[0.1px] xl:p-[0.3px]  my-10 relative text-center">
                </div>
            </div>
            <div className=" container py-5">
                <div className=" text-center text-white text-3xl mb-5">FAQs</div>
                <div className=" lg:px-44">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Why not hire full-time?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Hiring a senior-level designer and developer can cost up to six figures per year (plus benefits!), which may not be feasible for your budget or stage of business. You could find a cheaper alternative on Fiverr, but why take that chance?
                                <br /> <br />
                                Furthermore, you may not always have enough design work to keep a full-time designer busy, forcing you to pay for downtime. You can pause and resume your service as needed with a subscription plan, ensuring that you only pay for design work when you have a project that requires it. That's a win-win situation.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Turnaround times?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does pausing subscription work?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does unlimited development works?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How often will you communicate while I&#39;msubscribed?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How do I request designs and developments?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What if I don&#39;t like the design?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What programs do we use?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;