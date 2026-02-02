import { motion } from "framer-motion";

export default function ProductCard({
  name,
  description,
  available,
  weight,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-500 overflow-hidden"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative h-[300px] overflow-hidden bg-[#E8DCC8]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#8B5A3C]/40 text-sm tracking-widest uppercase">
              Product Image
            </span>
          </div>
        )}
      </div>

      {/* PRODUCT INFO */}
      <div className="p-8">
        {/* META ROW */}
        <div className="flex items-center justify-between mb-4">
          {weight && (
            <span className="text-xs tracking-[0.3em] text-[#8B5A3C] uppercase font-light border border-[#E8DCC8] px-3 py-1">
              {weight}
            </span>
          )}

          <span className="text-xs tracking-wider text-[#2D5016] font-medium">
            {available} Available
          </span>
        </div>

        {/* NAME */}
        <h3 className="text-2xl font-light text-[#2D5016] mb-4 leading-tight">
          {name}
        </h3>

        {/* DIVIDER */}
        <div className="w-12 h-[1px] bg-[#A0785A] mb-4"></div>

        {/* DESCRIPTION */}
        <p className="text-[#6a5a4a] leading-relaxed font-light text-sm mb-6">
          {description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/917972060463"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-[#8B5A3C] text-[#8B5A3C] px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#8B5A3C] hover:text-white transition-all duration-500 text-center"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border-2 border-[#C4A57B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
}
