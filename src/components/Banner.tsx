import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#5EECC7] via-[#F9D76D] to-[#E86EBF] text-black py-2 px-6 text-sm flex justify-between items-center">
      <span className="font-medium">Celebrate Western&apos;s passion projects and their makers.</span>
      <div>
        <span className="opacity-80">March 24 |</span>
        {" "}
        <Link
          href="https://lu.ma/ip2mwwxh?utm_source=momentum_website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:opacity-70 transition-opacity"
        >
          Register for Alchemy here.
        </Link>
      </div>
    </div>
  );
}
