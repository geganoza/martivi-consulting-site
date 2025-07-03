export default function Footer() {
  return (
    <footer
      className="relative mx-auto flex h-[300px] w-full max-w-[1728px] items-center
                 px-[100px] py-8 text-lg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/footer bg.png')" }}
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-y-4">
        <p className="text-white">© 2025 MARTIVI CONSULTING</p>
        <address className="flex flex-wrap items-center gap-x-3 gap-y-2 not-italic text-white">
          <a
            href="mailto:contact@martiviconsulting.com"
            className="no-underline"
          >
            contact@martiviconsulting.com
          </a>
          <span>|</span>
          <a href="tel:+995577273090" className="no-underline">
            +995 577 273 090
          </a>
          <span>|</span>
          <a href="tel:+13473351038" className="no-underline">
            +1 347 335 1038
          </a>
          <span>|</span>
          <span className="inline-flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            Planet&nbsp;Earth
          </span>
        </address>
      </div>
    </footer>
  );
}
