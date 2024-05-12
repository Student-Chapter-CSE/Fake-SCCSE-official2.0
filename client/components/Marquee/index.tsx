"use client"
import React from "react";
import { motion } from "framer-motion";
import Marqueeelement from "@/public/roundMarqueeElement.svg"

const elements = [
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
    "IEI Students' Chapter",
]

const Maruqee: React.FC = () => {
    return (
        <div className="h-[2rem] bg-white flex items-center text-small">
            <motion.h1 className="flex gap-2 items-center mr-2" initial={{ x: "0" }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} animate={{ x: "-100%" }}>
                {elements.map((element, index) => (
                    <span key={index} className=" text-primary_text flex text-nowrap gap-2 items-center">{element}<Marqueeelement/></span>
                ))}
            </motion.h1>
            <motion.h1 className="flex gap-2 items-center" initial={{ x: "0" }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} animate={{ x: "-100%" }}>
                {elements.map((element, index) => (
                    <span key={index} className=" text-primary_text flex text-nowrap gap-2 items-center">{element}<Marqueeelement/></span>
                ))}
            </motion.h1>
        </div>
    )
}

export default Maruqee
