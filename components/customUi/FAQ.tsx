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
            <div className=" d-none d-lg-block px-32 mb-5 mt-24 py-5">
                <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent lg:p-[0.5px] xl:p-[0.5px]  my-10 relative text-center">
                </div>
            </div>
            <div className=" container py-5">
                <div className=" text-center text-white font-bold text-3xl mb-5">Q&A</div>
                <div className=" lg:px-44">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Why not hire full-time?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Hiring a senior-level designer and developer can cost up to six figures per year (plus benefits!), which may not be feasible for your budget or stage of business. You could find a cheaper alternative on Fiverr, but why take that chance?
                                <br /> <br />
                                Furthermore, you may not always have enough design work to keep a full-time designer busy, forcing you to pay for downtime. You can pause and resume your service as needed with a subscription plan, ensuring that you only pay for design work when you have a project that requires it. That&#39;s a win-win situation.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What does the unlimited design and development service include/scope of service?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Our unlimited design and development service includes website design, mobile app development, user interface (UI) design,
                                user experience (UX) design, front-end and back-end development, and more in whatever technology you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> How does the flat monthly fee work?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                With our flat monthly fee, you get unlimited access to our design and development services for a fixed monthly cost. There are
                                no additional charges or hidden fees.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How soon can I begin?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Right away--even today.
                                Following your subscription, you will receive a welcome email, and you will be invited to a private Slack channel and paired with
                                your very own designer and developer From there, you can make as many design and development requests as you need right away. There is no better way to get design and development work done quickly.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How fast do you work?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                Most requests will be responded to within two business days. Our designers and developers work quickly without sacrificing
                                quality. <br /> It may take a little longer for larger, more difficult requests. We will always notify you first so that you can plan accordingly and
                                avoid disappointment.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Do you work with pre-existing designs and coding?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                If you already have a design or code that needs to be updated, we can certainly help you out. We excel at taking existing
                                projects and fine-tuning them into stunning productions.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What if I run out of work?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                It&apos;s all good. Simply pause the subscription and resume when you&apos;re ready to continue
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is there a request cap?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>
                                There are none. You are free to make as many design and development requests as you want. Fill them up. We&apos;ll go through
                                them one by one
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What if I&apos;m unhappy with my design and live production?</AccordionTrigger>
                            <AccordionContent style={{ color: 'rgba(180, 188, 208, 1)' }}>

                                It&apos;s not a problem. You have an infinite number of revisions. We will continue to work on it until you are satisfied.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;