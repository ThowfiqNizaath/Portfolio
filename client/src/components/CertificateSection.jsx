import React from 'react'
import { certificates, projects } from '../assets/assert';

const CertificateSection = () => {
  return (
    <div id="certificates" className="py-24 px-1 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certificates & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Here are some of my certificates and achievements that highlight my
          commitment to continuous learning, professional growth, and excellence
          in my field.
        </p>

        <div className="flex flex-nowrap gap-8  overflow-x-scroll snap-x scroll-none w-full p-2">
          {certificates.map((certificate, index) => (
            <div key={index} className="group w-full max-w-[600px] border gradient-border flex-none md:h-90 rounded-2xl relative overflow-hidden snap-start">
              <div className="w-full md:h-full bg-black/10 z-40">
                <img
                  src={certificate.image}
                  className="w-full h-auto md:h-full object-cover"
                />
              </div>

              {/* Mobile */}
              <div className="md:hidden flex flex-col justify-around gap-3 py-5 px-2 overflow-hidden">
                <h2 className="text-2xl pb-2 font-semibold">
                  {certificate.title}
                </h2>
                <div className="text-left ml-5">
                  Type:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.type.toUpperCase()}
                  </span>
                </div>
                <div className="ml-5 text-left">
                  Provided By:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.by}
                  </span>
                </div>
                <div className="ml-5 text-left">
                  Platform:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.platform}
                  </span>
                </div>
                <p className="my-2 text-sm">{certificate.description}</p>

                <a herf="#" target="_blank" className="cosmic-button">
                  View Certificate
                </a>
              </div>

              {/* Desktop */}
              <div className="absolute gradient-border border-none py-5 px-10 flex flex-col md:group-hover:inset-0 overflow-hidden transition-all duration-300">
                <h2 className="text-2xl font-semibold pb-2">
                  {certificate.title}
                </h2>
                <div className="text-left mb-2">
                  Type:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.type.toUpperCase()}
                  </span>
                </div>
                <div className="mb-2 text-left">
                  Provided By:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.by}
                  </span>
                </div>
                <div className="text-left">
                  Platform:{" "}
                  <span className="font-semibold text-lg ml-2">
                    {certificate.platform}
                  </span>
                </div>
                <p className="my-5 text-sm">{certificate.description}</p>

                <a herf="#" target="_blank" className="cosmic-button mt-5 cursor-pointer">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificateSection