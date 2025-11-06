"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Percent, Copy, Check } from "lucide-react";

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("DISCOUNT15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaimOffer = () => {
    onClose();
    router.push("/booking");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-red-600 text-white max-w-md shadow-2xl">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-full">
              <Percent className="w-8 h-8 text-black" />
            </div>
          </div>
          <DialogTitle className="text-red-600 text-3xl font-bold">
            Special Discount!
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-lg">
            Get 15% off your next detailing service with this exclusive promo code.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-black font-bold text-xl px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <span>DISCOUNT15</span>
              <button
                onClick={handleCopy}
                className="ml-2 hover:bg-red-800 p-1 rounded transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="text-green-400 text-sm mt-2 text-center">Copied to clipboard!</p>
            )}
          </div>
          <p className="text-sm text-gray-400 text-center">
            Use this code at checkout to save 15% on any service.
          </p>
          <Button
            onClick={handleClaimOffer}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-black font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Claim Offer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;
