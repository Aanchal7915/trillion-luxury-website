import { motion } from "framer-motion";
import galleryPool from "@/assets/gallery-pool.jpg";
import galleryTower from "@/assets/gallery-tower.jpg";
import galleryLandscape from "@/assets/gallery-landscape.jpg";
import galleryClubhouse from "@/assets/gallery-clubhouse.jpg";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const images = [
  { src: galleryPool, alt: "Infinity pool with city views", label: "Pool" },
  { src: galleryTower, alt: "Tower exterior at night", label: "Tower View" },
  { src: galleryLandscape, alt: "Landscaped gardens", label: "Landscape" },
  { src: galleryClubhouse, alt: "Premium clubhouse lounge", label: "Clubhouse" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="mb-16"
      >
        <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Gallery</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          A Lifestyle Beyond Compare
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: i * 0.1 }}
            className="relative group overflow-hidden aspect-[4/5]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-accent text-xs tracking-[0.2em] uppercase">
              {img.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
