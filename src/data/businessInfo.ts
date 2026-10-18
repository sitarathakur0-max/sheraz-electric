export interface BusinessContact {
  name: string;
  category: string;
  street: string;
  subArea: string;
  mainArea: string;
  city: string;
  country: string;
  fullAddress: string;
  phone: string;
  phoneFormatted: string;
  phoneDial: string;
}

export const BUSINESS_INFO: BusinessContact = {
  name: 'Sheraz Electric',
  category: 'Electrical Installation and Services',
  street: 'Al Madina Street',
  subArea: 'New Sabzazar Colony',
  mainArea: 'Gulgasht Colony',
  city: 'Multan',
  country: 'Pakistan',
  fullAddress: 'Al Madina Street, New Sabzazar Colony, Gulgasht Colony, Multan, Pakistan',
  phone: '+92 304 7358893',
  phoneFormatted: '+92 304 7358893',
  phoneDial: 'tel:+923047358893'
};

export interface ServiceItem {
  id: string;
  title: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  scopePoints: string[];
  recommendedWhen: string;
  turnaroundNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'troubleshooting',
    title: 'Household Electrical Troubleshooting',
    categoryName: 'Diagnostics & Repair',
    shortDescription: 'Systematic fault-finding for tripping circuit breakers, intermittent outages, and sudden room-level blackouts.',
    fullDescription: 'Electrical faults inside residential circuits often trace back to hidden conduit damage, loose terminal screws in junction boxes, or overloaded branch wires. We conduct thorough line-to-neutral and line-to-earth diagnostic tests to isolate the root failure without unnecessary wall damage.',
    scopePoints: [
      'Locating persistent short circuits and tripped MCB breakers',
      'Neutral failure and voltage drop diagnosis across household rooms',
      'Isolating damaged conduits and concealed junction boxes',
      'Rectifying intermittent sparking or flickering wall fixtures'
    ],
    recommendedWhen: 'When breakers trip repeatedly or specific rooms suddenly lose power.',
    turnaroundNote: 'Same-day diagnostic visits available across Gulgasht Colony and central Multan.'
  },
  {
    id: 'switches-lighting',
    title: 'Switches, Sockets, and Lighting Installation',
    categoryName: 'Fixtures & Fittings',
    shortDescription: 'Precision fitting of flush rocker switches, heavy-load sockets, chandeliers, downlights, and exterior wall sconces.',
    fullDescription: 'Properly mounted switchplates and sockets ensure both aesthetic appeal and long-term fire safety. We install high-grade plate switches, power sockets rated for refrigerators and irons, decorative ceiling chandeliers, concealed LED ceiling strips, and exterior weatherproof lamps.',
    scopePoints: [
      'Installation of modular piano/rocker switchboards and faceplates',
      'Heavy-duty 15A/20A power plugs for home appliances and room heaters',
      'Indoor architectural downlighting, wall sconces, and ceiling lighting fixtures',
      'Replacement of loose, scorched, or cracked plastic outlet plates'
    ],
    recommendedWhen: 'During room renovations, new fixture additions, or damaged socket replacements.',
    turnaroundNote: 'Neat installation with flush wall alignment and secure screw terminals.'
  },
  {
    id: 'wiring-replacement',
    title: 'Electrical Wiring and Replacement',
    categoryName: 'Conductor & Cable Works',
    shortDescription: 'Rewiring aged single-core circuits, running dedicated appliance lines, and replacing brittle or overheated conductors.',
    fullDescription: 'Aging copper cables or substandard single-insulated wiring poses severe fire hazards during peak summer loads. We pull calibrated multi-strand copper cables through concealed conduits, replace degraded wires, and separate dedicated high-draw circuits for air conditioners and electric geysers.',
    scopePoints: [
      'Dedicated conduit wiring for high-load residential air conditioning units',
      'Replacement of brittle, hardened, or undersized copper conductors',
      'Sub-circuit distribution wiring from main distribution panels to room switchboards',
      'Proper copper earthing conductor runs for household protection'
    ],
    recommendedWhen: 'When adding high-amperage appliances or upgrading wiring in older homes.',
    turnaroundNote: 'Calculated cable gauge matching each circuit’s true electrical load.'
  },
  {
    id: 'fault-inspection',
    title: 'Electrical Fault Inspection',
    categoryName: 'Safety Audits',
    shortDescription: 'Comprehensive safety assessment of main distribution boards, circuit breakers, and household earthing loops.',
    fullDescription: 'A thorough electrical safety inspection checks whether your home’s main distribution board (DB) is balanced, properly protected with correct breaker ratings, and safely grounded. We identify loose busbar connections, unbalanced phase loads, and failing main breakers before they result in appliance damage.',
    scopePoints: [
      'Distribution board (DB) terminal tightness and thermal check',
      'Evaluation of breaker trip ratings (MCB/MCCB) against cable capacity',
      'Grounding / earthing continuity verification across kitchen and bathroom outlets',
      'Identifying unshielded wiring joints and unsafe open junction boxes'
    ],
    recommendedWhen: 'Before the peak summer cooling season or after experiencing repeated power irregularities.',
    turnaroundNote: 'Written findings and straightforward recommendations for the homeowner.'
  },
  {
    id: 'fan-fitting',
    title: 'Fan and Basic Electrical Fitting',
    categoryName: 'Appliance Mounting',
    shortDescription: 'Secure hanging, balancing, and wiring of ceiling fans, exhaust fans, electronic speed regulators, and brackets.',
    fullDescription: 'Ceiling fans require secure downrod pin locks, balanced blades, and correct capacitor wiring to operate quietly and safely without wobbling. We mount ceiling fans, wall bracket fans, kitchen and bathroom exhaust units, and replace noisy or failing speed dimmers.',
    scopePoints: [
      'Ceiling fan hanging with safety cotter pins and sturdy ceiling hooks',
      'Blade alignment, balancing, and capacitor replacement for humming units',
      'Kitchen and bathroom exhaust fan wall-sleeve mounting and wiring',
      'Step-type and electronic fan speed regulator installations in switchboards'
    ],
    recommendedWhen: 'Seasonal fan installations, replacements, or fixing noisy, wobbling fans.',
    turnaroundNote: 'Safe ceiling anchor check and smooth, quiet speed regulation test.'
  },
  {
    id: 'residential-maintenance',
    title: 'General Residential Electrical Maintenance',
    categoryName: 'Upkeep & Servicing',
    shortDescription: 'Scheduled upkeep of residential electrical distribution boards, loose terminations, and household wiring checks.',
    fullDescription: 'Seasonal temperature variations and heavy appliance loads cause copper terminal screws to loosen over time due to thermal expansion. Our general maintenance service checks distribution boards, tightens connection terminals, checks for hot spots, and cleans dust from circuit enclosures.',
    scopePoints: [
      'Tightening screw terminals in distribution boards and main switches',
      'Checking neutral links and load distribution across household circuits',
      'Cleaning dust and debris from enclosed breaker panels',
      'Routine inspection of exposed outdoor conduits and patio wiring'
    ],
    recommendedWhen: 'Annually before summer or whenever moving into a new residence in Multan.',
    turnaroundNote: 'Preventative care to prevent unexpected breaker burnouts.'
  }
];

