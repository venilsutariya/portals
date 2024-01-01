"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { MdChevronRight } from "react-icons/md";

const FormComp = () => {
    const { toast } = useToast();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });
    const [isButton, setisButton] = useState(true);
    const [error, setError] = useState('');

    const onSubmit = async (data: any) => {
        if (data.name === '' || data.email === '' || data.message === '') {
            setError("Uh-oh! Form fields feeling lonely. Fill 'em all in to throw a digital party! 🎉")
        } else {
            try {
                setError("");
                setisButton(false);
                const response = await axios.post(`/api/sendmail`, data);
                if (response.status === 200) {
                    console.log('Email sent successfully!');
                    // Reset form fields or display a success message
                } else {
                    console.error('Error sending email:', response.statusText);
                }
            } catch (error) {
                // handle error
            } finally {
                reset();
                setisButton(true);
                toast({
                    title: "Success! Catch-up Scheduled 🚀",
                    description: "Your catch-up is locked in. Exciting times ahead!",
                })
            }
        }
    }

    const onVisibilityChange = (visible: boolean) => {
        if (visible) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        // Reset the isVisible state when the component unmounts or when you leave the section
        return () => {
            setIsVisible(false);
        };
    }, []);

    return (
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <div>
                <div className={`pb-20 flex flex-col text-center text-white text-2xl lg:text-3xl ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <span>Please share requirements</span>
                    <span>about your projects</span>
                </div>
                <div className=" row row-cols-1 row-cols-lg-2 g-0 p-0">
                    <div className={`col relative ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                        <img src="/images/Union.png" alt="" />
                        <div className=" absolute text-white top-20 px-3 px-lg-0 lg:left-44 text-lg">We are Portals and <br /> we are here to serve you :)</div>
                    </div>
                    <div className={` col relative ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                        <div className="lg:absolute top-20 w-full px-3 px-lg-0">
                            <span className=' absolute top-[-30px] text-red-500'>{error}</span>
                            <form onSubmit={handleSubmit(onSubmit)} className="lg:pe-44">
                                <div className="flex flex-col">
                                    <label className=" mb-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="name">NAME(*)</label>
                                    <input {...register('name')} style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" type="text" id="name" />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" my-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="mail">EMAIL(*)</label>
                                    <input {...register('email')} style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" type='email' id="mail" />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" my-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="mail">MESSAGE(*)</label>
                                    {/* @ts-ignore: Suppress rows cols typeerror */}
                                    <textarea {...register('message')} style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" id="message" cols="30" rows="7"></textarea>
                                </div>
                                {
                                    isButton ? <button style={{ borderRadius: '5px', padding: '10px 12px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="mt-5 text-lg flex justify-center items-center text-white hover:opacity-90">
                                        <span>Send message</span>
                                        <span><MdChevronRight /></span>
                                    </button> : <button style={{ borderRadius: '5px', padding: '10px 25px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="mt-5 text-lg flex justify-center items-center text-white hover:opacity-90" disabled>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending
                                    </button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default FormComp;