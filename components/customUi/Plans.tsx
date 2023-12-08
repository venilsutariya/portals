"use client";

import { IoMdCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Plans = () => {
    return (
        <div className="px-16 pb-28 bg-white">
            <div className=" py-28 text-4xl font-semibold">
                <div className=" flex flex-col"><span>Flexible plans for</span>
                    <span>every use case</span></div>
            </div>
            <div className=" table-responsive w-[90vw] overflow-auto">
                <table className=" w-full" >
                    <thead className="">
                        <tr>
                            <td className=" text-4xl pt-5"><span className="">Features</span></td>
                            <td className=" text-center">
                                <div className=" text-lg font-semibold mb-1">Monthly Pro</div>
                                <div className=" text-3xl font-semibold mb-1" style={{ color: '#3613CC' }}>$1,800/m</div>
                                <div className=" text-lg">Billed monthly</div>
                            </td>
                            <td className=" text-center">
                                <div className=" text-lg font-semibold mb-1">Quarterly Pro</div>
                                <div className=" text-3xl font-semibold mb-1" style={{ color: '#3613CC' }}>$4,590/m</div>
                                <div className=" text-lg">Billed quarterly</div>
                            </td>
                            <td className=" text-center">
                                <div className=" text-lg font-semibold mb-1">Custom</div>
                                <div className=" text-3xl font-semibold mb-1" style={{ color: '#3613CC' }}>Get in touch</div>
                                <div className=" text-lg">Custom plans</div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr">
                            <td>Unlimited Requests per account</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Unlimited revisions</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Unlimited brands/companies</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Unlimited users & teams</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Dedicated designer & developer</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Slack/Trello communications</td>
                            <td><span className=" flex justify-center "><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                        </tr>
                        <tr className="tr">
                            <td>Save $270 every month</td>
                            <td><span className=" flex justify-center "><MdClose /></span></td>
                            <td><span className=" flex justify-center"><IoMdCheckmark /></span></td>
                            <td><span className=" flex justify-center"><MdClose /></span></td>
                        </tr>
                        <tr className="">
                            <td></td>
                            <td><span className=" flex justify-center ">
                                <button style={{ borderRadius: '5px', transition: 'all 0.3s' }} className="border border-black text-md font-light flex justify-center items-center bg-black text-white py-2 px-2 hover:opacity-90">
                                    <span>Get started</span>
                                    <span className=" ms-1"><MdChevronRight /></span>
                                </button>
                            </span></td>
                            <td><span className=" flex justify-center">
                                <button style={{ borderRadius: '5px', transition: 'all 0.3s' }} className="border border-black text-md font-light flex justify-center items-center bg-black text-white py-2 px-2 hover:opacity-90">
                                    <span>Get started</span>
                                    <span className=" ms-1"><MdChevronRight /></span>
                                </button>
                            </span></td>
                            <td><span className=" flex justify-center">
                                <button style={{ borderRadius: '5px', transition: 'all 0.3s' }} className="border border-black text-md font-light flex justify-center items-center text-black py-2 px-4 hover:opacity-90">
                                    <span>Let&#39;s talk</span>
                                </button>
                            </span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Plans;