import AdminLayout from "@/components/ui/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, DollarSign, Package } from "lucide-react";

export default function Home() {
  const stats = [
    { title: "Total Pengguna", value: "1,250", change: "+12.5%", isUp: true, icon: Users },
    { title: "Pendapatan", value: "Rp 45.200.000", change: "+8.2%", isUp: true, icon: DollarSign },
    { title: "Pesanan Aktif", value: "84", change: "-2.1%", isUp: false, icon: Package },
  ];

  const mockUsers = [
    { id: 1, name: "Budi Santoso", email: "budi@gmail.com", role: "Administrator", status: "Aktif" },
    { id: 2, name: "Siti Rahma", email: "siti@gmail.com", role: "Staff Editor", status: "Aktif" },
    { id: 3, name: "Andi Pratama", email: "andi@gmail.com", role: "Staff Editor", status: "Pending" },
  ];

  return (
    <AdminLayout title="Overview Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx} className="rounded-2xl border-slate-200/80 shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 text-slate-600">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xl sm:text-3xl font-extrabold text-slate-800 tracking-tight break-all">
                    {item.value}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold">
                    <span
                      className={
                        item.isUp
                          ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
                          : "text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full"
                      }
                    >
                      {item.change}
                    </span>
                    <span className="text-slate-400 text-[11px] sm:text-xs">dibanding bulan lalu</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="rounded-2xl border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">Aktivitas Pengguna Terbaru</h3>
            <p className="text-xs text-slate-500 mt-0.5">Ringkasan user yang baru terdaftar di sistem.</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-[#2B5B84] hover:bg-[#1E4363] text-white text-xs font-bold rounded-xl transition-colors shadow-sm">
            + Tambah Data
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[500px]">
            <TableHeader className="bg-slate-50/70">
              <TableRow>
                <TableHead className="pl-6 text-xs uppercase">Pengguna</TableHead>
                <TableHead className="text-xs uppercase">Role</TableHead>
                <TableHead className="text-xs uppercase">Status</TableHead>
                <TableHead className="pr-6 text-right text-xs uppercase">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-medium text-sm">
              {mockUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-slate-50/50">
                  <TableCell className="pl-6">
                    <p className="font-bold text-slate-800">{user.name}</p>
                    <p className="text-xs text-slate-400 font-normal">{user.email}</p>
                  </TableCell>
                  <TableCell className="text-slate-600">{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Aktif"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200/50"
                          : "bg-amber-50 text-amber-600 border border-amber-200/50"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="pr-6 text-right space-x-3">
                    <button className="text-xs font-bold text-[#2B5B84] hover:underline">Edit</button>
                    <button className="text-xs font-bold text-[#E96B85] hover:underline">Hapus</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </AdminLayout>
  );
}