import { clients } from "../../_lib/data";

// Client logo colors for visual variety
const clientColors = [
  "bg-blue-700",
  "bg-red-700",
  "bg-orange-600",
  "bg-green-700",
  "bg-yellow-600",
  "bg-blue-800",
  "bg-red-800",
  "bg-teal-700",
];

export default function ClientsSection() {
  const doubled = [...clients, ...clients]; // duplicate for seamless loop

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Klien Kami</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy">
            Dipercaya oleh Perusahaan Energi Terkemuka
          </h2>
        </div>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
            {doubled.map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                className="flex items-center justify-center w-40 h-20 border border-gray-100 hover:border-ekp-red/30 hover:shadow-md transition-all group shrink-0 bg-white"
              >
                {/*
                  TO ADD CLIENT LOGOS:
                  Replace this div with: <Image src={`/images/clients/${client.id}.png`} alt={client.name} width={120} height={60} className="object-contain" />
                */}
                <div className="text-center">
                  <div
                    className={`w-10 h-10 ${clientColors[i % clientColors.length]} rounded-full flex items-center justify-center mx-auto mb-1`}
                  >
                    <span className="text-white font-black text-xs">{client.abbreviation}</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-semibold group-hover:text-ekp-red transition-colors line-clamp-2 text-center px-2">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
