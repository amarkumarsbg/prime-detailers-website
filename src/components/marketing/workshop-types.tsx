import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { 
  Car, 
  Bike, 
  Zap, 
  Truck, 
  Bus, 
  Paintbrush, 
  Disc, 
  Battery, 
  Network, 
  User 
} from "lucide-react";

const workshopTypes = [
  { name: "Car Garages", icon: Car },
  { name: "Bike Workshops", icon: Bike },
  { name: "EV Garages", icon: Zap },
  { name: "Truck Workshops", icon: Truck },
  { name: "Fleet Workshops", icon: Bus },
  { name: "Car Detailing", icon: Paintbrush },
  { name: "Tyre Shops", icon: Disc },
  { name: "Battery Shops", icon: Battery },
  { name: "Multi-Branch Garages", icon: Network },
  { name: "Independent Garages", icon: User },
];

export function WorkshopTypes() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Garage Software Built for Every Type of <span className="relative whitespace-nowrap"><span className="relative z-10">Automotive Workshop</span><span className="absolute -bottom-1 left-0 right-0 h-1 bg-teal-500"></span></span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose the solution designed specifically for your garage business model.
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5" staggerChildren={0.05}>
          {workshopTypes.map((type) => {
            const Icon = type.icon;
            return (
              <StaggerItem
                key={type.name}
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-md"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-slate-200/50 text-slate-600 transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-800">{type.name}</h3>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
