"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Percent, Copy, Check, Loader2 } from "lucide-react";

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(15);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchPromoCode = async () => {
        setLoading(true);
        setError(false);
        try {
          console.log("Fetching promo code...");
          const response = await fetch("https://gc-web-app.vercel.app/api/promo-codes/agent/690b5b3d70d70cbde2a59f88");
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Failed to fetch promo code");
          }
          const data = await response.json();
          console.log("Fetched data:", data);
          if (data.success && data.data && Array.isArray(data.data) && data.data.length > 0) {
            const promo = data.data[0];
            setPromoCode(promo.promoCode || promo.code || "");
            setDiscountPercentage(promo.discountPercentage || promo.discount || 15);
            console.log("Promo code set to:", promo.promoCode || promo.code, "Discount:", promo.discountPercentage || promo.discount);
          } else {
            setPromoCode("");
            setDiscountPercentage(15);
          }
        } catch (err) {
          console.error("Error fetching promo code:", err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchPromoCode();
    }
  }, [isOpen]);



  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaimOffer = () => {
    // Store promo code for booking page to apply and mark as claimed
    localStorage.setItem('promoCodeToApply', promoCode);
    localStorage.setItem('promoCodeClaimed', 'true');
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
          <DialogTitle className="text-red-600 text-3xl font-bold justify-center text-center">
            Special Discount!
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-lg justify-center text-center ">
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2 inline justify-center text-red-600 text-center" />
                Loading discount...
              </>
            ) : (
              `Get ${discountPercentage}% off your next detailing service with this exclusive promo code.`
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-black font-bold text-xl px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <span>{loading ? "Loading..." : promoCode}</span>
              <button
                onClick={handleCopy}
                className="ml-2 hover:bg-red-800 p-1 rounded transition-colors"
                disabled={loading}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="text-green-400 text-sm mt-2 text-center">Copied to clipboard!</p>
            )}
          </div>
          <p className="text-sm text-gray-400 text-center">
            Use this code at checkout to save {discountPercentage}% on any service.
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
