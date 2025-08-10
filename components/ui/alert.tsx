import { CircleCheckIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function Alert(props: PropsWithChildren<{ message: string }>) {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{
        x: [40, 0, 0, 40],
        opacity: [0, 1, 1, 0],
      }}
      exit={{ x: 40, opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        times: [0, 0.14, 0.86, 1],
      }}
      className="border-eborder rounded-md border px-4 py-3 absolute top-0 right-0"
    >
      <p className="text-sm">
        <CircleCheckIcon
          className="me-3 -mt-0.5 inline-flex text-emerald-500"
          size={16}
          aria-hidden="true"
        />
        {props.message}
      </p>
    </motion.div>
  );
}
