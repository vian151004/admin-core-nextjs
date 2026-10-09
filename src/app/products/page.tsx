import AdminLayout from "@/components/ui/admin-layout";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProductsPage() {
  const products = [
    { id: 1, code: "PRD-001", name: "Pengembangan Web Custom", category: "Layanan", price: "Rp 5.000.000" },
    { id: 2, code: "PRD-002", name: "Template Admin Core", category: "Produk Digital", price: "Rp 750.000" },
    { id: 3, code: "PRD-003", name: "Maintenance Server (Bulanan)", category: "Layanan", price: "Rp 1.200.000" },
  ];

  return (
    <AdminLayout title="Produk & Layanan">
      <Card className="rounded-2xl border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">Katalog Produk & Layanan</h3>
            <p className="text-xs text-slate-500 mt-0.5">Kelola daftar layanan dan produk yang dijual.</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-[#2B5B84] hover:bg-[#1E4363] text-white text-xs font-bold rounded-xl transition-colors shadow-sm">
            + Tambah Produk
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[500px]">
            <TableHeader className="bg-slate-50/70">
              <TableRow>
                <TableHead className="pl-6 text-xs uppercase">Kode</TableHead>
                <TableHead className="text-xs uppercase">Nama Produk</TableHead>
                <TableHead className="text-xs uppercase">Kategori</TableHead>
                <TableHead className="text-xs uppercase">Harga</TableHead>
                <TableHead className="pr-6 text-right text-xs uppercase">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-medium text-sm">
              {products.map((p) => (
                <TableRow key={p.id} className="hover:bg-slate-50/50">
                  <TableCell className="pl-6 font-mono text-xs text-slate-500">{p.code}</TableCell>
                  <TableCell className="font-bold text-slate-800">{p.name}</TableCell>
                  <TableCell className="text-slate-600">{p.category}</TableCell>
                  <TableCell className="font-semibold text-emerald-600">{p.price}</TableCell>
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