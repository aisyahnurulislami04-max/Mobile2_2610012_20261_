import React, { createContext, useContext, useState } from "react";

import { Alert } from "react-native";

export interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  noHp: string;
  angkatan: string;
  status: "Aktif" | "Cuti";
  instagram: string;
}

interface MahasiswaContextType {
  mahasiswaList: MahasiswaItem[];
  tambahMahasiswa: (data: Omit<MahasiswaItem, "id" | "status">) => void;
  hapusMahasiswa: (id: string) => void;
}

const MahasiswaContext = createContext<MahasiswaContextType | undefined>(undefined);

const DATA_AWAL: MahasiswaItem[] = [
  {
    id: "1",
    nim: "2610035",
    nama: "Aisyah Nurul Islami",
    prodi: "Sistem Informasi",
    noHp: "6289512486426",
    angkatan: "2026",
    status: "Aktif",
    instagram: "aisyahni18_",
  },
  {
    id: "2",
    nim: "2610036",
    nama: "Anggun Herdini",
    prodi: "Sistem Informasi",
    noHp: "6289675368200",
    angkatan: "2026",
    status: "Cuti",
    instagram: "a.hrdn_",
  },
  {
    id: "3",
    nim: "2610037",
    nama: "Natasya Salsabila",
    prodi: "Teknik Informatika",
    noHp: "6285211241944",
    angkatan: "2026",
    status: "Aktif",
    instagram: "ntsy.s.25",
  },
  {
    id: "4",
    nim: "2310036",
    nama: "Chintya Sari Devi",
    prodi: "Sistem Informasi",
    noHp: "6281371966036",
    angkatan: "2026",
    status: "Aktif",
    instagram: "chintiasaridevi_23",
  },
  {
    id: "5",
    nim: "2610039",
    nama: "Zara Ayunda",
    prodi: "Teknik Informatika",
    noHp: "6282285056575",
    angkatan: "2026",
    status: "Aktif",
    instagram: "zaranyda",
  },
];

export const MahasiswaProvider = ({ children }: { children: React.ReactNode }) => {
  const [mahasiswaList, setMahasiswaList] = useState<MahasiswaItem[]>(DATA_AWAL);

  const tambahMahasiswa = (data: Omit<MahasiswaItem, "id">) => {
    const isNimTerdaftar = mahasiswaList.some((item) => item.nim === data.nim);

    if (isNimTerdaftar) {
      Alert.alert("Gagal", "NIM sudah terdaftar!");
      return;
    }

    const itemBaru: MahasiswaItem = {
      ...data,
      id: Date.now().toString(),
    };

    setMahasiswaList((prev) => [itemBaru, ...prev]);
  };
  const hapusMahasiswa = (id: string) => {
    setMahasiswaList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MahasiswaContext.Provider value={{ mahasiswaList, tambahMahasiswa, hapusMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
};

export const useMahasiswa = () => {
  const context = useContext(MahasiswaContext);
  if (!context) {
    throw new Error("useMahasiswa harus digunakan di dalam MahasiswaProvider");
  }
  return context;
};