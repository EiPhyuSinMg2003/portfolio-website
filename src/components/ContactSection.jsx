import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 px-6 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-left text-glow">
          Get in{" "}
          <span className="opacity-0 animate-fade-in-delay-2 text-primary">
            Touch
          </span>
        </h3>

        <p className="text-left text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hopefully joining a team where I can grow, build, and turn ideas into
          real applications. If you'd like to chat about a project or just have
          a question, please contact me below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:eiphyusinm.66@rsu.ac.th"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    eiphyusinm.66@rsu.ac.th
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="tel:+661234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +66 12 3456 7890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <p className="text-muted-foreground">
                    Rangsit, Bangkok, Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ei-phyu-sin-maung-3a95942b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                >
                  <Linkedin
                    className="text-muted-foreground hover:text-primary transition-colors"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.instagram.com/epsmaung?igsh=a3k1YmZqcXQ5MXk1&utm_source=qr"
                  target="_blank"
                >
                  <Instagram
                    className="text-muted-foreground hover:text-primary transition-colors"
                    size={24}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/16LXtF2gSL/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <Facebook
                    className="text-muted-foreground hover:text-primary transition-colors"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-secondary/50 text-primary bg-secondary/20 rounded-xl focus:outline-none focus:border-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-secondary/50 text-primary bg-secondary/20 rounded-xl focus:outline-none focus:border-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-secondary/50 text-primary bg-secondary/20 rounded-xl focus:outline-none focus:border-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
};
