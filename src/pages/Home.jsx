import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "../assets/videos/jaggery.mp4";
import ProductCard from "../components/ProductCard";

// Import product images (add your actual images in src/assets/images/products/)
// import jaggeryBlock from "../assets/images/products/jaggery-block.jpg";
// import jaggeryPowder from "../assets/images/products/jaggery-powder.jpg";
// import organicRaw from "../assets/images/products/organic-raw.jpg";
// import jaggeryCubes from "../assets/images/products/jaggery-cubes.jpg";
// import liquidJaggery from "../assets/images/products/liquid-jaggery.jpg";
// import giftBox from "../assets/images/products/gift-box.jpg";


function ParallaxBlock({ title, image, children, reverse }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-10 items-center"
    >
      {/* TEXT */}
      <div className={reverse ? "md:order-2" : ""}>
        <h3 className="text-2xl font-light text-[#2D5016] mb-4">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-[#A0785A] mb-4"></div>
        <p className="text-sm md:text-base text-[#5a4a3a] leading-relaxed font-light">
          {children}
        </p>
      </div>

      {/* IMAGE */}
      <div
        className={`flex justify-center ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <motion.div
          style={{ y }}
          className="
            w-full max-w-[420px]
            aspect-[16/10]
            overflow-hidden
            rounded-lg
            border border-[#C4A57B]/50
            bg-[#EFE8DC]
          "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover object-center
              [filter:contrast(1.04)_saturate(0.92)_sepia(0.06)]
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div ref={containerRef} className="bg-[#F5F1E8]">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#8B5A3C]/60"></div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 tracking-[0.4em] text-xs text-[#C4A57B] font-light uppercase"
          >
            Handcrafted Since 2020
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tighter leading-[0.9] max-w-6xl mb-8"
          >
            Purity in
            <br />
            <span className="font-light italic">Every Drop</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-gray-100 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Where ancient wisdom meets modern consciousness. Our organic jaggery is a celebration of tradition, crafted with patience and reverence for nature's gifts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex gap-5 flex-wrap justify-center"
          >
            <a
              href="#products"
              className="group relative bg-white text-[#8B5A3C] px-10 py-4 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-[#C4A57B] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>

            <a
              href="https://wa.me/917972060463"
              target="_blank"
              className="group bg-transparent border border-white/40 text-white px-10 py-4 text-sm font-medium tracking-widest uppercase backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-500"
            >
              <span className="inline-flex items-center gap-3">
                Connect With Us
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="bg-[#2D5016] py-5 overflow-hidden border-y border-[#4A7C2C]">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center text-[#C4A57B] text-sm tracking-[0.3em] uppercase font-light">
              <span>Chemical-Free</span>
              <span>Sustainably Sourced</span>
              <span>Traditionally Crafted</span>
              <span>Rich in Minerals</span>
              <span>Bangalore Heritage</span>
              <span>Farm to Table</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* PHILOSOPHY SECTION */}
      <section className="relative bg-[#E8DCC8] overflow-hidden py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">

        {/* IMAGE BLOCK */}
        <motion.div
          {...fadeInUp}
            className="relative h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg"
            style={{
                  backgroundImage: "url('/images/1.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
            }}
            >
      <span className="absolute bottom-4 right-4 text-white/70 text-sm font-light tracking-widest">
        Product Photography
      </span>
    </motion.div>

    {/* CONTENT BLOCK */}
    <motion.div
      {...fadeInUp}
      className="flex flex-col justify-center px-2 md:px-8 lg:px-16"
    >
      <div className="text-xs tracking-[0.4em] text-[#8B5A3C] uppercase mb-6 font-light">
        Our Philosophy
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#2D5016] mb-8 leading-[1.15]">
        Nature's Gift,
        <br />
        <span className="italic font-light">Preserved</span>
      </h2>

      <div className="w-20 h-[1px] bg-[#A0785A] mb-8"></div>

      <p className="text-[#5a4a3a] text-base md:text-lg leading-relaxed mb-6 font-light">
        In the heart of Bangalore, we craft jaggery the way it was meant to be—
        slowly, mindfully, and with deep respect for the earth. Every block carries
        the essence of sun-ripened sugarcane and generations of wisdom.
      </p>

      <p className="text-[#5a4a3a] text-base md:text-lg leading-relaxed font-light">
        We reject chemical shortcuts and embrace the patience of traditional
        methods. Because wellness shouldn't be compromised, and taste shouldn't
        be artificial.
      </p>
    </motion.div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F5F1E8] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <div className="text-xs tracking-[0.4em] text-[#8B5A3C] uppercase mb-6 font-light">The Difference</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2D5016] tracking-tight">
              Why <span className="italic font-light">PreTea Gud</span>
            </h2>
            <div className="mt-8 w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Organic Sourcing",
                desc: "Every stalk of sugarcane comes from certified organic farms where soil health and biodiversity thrive without synthetic intervention. We work with farmers who understand that the earth's vitality translates directly into the purity of what we consume.",
                color: "#4A7C2C"
              },
              {
                title: "Traditional Methods",
                desc: "Our process honors centuries-old techniques—slow boiling in iron vessels over wood fire, natural clarification using plant extracts, and patient sun-drying. This isn't nostalgia; it's the preservation of nutritional integrity and authentic flavor.",
                color: "#8B5A3C"
              },
              {
                title: "Zero Compromise",
                desc: "No preservatives, no artificial colors, no chemical clarifiers. What you hold in your hands is pure concentrated sugarcane juice, transformed through heat and time into golden sweetness. Nothing added, nothing taken away except water.",
                color: "#2D5016"
              },
              {
                title: "Mineral Rich",
                desc: "Unlike refined sugar stripped of all nutrition, our jaggery retains iron, magnesium, potassium, and calcium. Each serving offers not just sweetness but nourishment—the way nature designed it.",
                color: "#D4846C"
              },
              {
                title: "Sustainable Impact",
                desc: "Carbon-neutral production, fair wages for farmers, biodegradable packaging, and water conservation at every step. Our commitment extends beyond the product to the planet and people who make it possible.",
                color: "#A0785A"
              },
              {
                title: "Heritage Wisdom",
                desc: "Ayurvedic texts have celebrated jaggery for millennia as a cleansing, warming sweetener. We're not inventing wellness; we're remembering it, bringing ancient knowledge into modern kitchens with reverence and care.",
                color: "#8B5A3C"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-white p-10 border border-[#E8DCC8] hover:border-[#C4A57B] transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-700" style={{ backgroundColor: item.color }}></div>
                <h3 className="text-2xl font-light text-[#2D5016] mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#6a5a4a] leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative h-[60vh] overflow-hidden bg-[#2D5016] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-[#C4A57B] leading-relaxed italic">
            We don't believe in shortcuts. Every block tells a story of tradition, patience, and reverence for the land.
          </blockquote>
          <div className="mt-8 text-sm tracking-[0.3em] text-[#A0785A] uppercase font-light">PreTea Gud Philosophy</div>
        </motion.div>
      </section>

{/* PRODUCTS COLLECTION */}
<section id="products" className="bg-[#E8DCC8] py-28 px-6">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}
    <motion.div {...fadeInUp} className="text-center mb-24">
      <div className="text-xs tracking-[0.4em] text-[#8B5A3C] uppercase mb-6 font-light">
        Our Collection
      </div>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2D5016] tracking-tight mb-6">
        Handcrafted <span className="italic font-light">Varieties</span>
      </h2>

      <div className="w-24 h-[1px] bg-[#A0785A] mx-auto mb-10"></div>

      <p className="text-[#5a4a3a] text-lg max-w-3xl mx-auto leading-relaxed font-light">
        Each product is a labor of love, crafted in small batches to ensure the
        highest quality. From traditional blocks to convenient powders, discover
        the perfect sweetener for your lifestyle.
      </p>
    </motion.div>

    {/* PRODUCT GRID */}
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Cubes"
          description="Convenient pre-portioned cubes for consistent sweetness. Perfect for daily tea rituals."
          weight="500g"
          image="/images/2.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Traditional Jaggery Block"
          description="Classic solid blocks perfect for chai and traditional recipes. Rich, deep flavor with mineral notes."
          weight="500g"
          image="/images/3.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Powdered Jaggery"
          description="Unrefined and unprocessed. The purest form with maximum nutritional benefits and earthy sweetness."
          weight="500g"
          image="/images/6.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Jaggery Cubes"
          description="Convenient pre-portioned cubes for consistent sweetness. Perfect for daily tea rituals."
          weight="250g"
          image="/images/2.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Traditional Jaggery Block"
          description="Smooth liquid form for beverages, desserts, and drizzling with natural sweetness."
          weight="250g"
          image="/images/3.jpeg"
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProductCard
          name="Premium Gift Box"
          description="Curated selection of our finest jaggery varieties. Thoughtfully packed for gifting wellness."
          weight="Mixed"
          image="/images/4.jpeg"
        />
      </motion.div>
    </motion.div>

  </div>
</section>


{/* CRAFTING PROCESS */}
<section className="bg-[#F5F1E8] py-32 px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-24"
    >
      <div className="text-xs tracking-[0.4em] text-[#8B5A3C] uppercase mb-6 font-light">
        From Farm to Table
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2D5016] tracking-tight">
        The Sacred <span className="italic">Journey</span>
      </h2>
      <div className="mt-8 w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
    </motion.div>

    <div className="space-y-32">

      <ParallaxBlock
        title="Organic Cultivation"
        image="/images/Sugar.jpg"
      >
        Our partner farmers nurture sugarcane using regenerative agriculture
        practices. Organic compost enriches the soil while natural pest
        management preserves ecological balance.
        <br /><br />
        Each stalk grows under the Karnataka sun, rooted deep in mineral-rich
        earth farmed with respect for generations.
      </ParallaxBlock>

      <ParallaxBlock
        title="Fresh Harvest"
        image="/images/harvest.png"
        reverse
      >
        Canes are cut in early morning when sugar content peaks. This preserves
        sweetness and minimizes oxidation.
        <br /><br />
        Within hours, the harvest moves to processing—freshness defines flavor.
      </ParallaxBlock>

      <ParallaxBlock
        title="Traditional Boiling"
        image="/images/boiling.png"
      >
        Pressed juice simmers slowly in iron vessels over wood fires. The liquid
        thickens and develops deep caramel notes.
        <br /><br />
        Impurities are skimmed away with patience and skill.
      </ParallaxBlock>

      <ParallaxBlock
        title="Sun Blessing"
        image="/images/dryingSun.png"
        reverse
      >
        Syrup is poured into molds and left under open skies. Gentle solar heat
        allows sugars to crystallize naturally.
        <br /><br />
        Days of sunlight transform liquid into solid—where patience becomes
        virtue.
      </ParallaxBlock>

    </div>
  </div>
</section>

      {/* HEALTH BENEFITS */}
      <section className="bg-[#2D5016] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <div className="text-xs tracking-[0.4em] text-[#C4A57B] uppercase mb-6 font-light">Wellness Within</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#E8DCC8] tracking-tight">
              Nature's <span className="italic font-light">Medicine</span>
            </h2>
            <div className="mt-8 w-24 h-[1px] bg-[#A0785A] mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Cardiovascular Support", desc: "Potassium and magnesium work synergistically to support healthy blood pressure and heart function" },
              { title: "Sustained Energy", desc: "Complex carbohydrates provide steady glucose release without the crashes associated with refined sugar" },
              { title: "Cognitive Function", desc: "Natural iron content supports oxygen transport to the brain, enhancing mental clarity and focus" },
              { title: "Skeletal Health", desc: "Calcium and phosphorus contribute to bone density and structural integrity throughout life" },
              { title: "Immune Resilience", desc: "Antioxidants and trace minerals strengthen the body's natural defense mechanisms" },
              { title: "Respiratory Relief", desc: "Traditional Ayurvedic remedy for soothing coughs and throat irritation" },
              { title: "Blood Purification", desc: "Supports the body's natural detoxification processes and improves circulation" },
              { title: "Radiant Complexion", desc: "Vitamins and minerals nourish skin from within, promoting natural glow and vitality" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-[#4A7C2C]/20 backdrop-blur-sm p-8 border border-[#4A7C2C]/40 hover:border-[#C4A57B] transition-all duration-500"
              >
                <h3 className="text-xl font-light text-[#E8DCC8] mb-4">{benefit.title}</h3>
                <div className="w-12 h-[1px] bg-[#A0785A] mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-[#C4A57B] text-sm font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-[#E8DCC8]">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 min-h-screen">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-32 order-2 lg:order-1"
          >
            <div className="text-xs tracking-[0.4em] text-[#8B5A3C] uppercase mb-6 font-light">Our Founder</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2D5016] mb-8 leading-[1.1]">
              A Journey of
              <br />
              <span className="italic font-light">Purpose</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#A0785A] mb-10"></div>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-6 font-light">
              PreTea Gud emerged from a profound awakening. After years navigating corporate corridors, our founder returned to ancestral farmlands in Karnataka, witnessing firsthand how industrial food production had severed our connection to the earth.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-6 font-light">
              The sight of traditional jaggery-making—unchanged for centuries—sparked a vision: to bridge ancient wisdom and modern consciousness, bringing wholesome sweetness to urban homes while supporting farming communities.
            </p>
            <blockquote className="text-xl text-[#8B5A3C] italic mt-8 pl-6 border-l-2 border-[#A0785A] font-light">
              Every block is a promise—to honor tradition, respect nature, and nourish bodies and souls with integrity.
            </blockquote>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="relative h-[60vh] lg:h-auto bg-gradient-to-br from-[#A0785A] to-[#8B5A3C] flex items-center justify-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            <span className="relative text-white/20 text-lg font-light tracking-widest">Founder Image</span>
          </motion.div>
        </div>
      </section>

{/* INSTAGRAM FEED */}
<section className="bg-[#2D5016] py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* HEADER */}
    <motion.div {...fadeInUp} className="text-center mb-16">
      <div className="text-xs tracking-[0.4em] text-[#C4A57B] uppercase mb-4 font-light">
        Follow Our Journey
      </div>
      <h3 className="text-3xl font-light text-[#E8DCC8]">
        @preteagud
      </h3>
    </motion.div>

    {/* GRID */}
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center"
    >
      {[...Array(6)].map((_, i) => (
        <motion.a
          key={i}
          variants={fadeInUp}
          href="https://www.instagram.com/preteagud.in?igsh=dno2cHIzMHpraW91"
          target="_blank"
          rel="noopener noreferrer"
          className="
            aspect-square
            w-full
            max-w-[160px]
            bg-[#4A7C2C]/20
            hover:bg-[#4A7C2C]/30
            transition-all duration-500
            flex items-center justify-center
            text-[#C4A57B]/50
            text-xs font-light
            cursor-pointer
          "
        >
          <span className="tracking-widest">IMAGE</span>
        </motion.a>
      ))}
    </motion.div>

  </div>
</section>


      {/* FINAL CTA */}
      <section className="relative bg-[#E8DCC8] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <motion.div {...fadeInUp} className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2D5016] tracking-tight mb-8">
            Begin Your
            <br />
            <span className="italic font-light">Wellness Journey</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#A0785A] mx-auto mb-12"></div>
          <p className="text-[#5a4a3a] text-lg leading-relaxed mb-16 font-light max-w-2xl mx-auto">
            Join thousands who have rediscovered the joy of pure, natural sweetness. Every purchase supports sustainable farming communities and preserves traditional craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/917972060463"
              target="_blank"
              className="group bg-[#2D5016] text-[#E8DCC8] px-12 py-5 text-base font-medium tracking-widest uppercase hover:bg-[#4A7C2C] transition-all duration-500"
            >
              <span className="inline-flex items-center gap-3">
                Order Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-[#C4A57B]/20 text-sm text-[#8B5A3C] font-light space-y-2">
            <p>Bangalore, Karnataka, India</p>
            <p>hello@preteagud.com</p>
            <p>+91 79720 60463</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}