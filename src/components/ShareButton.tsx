"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <button 
      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition font-medium bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg" 
      onClick={handleShare}
    >
      <Share2 size={20} /> {copied ? "تم النسخ!" : "مشاركة"}
    </button>
  );
}
