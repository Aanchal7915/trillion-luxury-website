import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-showcase" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-accent uppercase mb-4">
            Experience The Trillion
          </h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">
            Watch our exclusive project showcase
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden border border-accent/20 shadow-2xl group"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Fallback/Thumbnail Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img
                src="https://img.youtube.com/vi/29usCnk51EE/maxresdefault.jpg"
                alt="Project Showcase Thumbnail"
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-accent/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-background fill-background ml-1" size={40} />
                </div>
                <p className="text-accent font-bold tracking-[0.2em] uppercase text-xs mt-8 group-hover:text-white transition-colors">
                  Click to watch full video
                </p>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/29usCnk51EE?autoplay=1&rel=0"
              title="The Trillion Project Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;