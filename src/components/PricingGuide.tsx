import { MdEdit, MdPalette, MdBrush } from "react-icons/md";

export const PricingGuide = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg shadow-primary/20 p-12 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black tracking-tighter mb-2">
          Pricing <span className="text-primary">Guide</span>
        </h2>
        <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">
          All Prices Are Per Character
        </p>
      </div>

      <div className="flex gap-8">
        <div className="p-8 rounded-2xl transition-transform bg-primary/15 w-1/3">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-between">
            Line Art
            <MdEdit className="text-primary" />
          </h3>

          <ul className="space-y-4">
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Portrait</span>
              <span className="text-xl font-bold">$80</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Waist-up</span>
              <span className="text-xl font-bold">$100</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Full Body</span>
              <span className="text-xl font-bold">$150</span>
            </li>
          </ul>
        </div>

        {/* Flat Color */}
        <div className="p-8 rounded-2xl transition-transform bg-primary/15 w-1/3">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-between">
            Flat Color
            <MdPalette className="text-primary" />
          </h3>

          <ul className="space-y-4">
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Portrait</span>
              <span className="text-xl font-bold">$130</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Waist-up</span>
              <span className="text-xl font-bold">$120</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Full Body</span>
              <span className="text-xl font-bold">$200</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl transition-transform bg-primary/15 w-1/3">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-between">
            Full Render
            <MdBrush className="text-primary" />
          </h3>

          <ul className="space-y-4">
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Portrait</span>
              <span className="text-xl font-bold">$150</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Waist-up</span>
              <span className="text-xl font-bold">$200</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-primary/10">
              <span className="font-medium">Full Body</span>
              <span className="text-xl font-bold">$300</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
