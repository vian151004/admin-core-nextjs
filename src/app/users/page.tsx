import AdminLayout from "@/components/ui/admin-layout";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function UsersPage() {
  const users = [
    { id: 1, name: "Budi Santoso", email: "budi@gmail.com", role: "Administrator", status: "Aktif" },
    { id: 2, name: "Siti Rahma", email: "siti@gmail.com", role: "Staff Editor", status: "Aktif" },
    { id: 3, name: "Andi Pratama", email: "andi@gmail.com", role: "Staff Editor", status: "Pending" },
  ];

  return (
    <AdminLayout title="Kelola Data User">
      <Card className="rounded-2xl border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">Daftar Pengguna Sistem</h3>
            <p className="text-xs text-slate-500 mt-0.5">Kelola hak akses dan akun pengguna aktif.</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-[#2B5B84] hover:bg-[#1E4363] text-white text-xs font-bold rounded-xl transition-colors shadow-sm">
            + Tambah User
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[500px]">
            <TableHeader className="bg-slate-50/70">
              <TableRow>
                <TableHead className="pl-6 text-xs uppercase">Nama & Email</TableHead>
                <TableHead className="text-xs uppercase">Role</TableHead>
                <TableHead className="text-xs uppercase">Status</TableHead>
                <TableHead className="pr-6 text-right text-xs uppercase">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-medium text-sm">
              {users.map((u) => (
                <TableRow key={u.id} className="hover:bg-slate-50/50">
                  <TableCell className="pl-6">
                    <p className="font-bold text-slate-800">{u.name}</p>
                    <p className="text-xs text-slate-400 font-normal">{u.email}</p>
                  </TableCell>
                  <TableCell className="text-slate-600">{u.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        u.status === "Aktif"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200/50"
                          : "bg-amber-50 text-amber-600 border border-amber-200/50"
                      }`}
                    >
                      {u.status}
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