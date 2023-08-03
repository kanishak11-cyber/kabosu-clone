import React from "react";

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      color: "#EBA36F",
      releases: ["Kabosu (MAY 10th)"],
      listings: [
        "Kabosu on CoinMarketCap",
        "Kabosu on CoinGecko",
        "Kabosu on centralized Exchange",
      ],
      operations: [
        "Voluntary donation to community chosen charities",
        "Debuting development of internal Decentralized Exchange",
      ],
    },
    {
      phase: "Phase 2",
      color: "#8441Ab",
      listings: ["Additional Centralized Exchanges for Kabosu"],
      marketing: [
        "2nd Round of Marketing Push",
        "More Influencer promotional material",
      ],
      operations: [
        "Staking Mechanism",
        "Voluntary donation to community",
        "Update on Decentralized Exchange Development",
        "Ecosystem update 1",
        "Debuting development of INU Wallet",
      ],
    },
    {
      phase: "Phase 3",
      color: "#CAF9EC",
      releases: ["Decentralized Exchange"],
      listings: ["De-centralized Exchange", "Additional Centralized Exchanges"],
      marketing: [
        "3rd Round of Marketing Push",
        "More Influencer promotional material",
        "Partnership Establishment",
      ],
      operations: [
        "Voluntary donation to community chosen charities",
        "Debuting development of Staking Mechanism",
        "Ecosystem update 2",
        "Debuting development of INU Wallet",
        "Debuting development of ecosystem integral Token Bridge",
      ],
    },
    {
      phase: "Phase 4",
      color: "#1F6BAE",
      releases: ["INU ECOSYSTEM Wallet", "Token Bridge"],
      marketing: [
        "4th round of marketing push",
        "more influencer promotional material",
        "partnership establishment",
      ],
      operations: [
        "Voluntary donation to community chosen charities",
        "Debuting development of NFT MarketPlace",
        "Ecosystem update 3",
        "Decentralized Exchange Update 1",
        "Ecosystem integral centralized exchange development planning",
      ],
    },
    {
      phase: "Phase 5",
      color: "#FDFD96",
      releases: ["ecosystem integral token INU", "NFT Marketplace"],
      listings: ["TIER 1 centralized exchange application"],
      marketing: [
        "5th Round of Marketing Push",
        "More Influencer promotional material",
        "Partnership Establishment",
      ],
      operations: [
        "Voluntary donation to community chosen charities",
        "NFT sales related charities donation",
        "Debuting development of Centralized Exchange",
        "centralized exchange legal aspect handling",
        "ecosystem update 4",
        "decentralized exchange update 2",
        "ecosystem integral centralized exchange development planning",
      ],
    },
    {
      phase: "Phase 6",
      color: "#B19CD9",
      operations: ["Merchandise/Pop-up Shop"],
    },
  ];

  return (
    <div className="w-full">
      <div className="md:px-20 md:py-10 px:10 py-5">
        <div className="flex flex-row justify-center items-center ont">
          <h1 className="text-5xl vh mx-5">Roadmap</h1>
          <div className="line1"></div>
        </div>
        <div className="flex flex-row md:p-8 px-7 text-center overflow-hidden overflow-x-auto text-xl capitalize text-[#4c5a77] ont">
          <div className="flex flex-row ">
            {roadmapData.map((phase, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className="bg-[#EBA36F] w-3 rounded-full h-3 p-2 mt-9"
                  style={{ backgroundColor: phase.color }}
                ></div>
                <h6 className="uppercase text-2xl">
                  {phase.phase}
                  <div className="line1"></div>
                  <div>
                    {phase.releases && (
                      <div className="w-5 h-5 mx-[6.25rem] -mt-2.5 bg-[#8441Ab] rounded-full"></div>
                    )}
                    {phase.listings && (
                      <div className="w-5 h-5 mx-[6.25rem] -mt-2.5 bg-[#CAF9EC] rounded-full"></div>
                    )}
                    {phase.marketing && (
                      <div className="w-5 h-5 mx-[6.25rem] -mt-2.5 bg-[#1F6BAE] rounded-full"></div>
                    )}
                    {phase.operations && (
                      <div className="w-5 h-5 mx-[6.25rem] -mt-2.5 bg-[#FDFD96] rounded-full"></div>
                    )}
                    <div className="vl align-middle mx-28 mt-5"></div>
                  </div>
                </h6>
                <br />
                {phase.releases && (
                  <>
                    <strong>Releases:</strong>
                    <br />
                    {phase.releases.map((release, idx) => (
                      <small key={idx} className="font-normal">
                        - {release}
                      </small>
                    ))}
                    <br />
                    <br />
                  </>
                )}
                {phase.listings && (
                  <>
                    <strong>Listings:</strong>
                    <br />
                    {phase.listings.map((listing, idx) => (
                      <small key={idx} className="font-normal">
                        - {listing}
                      </small>
                    ))}
                    <br />
                    <br />
                  </>
                )}
                {phase.marketing && (
                  <>
                    <strong>Marketing:</strong>
                    <br />
                    {phase.marketing.map((item, idx) => (
                      <small key={idx} className="font-normal">
                        - {item}
                      </small>
                    ))}
                    <br />
                    <br />
                  </>
                )}
                {phase.operations && (
                  <>
                    <strong>Operations:</strong>
                    <br />
                    {phase.operations.map((operation, idx) => (
                      <small key={idx} className="font-normal">
                        - {operation}
                      </small>
                    ))}
                    <br />
                    <br />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Roadmap;
