import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-6 py-4 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <a href="https://lu.ma/moment.um?utm_source=momentum_website" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase hover:opacity-70 transition-opacity">join us</a>
          <a href="https://buymeacoffee.com/moment.um" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase hover:opacity-70 transition-opacity">contribute</a>
          <a href="/timer" className="text-sm font-medium uppercase hover:opacity-70 transition-opacity">live timer</a>
          <a href="https://map.socratica.info/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase hover:opacity-70 transition-opacity">socratica map</a>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/momentum_place" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/momentum_place" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/momentum-uwo/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://open.spotify.com/playlist/5OS7YjERKsIF9R2oUBWhyW" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15c4-1 8-1 8 0"/><path d="M7 12c5-1.5 10-1.5 10 0"/><path d="M6 9c6-2 12-2 12 0"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/TEXT.svg"
          alt="momentum"
          width={1742}
          height={528}
          className="w-[70vw] h-auto"
        />
      </div>
    </footer>
  );
}
