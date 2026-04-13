import {
  MdDownload,
  MdHighQuality,
  MdImage,
  MdShare,
} from "react-icons/md";

export const Deliverables = () => {
    return (
      <section className="md:col-span-4 bg-white rounded-3xl p-10 flex flex-col justify-center border-3 border-primary/20 shadow-lg shadow-primary/20">
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2">
          <MdDownload className="text-primary text-3xl" /> Deliverables
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center gap-4">
            <MdHighQuality className="text-primary text-3xl bg-primary/20 rounded-full p-1" />
            <div>
              <p className="font-bold">High-Res Master</p>
              <p className="text-sm text-slate-400">
                CMYK 300 DPI for printing
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <MdImage className="text-primary text-3xl bg-primary/20 rounded-full p-1" />
            <div>
              <p className="font-bold">Web Versions</p>
              <p className="text-sm text-slate-400">Optimized PNG/JPEG files</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <MdShare className="text-primary text-3xl bg-primary/20 rounded-full p-1" />
            <div>
              <p className="font-bold">Social Media Pack</p>
              <p className="text-sm text-slate-400">
                Watermarked &amp; crop versions
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
}