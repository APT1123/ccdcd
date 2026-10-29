const organizations = [
  "IIM Lucknow EIC",
  "FITT IIT Delhi",
  "Microsoft",
  "IIT Ropar",
  "Kotak BizLabs",
  "DST",
  "EXIM Bank",
]

export default function CredibilityStrip() {
  return (
    <section
      className="border-y border-gray-100 bg-white"
      aria-labelledby="credibility-strip-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-8">
          <h2
            id="credibility-strip-heading"
            className="shrink-0 text-[10px] sm:text-xs font-bold tracking-widest text-gray-500"
          >
            SUPPORTED &amp; ASSOCIATED WITH
          </h2>
          <ul
            className="flex flex-1 items-center gap-5 lg:justify-between overflow-x-auto pb-1 sm:pb-0"
            tabIndex={0}
            aria-label="Organization logo placeholders"
          >
            {organizations.map((organization) => (
              <li
                key={organization}
                className="shrink-0 flex items-center gap-2 text-[11px] font-semibold text-gray-500 whitespace-nowrap"
                title="Approved logo asset not supplied"
              >
                <span
                  className="w-4 h-4 rounded border border-gray-200 bg-gray-50"
                  aria-hidden="true"
                />
                <span>{organization}</span>
                <span className="sr-only">logo placeholder</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
