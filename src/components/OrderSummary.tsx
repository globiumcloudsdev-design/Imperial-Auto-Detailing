"use client";

import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { service, additionalServices, calculatePrice, extraServices } from "@/utils/services";



interface OrderSummaryProps {
  formData: any;
  totalPrice: number;
  discountedPrice: number;
  isPromoValid: boolean;
}

const OrderSummaryAccordion: FC<OrderSummaryProps> = ({
  formData,
  totalPrice,
  discountedPrice,
  isPromoValid,
}) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  return (
    <Card className="mt-6 border border-gray-600 shadow-lg bg-gray-800/50 backdrop-blur-md">
      <CardContent className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h2 className="text-lg font-semibold text-white">Order Summary</h2>
          {open ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              {/* Selected Services */}
              <div>
                <h3 className="font-medium mb-2 text-white">Selected Services</h3>
                <div className="space-y-2">
                  {formData.vehicles.flatMap((vehicle: any, vehicleIndex: number) =>
                    vehicle.selectedPackages.map((packageId: string) => {
                      let name = "";
                      let price = 0;
                      if (Object.keys(extraServices.windowtinting).includes(packageId)) {
                        const pkg = extraServices.windowtinting[packageId];
                        if (pkg) {
                          name = `Vehicle ${vehicleIndex + 1} (${vehicle.make} ${vehicle.model}): ${pkg.name}`;
                          price = pkg.price || 0;
                        }
                      } else if (Object.keys(extraServices.ceramiccoating).includes(packageId)) {
                        const pkg = extraServices.ceramiccoating[packageId];
                        if (pkg) {
                          name = `Vehicle ${vehicleIndex + 1} (${vehicle.make} ${vehicle.model}): ${pkg.name}`;
                          price = pkg.price || 0;
                        }
                      } else if (packageId === "ceramic_coating") {
                        name = `Vehicle ${vehicleIndex + 1} (${vehicle.make} ${vehicle.model}): Ceramic Coating Package`;
                        price = 500;
                      } else if (packageId.includes("-")) {
                        // Car type: "interior-basic"
                        const [serviceCategory, packageKey] = packageId.split("-");
                        const pkg = service[vehicle.vehicleType]?.[serviceCategory]?.[packageKey];
                        name = `Vehicle ${vehicleIndex + 1} (${vehicle.make} ${vehicle.model}): ${pkg?.name || packageId}`;
                        price = calculatePrice(
                          vehicle.vehicleType,
                          packageId,
                          serviceCategory,
                          Number(vehicle.size)
                        );
                      } else {
                        // Boat/RV type: "interior"
                        const pkg = service[vehicle.vehicleType]?.[packageId];
                        name = `Vehicle ${vehicleIndex + 1} (${vehicle.make} ${vehicle.model}): ${pkg?.name || packageId}`;
                        price = calculatePrice(
                          vehicle.vehicleType,
                          packageId,
                          packageId,
                          Number(vehicle.size)
                        );
                      }
                      return (
                        <div key={`${vehicleIndex}-${packageId}`} className="flex justify-between p-2 border border-gray-600 rounded bg-gray-700/50 text-white">
                          <span>{name}</span>
                          <span>${price}</span>
                        </div>
                      );
                    })
                  )}
                  {formData.vehicles.every((v: any) => v.selectedPackages.length === 0) && (
                    <p className="text-sm text-gray-400">No packages selected</p>
                  )}
                </div>
              </div>

              {/* Additional Services */}
              {formData.additionalServices.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2 text-white">Add-ons</h3>
                  <div className="space-y-2">
                    {formData.additionalServices.map((id: string) => {
                      const add = additionalServices.find((a) => a.id === id);
                      if (!add) return null;
                      return (
                        <div
                          key={id}
                          className="flex justify-between p-2 border border-gray-600 rounded bg-gray-700/50 text-white"
                        >
                          <span>{add.name}</span>
                          <span>${add.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Totals */}
              <div className="border-t border-gray-600 pt-3 space-y-1">
                <div className="flex justify-between text-white">
                  <span className="font-medium">Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                {isPromoValid && (
                  <div className="flex justify-between text-green-400 font-medium">
                    <span>Promo Applied (15% Discount)</span>
                    <span>-${(totalPrice - discountedPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-600 mt-2 text-white">
                  <span>Total:</span>
                  <span>${discountedPrice.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryAccordion;