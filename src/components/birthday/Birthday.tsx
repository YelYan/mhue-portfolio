import React, { useState } from "react";
import { Gift } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ConfettiAnimation from "@/components/ui/animation/Confetti";
import { motion } from "framer-motion";

type BirthdayProps = {
  children?: React.ReactNode;
};

const Birthday = ({ children }: BirthdayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ConfettiAnimation />}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.div
            animate={{
              y: [0, -20, 0], // Moves up then back down
            }}
            transition={{
              duration: 0.8, // Speed of bounce
              repeat: Infinity,
              repeatType: "loop", // Continuous loop
              ease: "easeInOut",
            }}
          >
            <Gift className="w-20 h-20 cursor-pointer text-babe-pink" />
          </motion.div>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className=" md:!max-w-[65vw] md:!w-[65vw] max-sm:!w-[95vw] max-sm-!min-w-[95vw] p-3 md:-p-6"
        >
          <DialogHeader>
            <DialogTitle className="text-center border-b border-gray-200 pb-5">
              <motion.h1
                className="text-lg font-medium"
                initial={{ color: "#000000" }}
                animate={{ color: ["#A2CFFE", "#F4C2C2"] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Happy Birthday!🎉 Kalay lay yay🎉
              </motion.h1>
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-scroll h-[200px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {children ? children : <>Add your custom content here</>}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="cursor-pointer bg-babe-blue border-none"
                variant={"primary"}
              >
                Back
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Birthday;
