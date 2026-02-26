import { T, Var } from "gt-next";
import { getGT } from "gt-next/server";
import AccordionSection from "@/components/AccordionSection";
import TypeBadge from "@/components/TypeBadge";
import { EquipmentRecommendation, DifficultyLevel } from "@/lib/astronomy";
import { equipmentGuide } from "@/lib/data";
import { ObjectType } from "@/lib/types";

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Observer's Guide — Stellaris Observatory"),
    description: gt("Learn about celestial object types, equipment recommendations, observing techniques, and astronomy terminology."),
  };
}

const objectTypes: { type: ObjectType; description: string }[] = [
  { type: "star", description: "Stars are luminous spheres of plasma held together by gravity. They range from red dwarfs with low surface temperatures to blue supergiants burning at extreme temperatures. Observing stars reveals their spectral class, which indicates surface temperature and composition. Double stars and variable stars offer particular interest, requiring refractor telescopes with high magnification to resolve." },
  { type: "planet", description: "Planets in our solar system are among the most rewarding targets for telescope observation. Jupiter displays cloud bands and the Great Red Spot. Saturn's ring system is unmistakable. Mars shows polar ice caps and surface features during favorable oppositions. A Schmidt-Cassegrain telescope with a tracking mount is ideal for planetary observation, allowing sustained high-magnification viewing." },
  { type: "galaxy", description: "Galaxies are vast collections of stars, gas, and dust bound by gravity. The Andromeda Galaxy is the nearest major galaxy, visible to the naked eye under dark skies. Spiral galaxies like the Whirlpool Galaxy reveal arm structure in large aperture telescopes. Galaxy observation demands dark skies and a large aperture Dobsonian telescope to gather sufficient light from these distant objects." },
  { type: "nebula", description: "Nebulae are clouds of gas and dust in interstellar space. Emission nebulae like the Orion Nebula glow from ionized hydrogen gas. Planetary nebulae like the Ring Nebula are shells expelled by dying stars. Supernova remnants like the Crab Nebula mark the aftermath of stellar explosions. A wide-field telescope with a nebula filter dramatically improves contrast and reveals structure invisible to the unfiltered eye." },
  { type: "cluster", description: "Star clusters come in two varieties: open clusters and globular clusters. Open clusters like the Pleiades contain young, hot stars and are best viewed with binoculars or a wide-field refractor. Globular clusters like the Hercules Cluster contain hundreds of thousands of ancient stars packed into a dense sphere. Large aperture telescopes can resolve individual stars in the outer regions of globular clusters." },
  { type: "comet", description: "Comets are icy bodies that develop spectacular tails when approaching the Sun. Periodic comets like Halley's Comet return at predictable intervals. Long-period comets appear without warning, sometimes becoming bright enough for naked-eye observation. Comet observation requires wide-field binoculars or a small refractor to capture the full extent of the dust and ion tails." },
];

export default function GuidesPage() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto space-y-10">
      <T>
        <h1 className="text-3xl font-bold">Observer's Guide</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A reference guide covering celestial object types, recommended equipment,
          difficulty levels, and essential astronomy terminology. Whether you are
          a beginner learning to identify constellations or an advanced observer
          hunting faint galaxies, this guide covers the fundamentals.
        </p>
      </T>

      <section>
        <T>
          <h2 className="text-xl font-semibold mb-4">Celestial Object Types</h2>
        </T>
        <div className="space-y-3">
          {objectTypes.map(({ type, description }) => (
            <AccordionSection
              key={type}
              title={
                <span className="flex items-center gap-3">
                  <TypeBadge type={type} />
                  <span><DifficultyLevel type={type} /></span>
                </span>
              }
            >
              <T>
                <p className="mb-2"><Var>{description}</Var></p>
                <p>
                  Recommended equipment: <EquipmentRecommendation type={type} />
                </p>
              </T>
            </AccordionSection>
          ))}
        </div>
      </section>

      <section>
        <T>
          <h2 className="text-xl font-semibold mb-4">Equipment Guide</h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Choosing the right equipment depends on your target. Aperture determines
            light-gathering power, which is critical for faint deep-sky objects like
            galaxies and nebulae. Magnification matters more for planetary observation.
          </p>
        </T>
        <div className="space-y-3">
          {equipmentGuide.map((item) => (
            <AccordionSection key={item.type} title={<Var>{item.type}</Var>}>
              <T>
                <div className="space-y-2">
                  <p>Aperture: <Var>{item.aperture}</Var></p>
                  <p>Best for: <Var>{item.bestFor}</Var></p>
                  <p><Var>{item.description}</Var></p>
                </div>
              </T>
            </AccordionSection>
          ))}
        </div>
      </section>

      <section>
        <T>
          <h2 className="text-xl font-semibold mb-4">Terminology Glossary</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-[var(--text)]">Magnitude</dt>
              <dd className="text-[var(--text-muted)]">
                A measure of an object's brightness as seen from Earth. Lower magnitude
                values indicate brighter objects. Negative magnitudes denote the brightest
                objects in the sky.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Constellation</dt>
              <dd className="text-[var(--text-muted)]">
                A defined region of the celestial sphere, named after mythological figures
                or objects. Constellations help locate and catalog celestial objects.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Right Ascension</dt>
              <dd className="text-[var(--text-muted)]">
                The celestial equivalent of longitude, measured in hours, minutes, and seconds.
                Right ascension and declination together define a position on the celestial sphere.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Declination</dt>
              <dd className="text-[var(--text-muted)]">
                The celestial equivalent of latitude, measured in degrees north or south of
                the celestial equator. Used with right ascension to specify positions.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Spectral Class</dt>
              <dd className="text-[var(--text-muted)]">
                A classification of stars based on surface temperature and spectral
                characteristics. Classes range from O (hottest, blue) through M (coolest, red).
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Light-year</dt>
              <dd className="text-[var(--text-muted)]">
                The distance light travels in one year, approximately 9.46 trillion kilometers.
                Used to express distances to stars, nebulae, and galaxies.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Aperture</dt>
              <dd className="text-[var(--text-muted)]">
                The diameter of a telescope's primary lens or mirror. Larger aperture
                gathers more light, enabling observation of fainter objects like distant
                galaxies and nebulae.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Azimuth</dt>
              <dd className="text-[var(--text-muted)]">
                The horizontal angle of an object measured clockwise from true north.
                Combined with altitude, it defines an object's position in the local sky.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Altitude</dt>
              <dd className="text-[var(--text-muted)]">
                The angle of a celestial object above the horizon, measured in degrees.
                Objects at higher altitude are generally easier to observe due to less
                atmospheric interference.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">Epoch</dt>
              <dd className="text-[var(--text-muted)]">
                A reference point in time used for celestial coordinates. The current
                standard epoch is J2000.0, corresponding to January 1, 2000.
              </dd>
            </div>
          </dl>
        </T>
      </section>
    </div>
  );
}
