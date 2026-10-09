import AdminLayout from "@/components/ui/admin-layout";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AdminLayout title="Pengaturan Sistem">
      <Card className="max-w-2xl rounded-2xl border-slate-200/80 shadow-sm">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Pengaturan Umum</h3>
            <p className="text-xs text-slate-500 mt-0.5">Konfigurasi identitas aplikasi dasar.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama Aplikasi
              </label>
              <input
                type="text"
                defaultValue="Admin Core"
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B5B84] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Support
              </label>
              <input
                type="email"
                defaultValue="support@admincore.com"
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B5B84] focus:bg-white transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="px-5 py-2.5 bg-[#2B5B84] hover:bg-[#1E4363] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}