import { MdHistoryEdu } from "react-icons/md";

export const Licensing = () => {
  return (
    <section className="md:col-span-8 bg-primary/8 rounded-3xl p-12">
      <h2 className="text-3xl font-black font-headline mb-8 tracking-tighter">
        Commercial <span className="text-primary">Licensing</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="font-bold text-slate-500 mb-2 font-label text-xs uppercase tracking-widest">
            Non-Exclusive
          </p>
          <p className="text-2xl font-black text-primary">+50%</p>
          <p className="text-xs text-slate-400 mt-2 leading-tight">
            For streamers &amp; small creators
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="font-bold text-slate-500 mb-2 font-label text-xs uppercase tracking-widest">
            Exclusive
          </p>
          <p className="text-2xl font-black text-primary">+100%</p>
          <p className="text-xs text-slate-400 mt-2 leading-tight">
            Only you can use this artwork
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="font-bold text-slate-500 mb-2 font-label text-xs uppercase tracking-widest">
            Full Copyright
          </p>
          <p className="text-2xl font-black text-primary">+150 - 200%</p>
          <p className="text-xs text-slate-400 mt-2 leading-tight">
            Total ownership transfer
          </p>
        </div>
      </div>

      <div className="mt-12 pt-12 border-t border-primary/10">
        <h2 className="text-2xl font-bold font-headline mb-4 flex items-center gap-2">
          <MdHistoryEdu className="text-primary"/>
          Revisions
        </h2>
        <p className="text-slate-700">
          Up to <span className="font-bold text-primary">5 rounds</span> of
          revisions are included during key stages: Sketch, Linework, and base
          Color. Major structural changes after the painting phase may incur
          extra fees.
        </p>
      </div>
    </section>
  );
};