export interface SafetyTopic {
  id: string;
  title: string;
  urgency: 'critical' | 'warning' | 'advisory';
  summary: string;
  symptoms: string[];
  safeAction: string;
  dangerNotice: string;
}

export const SAFETY_TOPICS: SafetyTopic[] = [
  {
    id: 'fault-signs',
    title: 'Warning Signs of Household Electrical Faults',
    urgency: 'critical',
    summary: 'Electrical faults often manifest subtle physical signs before catastrophic failure or fire occurs. Recognizing these signals early protects lives and property.',
    symptoms: [
      'A persistent fishy or burning plastic smell near switches or the distribution board',
      'Flickering or dimming lights when a refrigerator or water pump turns on',
      'Visible scorching, brown discoloration, or melting on outlet faceplates',
      'Mild tingling sensation when touching the metal chassis of a washing machine or refrigerator',
      'Crackling, popping, or humming sounds from wall outlets or switchboards'
    ],
    safeAction: 'Immediately switch off the individual circuit breaker or the main switch. Avoid using appliances on that line until an electrician tests it.',
    dangerNotice: 'Never touch a scorched outlet or breaker box with wet hands or bare feet.'
  },
  {
    id: 'overloaded-sockets',
    title: 'Overloaded Sockets and Extension Multi-Boards',
    urgency: 'warning',
    summary: 'Plugging high-wattage appliances into cheap extension boards or daisy-chaining multi-plugs is one of the leading causes of residential electrical fires.',
    symptoms: [
      'Extension boards feeling warm or hot to the touch during operation',
      'Using multiple high-power devices (iron, microwave, room heater, kettle) on a single wall outlet',
      'Loose fitting plugs that wobble or produce small visible sparks when inserted',
      'Burn marks on multi-plug adaptor pins'
    ],
    safeAction: 'Dedicate permanent, heavy-duty wall sockets (15A/20A) with direct conduit wiring for high-power appliances.',
    dangerNotice: 'Never run extension cords beneath carpets, rugs, or through doorway pinch points.'
  },
  {
    id: 'damaged-wiring',
    title: 'Why Damaged Wiring Demands Professional Inspection',
    urgency: 'critical',
    summary: 'Substandard or damaged insulation concealed inside walls cannot dissipate heat properly, generating localized electrical arcs that ignite wall framing and ceiling timbers.',
    symptoms: [
      'Circuits installed more than 15–20 years ago with brittle rubber or substandard PVC',
      'DIY wire joints joined with low-grade tape inside ceiling fans or unsealed boxes',
      'Wiring chewed by rodents in false ceilings or exposed along exterior walls'
    ],
    safeAction: 'Request a continuity and insulation resistance test from a qualified tradesperson to locate degraded segments without tearing down walls.',
    dangerNotice: 'Do not attempt to pull live wires or splice cables yourself while power is connected.'
  },
  {
    id: 'household-precautions',
    title: 'Basic Electrical Safety Precautions for Multan Households',
    urgency: 'advisory',
    summary: 'Simple daily habits dramatically decrease the risk of electrical shock and appliance damage across residential homes.',
    symptoms: [
      'Operating electrical switches with damp hands in kitchens or bathrooms',
      'Pulling cords to unplug devices rather than gripping the insulated plug head',
      'Using ungrounded two-pin plugs for grounded metal appliances',
      'Leaving open empty light bulb sockets within reach of children'
    ],
    safeAction: 'Install residual current devices (RCD/ELCB), keep water sources well separated from power points, and install tamper-resistant safety socket covers.',
    dangerNotice: 'Keep all electrical appliances away from water pools, sinks, and outdoor monsoon rain splash zones.'
  },
  {
    id: 'when-to-stop',
    title: 'When to Stop Using a Circuit & Call a Professional',
    urgency: 'critical',
    summary: 'Knowing when to de-energize an electrical circuit prevents minor component issues from escalating into structure fires or lethal shocks.',
    symptoms: [
      'A miniature circuit breaker (MCB) immediately trips back down every time you flip it up',
      'Smoke or acrid vapor visible from any switch, fixture, or panel',
      'Sparks emit violently from an outlet when inserting a plug',
      'Water ingress from roof leaks or plumbing into an electrical conduit or switchboard'
    ],
    safeAction: 'De-energize the main double-pole breaker on your distribution board immediately. Keep everyone away from the affected area, and call Sheraz Electric at +92 304 7358893 for diagnosis.',
    dangerNotice: 'Never force a tripped breaker into the "ON" position with tape or wire. A tripping breaker is actively protecting your home from fire.'
  }
];

export const SERVICE_AREAS = [
  { name: 'Gulgasht Colony', detail: 'Primary service zone & workshop vicinity' },
  { name: 'New Sabzazar Colony', detail: 'Al Madina Street and adjacent residential lanes' },
  { name: 'Bosan Road Neighborhoods', detail: 'Residential sectors adjoining Bosan Road' },
  { name: 'Shalimar Colony', detail: 'Local household call-outs and fitting services' },
  { name: 'Officers Colony & Cantt', detail: 'Residential maintenance visits by appointment' }
];
